import { getTime } from './time';
import { mergeRanges } from './range';

export const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
export const weekends = ['sat', 'sun'];
export const everyday = [...weekdays, ...weekends];
export const dayRange = [0, (24 * 60), null];

export const combineCommitments = (commitments) => {
  const plan = everyday.reduce((p, day) => (Object.assign(p, {[day]: []})), {});

  commitments.forEach(commitment => {
    const days = [...commitment];
    const activity = days.pop();
    days.forEach(day => {
      if (!plan.hasOwnProperty(day)) {
        throw new Error(`
          Unknown day: ${day}
          supported days: ${everyday.join()}
        `)
      }
      plan[day].push([
        getTime(activity[0]),
        getTime(activity[1]),
        activity[2],
      ]);
    })
  });

  Object.keys(plan).forEach(day => {
    plan[day] = mergeRanges(plan[day], dayRange);
  });

  return plan;
}