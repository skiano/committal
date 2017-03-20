import test from 'tape';
import {
  timeFromString,
  timeToString,
  getTime
} from './time';

test('time from string', (t) => {
  t.plan(4);
  t.equal(timeFromString('1:35 AM'), (1 * 60) + 35, 'AM');
  t.equal(timeFromString('2:35 PM'), (14 * 60) + 35, 'PM');
  t.equal(timeFromString('12:00 AM'), 0, 'Midnight');
  t.equal(timeFromString('12:00 PM'), 12 * 60, 'Noon');
});

test('time to string', (t) => {
  t.plan(5);
  t.equal(timeToString((1 * 60) + 35), '1:35 AM', 'AM');
  t.equal(timeToString((13 * 60) + 35), '1:35 PM', 'PM');
  t.equal(timeToString(0), '12:00 AM', 'Midnight');
  t.equal(timeToString(12 * 60), '12:00 PM', 'Noon');
  t.equal(timeToString((1 * 60) + 5), '1:05 AM', 'Two Digit minutes');
});

test('get time from string or number', (t) => {
  t.plan(2);
  t.equal(getTime((1 * 60) + 35), 95, 'From number');
  t.equal(getTime('1:35AM'), 95, 'From String');
});