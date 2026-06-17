export interface SpeakingEngagement {
  conference: string;
  conferenceUrl: string;
  talkTitle: string;
  date: string;
  location: string;
}

export const upcomingEngagements: SpeakingEngagement[] = [];

export const pastEngagements: SpeakingEngagement[] = [
  {
    conference: "JSConf Tokyo",
    conferenceUrl: "https://jsconf.jp/",
    talkTitle: "JS Engine",
    date: "2023",
    location: "Tokyo, Japan",
  },
];
