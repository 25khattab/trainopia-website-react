export type EventTitlesTypes = (typeof eventTitles)[number];
export const eventTitles = ['trainopiaSumer', 'summerProgrammin', 'champion'] as const;
export interface ITitle {
  title: EventTitlesTypes;
}
