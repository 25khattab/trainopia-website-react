export const eventTitles = ['yallacamp', 'summerProgrammin', 'champion'] as const;
export type EventTitlesTypes = (typeof eventTitles)[number];
export interface ITitle {
  title: EventTitlesTypes;
}
