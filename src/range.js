import { day } from './index';

// http://softwareengineering.stackexchange.com/a/241386
export const subtractRange = (minuend, subtrahend) => {
  const m = minuend;
  const s = subtrahend;
  const meta = minuend[2];

  /** if no overlap */
  if (s[0] > m[1] || s[1] < m[0]) {
    return [[m[0], m[1], meta]];
  }

  /** store diffs */
  const diff = [];

  /** if 0 side overlaps */
  if (s[0] > m[0]) { diff.push([m[0], s[0], meta]); }

  /** if 1 side overlaps */
  if (s[1] < m[1]) { diff.push([s[1], m[1], meta]); }

  return diff;
}

export const getOuterRange = (ranges) => (
  ranges.reduce((outerRange, range) => [
    Math.min(range[0], outerRange[0]),
    Math.max(range[1], outerRange[1]),
  ], [Infinity, -Infinity])
);

export const mergeRanges = (ranges = [], outerRange) => {
  const copy = Array.from(ranges).reverse();
  let solution = [getOuterRange(ranges)];

  while (copy.length) {
    const next = copy.pop();

    solution.forEach(event => {
      solution.splice(
        solution.indexOf(event), 1,
        ...subtractRange(event, next)
      );
    });

    solution.push(next);
  }

  return solution.sort((a, b) => a[0] > b[0]);
}
