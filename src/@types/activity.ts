export const activityTitles = ['codeVally', 'kids', 'camps', 'lectures', 'mediaTracks'] as const;
export type ActivityTitlesTypes = (typeof activityTitles)[number];
export interface ITitle {
  title: ActivityTitlesTypes;
}
