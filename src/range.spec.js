import test from 'tape';
import { subtractRange, mergeRanges, getOuterRange } from './range';

test('subtractRange', (t) => {
  t.plan(5);

  t.deepLooseEqual(
    subtractRange([0, 10, 'A'], [3, 5, 'B']),
    [[0, 3, 'A'], [5, 10, 'A']],
    'should punch a hole'
  );

  t.deepLooseEqual(
    subtractRange([0, 10, 'A'], [7, 10, 'B']),
    [[0, 7, 'A']],
    'should remove end (exact)'
  );

  t.deepLooseEqual(
    subtractRange([0, 10, 'A'], [8, 12, 'B']),
    [[0, 8, 'A']],
    'should remove end'
  );

  t.deepLooseEqual(
    subtractRange([5, 10, 'A'], [5, 7, 'B']),
    [[7, 10, 'A']],
    'should remove beginning: (exact)'
  );

  t.deepLooseEqual(
    subtractRange([5, 10, 'A'], [3, 8, 'B']),
    [[8, 10, 'A']],
    'should remove beginning'
  );
});

test('mergeRanges', (t) => {
  t.plan(2);

  t.deepLooseEqual(
    mergeRanges([
      [1, 6, 'A'],
      [2, 4, 'B'],
      [7, 9, 'C'],
      [8, 10, 'D'],
    ]),
    [
      [1, 2, 'A'],
      [2, 4, 'B'],
      [4, 6, 'A'],
      [6, 7, undefined],
      [7, 8, 'C'],
      [8, 10, 'D'],
    ],
    'should merge and respect higher priorities'
  );

  t.deepLooseEqual(
    mergeRanges([
      [8, 15, 'A'],
      [0, 3, 'B'],
    ]),
    [
      [0, 3, 'B'],
      [3, 8, undefined],
      [8, 15, 'A'],
    ],
    'should allow extending parent range'
  );
});

test('getOuterRange', (t) => {
  t.plan(4)

  t.deepLooseEqual(
    getOuterRange([[10, 100], [90, 200]]),
    [10, 200],
    'should find outer range'
  );

  t.deepLooseEqual(
    getOuterRange([[10, 100], [90, 200], [0, 1]]),
    [0, 200],
    'any order'
  );

  t.deepLooseEqual(
    getOuterRange([[-100, 500], [90, 200], [0, 1]]),
    [-100, 500],
    'negative minimum'
  );

  t.deepLooseEqual(
    getOuterRange([[-100, -10], [-50, -40]]),
    [-100, -10],
    'negative maximum'
  );
});