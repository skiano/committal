import test from 'tape';
import { mergeCommitments } from './index';
import { weekdays, weekends, everyday } from './index';

test('mergeCommitments', (t) => {
  t.plan(1);

  const plan = mergeCommitments([
    [...weekdays, ['6:00AM', '10:00PM', 'Awake']],
    [...weekends, ['9:00AM', '11:00PM', 'Awake']],
    [...weekdays, ['9:00AM', '5:00PM', 'Work']],
    [...everyday, ['12:00PM', '1:00PM', 'Food']],
  ])

  t.deepLooseEqual(plan, {
    mon: [[0, 360, null], [360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake'], [1320, 1440, null]],
    tue: [[0, 360, null], [360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake'], [1320, 1440, null]],
    wed: [[0, 360, null], [360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake'], [1320, 1440, null]],
    thu: [[0, 360, null], [360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake'], [1320, 1440, null]],
    fri: [[0, 360, null], [360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake'], [1320, 1440, null]],
    sat: [[0, 540, null], [540, 720, 'Awake'], [720, 780, 'Food'], [780, 1380, 'Awake'], [1380, 1440, null]],
    sun: [[0, 540, null], [540, 720, 'Awake'], [720, 780, 'Food'], [780, 1380, 'Awake'], [1380, 1440, null]],
  }, 'should create flatten commitments into plans')
});