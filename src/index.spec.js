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
    mon: [[360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake']],
    tue: [[360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake']],
    wed: [[360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake']],
    thu: [[360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake']],
    fri: [[360, 540, 'Awake'], [540, 720, 'Work'], [720, 780, 'Food'], [780, 1020, 'Work'], [1020, 1320, 'Awake']],
    sat: [[540, 720, 'Awake'], [720, 780, 'Food'], [780, 1380, 'Awake']],
    sun: [[540, 720, 'Awake'], [720, 780, 'Food'], [780, 1380, 'Awake']],
  }, 'should create flatten commitments into plans')
});