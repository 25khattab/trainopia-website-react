export type EventTitlesTypes = (typeof eventTitles)[number];
export const eventTitles = ['superHero', 'gameDevelopmentTrack', 'champion'] as const;
export interface ITitle {
  title: EventTitlesTypes;
}
