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
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
  }, 'should create flattened days')
});