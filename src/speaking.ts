export interface SpeakingEngagement {
  conference: string;
  conferenceUrl: string;
  talkTitle: string;
  date: string;
  location: string;
}

export const upcomingEngagements: SpeakingEngagement[] = [];

export const pastEngagements: SpeakingEngagement[] = [];
