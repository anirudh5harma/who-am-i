import { Link } from "@tanstack/react-router";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostDate({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-muted-foreground text-base">
      {formatDate(date)}
    </time>
  );
}

export function PostHeader({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <header className="mb-12">
      <h1
        className="font-normal mb-4 text-heading-accent"
        style={{ fontSize: "2.2rem", lineHeight: 1.1 }}
      >
        {title}
      </h1>
      <PostDate date={date} />
    </header>
  );
}

export function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link
          to="/blog"
          className="text-muted-foreground hover:text-foreground transition-colors text-base"
        >
          ← Back to writing
        </Link>
      </div>
      {children}
    </article>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto my-6 text-sm font-mono leading-relaxed border border-border">
      <code>{children}</code>
    </pre>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-6">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-heading-accent mt-12 mb-4"
      style={{ fontSize: "1.6rem", lineHeight: 1.2 }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-foreground mt-8 mb-3"
      style={{ fontSize: "1.3rem", lineHeight: 1.3 }}
    >
      {children}
    </h3>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

const scalableRestApisPost: BlogPost = {
  slug: "scalable-rest-apis-in-go",
  title: "Building Scalable REST APIs in Go",
  date: "2026-06-17",
  excerpt:
    "A practical guide to structuring, building, and deploying production-ready REST APIs in Go that can grow with your product.",
  content: (
    <PostLayout>
      <PostHeader
        title="Building Scalable REST APIs in Go"
        date="2026-06-17"
      />

      <Paragraph>
        Go has become the language of choice for building high-performance
        backend services. Its simplicity, fast compile times, and excellent
        concurrency primitives make it ideal for APIs that need to handle
        thousands of requests per second. But the language alone doesn't
        guarantee scale. How you structure your project, handle errors, manage
        database connections, and observe your system matters far more.
      </Paragraph>

      <Paragraph>
        After building and refactoring several production APIs, I've settled on a
        pattern that balances clarity with room to grow. This isn't about
        microservices or Kubernetes. It's about the fundamentals that let a
        single service evolve without becoming a mess.
      </Paragraph>

      <H2>Project Structure</H2>

      <Paragraph>
        A flat structure works until it doesn't. Once you have more than a few
        handlers, you'll want clear boundaries. I use a layered approach inspired
        by clean architecture, but pragmatically stripped down:
      </Paragraph>

      <CodeBlock>{`cmd/
  api/
    main.go
internal/
  server/
    server.go       // HTTP server setup, routes, middleware
    middleware.go    // Auth, logging, recovery
  handler/
    user.go          // HTTP handlers for user routes
    health.go        // Health check
  service/
    user.go          // Business logic
  store/
    user.go          // Database operations
    store.go         // DB connection and interfaces
  model/
    user.go          // Domain types and validation
  config/
    config.go        // Env vars and constants
pkg/
  response/          // Standard API response wrappers
  validator/         // Request validation helpers
`}</CodeBlock>

      <Paragraph>
        The key rule: <strong>dependencies point inward</strong>. Handlers depend
        on services. Services depend on stores. Stores depend on the database.
        Nothing in the inner layers knows about HTTP. This makes testing and
        refactoring painless.
      </Paragraph>

      <H2>Routing and Handler Setup</H2>

      <Paragraph>
        The standard library's <code>net/http</code> is underrated, but for
        anything non-trivial I reach for{" "}
        <a
          href="https://github.com/go-chi/chi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70 transition-opacity"
        >
          chi
        </a>
        . It's lightweight, idiomatic, and gives you middleware composition
        without magic.
      </Paragraph>

      <CodeBlock>{`func (s *Server) routes() {
    s.router.Route("/api/v1", func(r chi.Router) {
        r.Use(middleware.RequestID)
        r.Use(middleware.RealIP)
        r.Use(s.loggerMiddleware)
        r.Use(middleware.Recoverer)
        r.Use(middleware.Timeout(30 * time.Second))

        r.Get("/health", handler.HealthCheck)

        r.Route("/users", func(r chi.Router) {
            r.Get("/", handler.ListUsers)
            r.Post("/", handler.CreateUser)
            r.Route("/{id}", func(r chi.Router) {
                r.Get("/", handler.GetUser)
                r.Put("/", handler.UpdateUser)
                r.Delete("/", handler.DeleteUser)
            })
        })
    })
}`}</CodeBlock>

      <Paragraph>
        Grouping routes by resource and applying middleware at the right level
        keeps the setup readable. Auth middleware goes on the sub-router that
        needs it, not globally.
      </Paragraph>

      <H2>Request Validation</H2>

      <Paragraph>
        Don't validate in handlers. Extract, validate, and transform in one
        place. I define request structs with tags and a Validate method:
      </Paragraph>

      <CodeBlock>{`type CreateUserRequest struct {
    Name  string \`json:"name" validate:"required,min=2,max=100"\`
    Email string \`json:"email" validate:"required,email"\`
    Role  string \`json:"role" validate:"oneof=admin user guest"\`
}

func (r *CreateUserRequest) Validate() error {
    // Custom validation logic beyond struct tags
    if strings.Contains(r.Name, "\\"") {
        return fmt.Errorf("name contains invalid characters")
    }
    return validator.New().Struct(r)
}`}</CodeBlock>

      <Paragraph>
        The handler becomes a thin orchestration layer: decode the request,
        validate it, call the service, and write the response. That's it.
      </Paragraph>

      <H2>Error Handling</H2>

      <Paragraph>
        Consistent error responses are a kindness to your API consumers. I use a
        small set of domain errors that map cleanly to HTTP status codes:
      </Paragraph>

      <CodeBlock>{`var (
    ErrNotFound     = errors.New("resource not found")
    ErrConflict     = errors.New("resource already exists")
    ErrUnauthorized = errors.New("unauthorized")
    ErrForbidden    = errors.New("forbidden")
    ErrInvalidInput = errors.New("invalid input")
)

func HTTPStatusFromError(err error) int {
    switch {
    case errors.Is(err, ErrNotFound):
        return http.StatusNotFound
    case errors.Is(err, ErrConflict):
        return http.StatusConflict
    case errors.Is(err, ErrUnauthorized):
        return http.StatusUnauthorized
    case errors.Is(err, ErrForbidden):
        return http.StatusForbidden
    case errors.Is(err, ErrInvalidInput):
        return http.StatusBadRequest
    default:
        return http.StatusInternalServerError
    }
}`}</CodeBlock>

      <Paragraph>
        The service layer returns domain errors. The handler maps them to HTTP.
        This separation means your business logic never imports{" "}
        <code>net/http</code>.
      </Paragraph>

      <H2>Database Layer</H2>

      <Paragraph>
        For most projects, I use plain <code>database/sql</code> with{" "}
        <code>lib/pq</code> or <code>pgx</code>. ORMs hide too much. But raw SQL
        gets tedious, so I generate type-safe code with{" "}
        <a
          href="https://sqlc.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70 transition-opacity"
        >
          sqlc
        </a>
        . Write SQL queries, get Go functions. No string interpolation, no
        reflection.
      </Paragraph>

      <CodeBlock>{`-- name: GetUserByID :one
SELECT id, name, email, role, created_at
FROM users
WHERE id = $1;

-- name: ListUsers :many
SELECT id, name, email, role, created_at
FROM users
ORDER BY created_at DESC
LIMIT $1 OFFSET $2;`}</CodeBlock>

      <Paragraph>
        For connection management, create the pool at startup and pass it down:
      </Paragraph>

      <CodeBlock>{`db, err := sql.Open("pgx", dsn)
if err != nil {
    log.Fatal(err)
}

db.SetMaxOpenConns(25)
db.SetMaxIdleConns(25)
db.SetConnMaxLifetime(5 * time.Minute)`}</CodeBlock>

      <Paragraph>
        The store struct holds <code>*sql.DB</code> or a sqlc-generated
        interface. Repositories are stateless. The connection pool does the hard
        work of reuse and backpressure.
      </Paragraph>

      <H2>Observability</H2>

      <Paragraph>
        You can't scale what you can't see. At minimum, instrument three things:
      </Paragraph>

      <Ul>
        <Li>
          <strong>Request logging</strong>: method, path, status, duration, and
          request ID for tracing.
        </Li>
        <Li>
          <strong>Structured logs</strong>: use <code>slog</code> or{" "}
          <code>zap</code>. JSON in production, pretty in development.
        </Li>
        <Li>
          <strong>Metrics</strong>: request latency histograms, error rates, and
          database connection pool stats. Prometheus client libraries work well.
        </Li>
      </Ul>

      <CodeBlock>{`func (s *Server) loggerMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        ww := middleware.NewWrapResponseWriter(w, r.ProtoMajor)

        next.ServeHTTP(ww, r)

        slog.Info("request",
            "method", r.Method,
            "path", r.URL.Path,
            "status", ww.Status(),
            "duration", time.Since(start),
            "request_id", middleware.GetReqID(r.Context()),
        )
    })
}`}</CodeBlock>

      <H2>Testing</H2>

      <Paragraph>
        Go's testing culture is one of its strengths. I write three kinds of
        tests:
      </Paragraph>

      <Ul>
        <Li>
          <strong>Unit tests</strong> for services with mocked stores.
        </Li>
        <Li>
          <strong>Integration tests</strong> for stores against a real test
          database running in Docker.
        </Li>
        <Li>
          <strong>Handler tests</strong> using{" "}
          <code>httptest.ResponseRecorder</code> to verify routing, status
          codes, and response shapes.
        </Li>
      </Ul>

      <Paragraph>
        The <code>testing/slogtest</code> package and a simple in-memory store
        implementation make unit tests fast and deterministic. Integration tests
        run in CI against a Postgres container spun up with Docker Compose.
      </Paragraph>

      <H2>Graceful Shutdown</H2>

      <Paragraph>
        Production APIs don't crash. They shut down gracefully, finishing
        in-flight requests before exiting. The pattern is well-documented but
        worth repeating:
      </Paragraph>

      <CodeBlock>{`srv := &http.Server{
    Addr:         ":8080",
    Handler:      router,
    ReadTimeout:  5 * time.Second,
    WriteTimeout: 10 * time.Second,
    IdleTimeout:  120 * time.Second,
}

go func() {
    if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
        log.Fatalf("listen: %s\\n", err)
    }
}()

quit := make(chan os.Signal, 1)
signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
<-quit

ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

if err := srv.Shutdown(ctx); err != nil {
    log.Fatal("server forced to shutdown:", err)
}`}</CodeBlock>

      <H2>Closing Thoughts</H2>

      <Paragraph>
        Scalability isn't about choosing the right framework or deploying to
        Kubernetes on day one. It's about discipline in the small things: clear
        boundaries between layers, consistent error handling, observable systems,
        and tests that give you confidence to refactor.
      </Paragraph>

      <Paragraph>
        Go makes the easy things easy and the hard things possible. Your job is
        to not get in the way. Start simple, instrument everything, and evolve
        the architecture as the product demands it. The best systems are the
        ones that are boring to operate.
      </Paragraph>

      <div className="mt-16 pt-6 border-t border-foreground/10">
        <p className="text-muted-foreground text-base">
          If you found this useful, feel free to{" "}
          <a
            href="https://x.com/anirudh5harma"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            reach out on X
          </a>{" "}
          or check the code I write on{" "}
          <a
            href="https://github.com/anirudh5harma"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </PostLayout>
  ),
};

export const blogPosts: BlogPost[] = [scalableRestApisPost];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
