# committal.js

Commital takes a list (or lists) of "commitment" objects and merges them into a list of time chunks. It assumes that commitments with higher indexes are higher priority.

## example

```javascript
import { mergeCommitments } from 'committal';

const weekdays = ['mon','tues', 'wed', 'thus', 'fri'];
const weekends = ['sat','sun'];
const alldays = [...weekdays, ...weekends];

const work = { category: 'work' };
const food = { category: 'food' };
const awake = { category: 'awake' };

const commitments = [
  [...weekdays, ['6AM','10PM', awake]],  // commits to being awake from 6am–10pm on weekdays
  [...weekends, ['9AM','11PM', awake]],  // commits to being awake from 9am–11pm on weekends
  [...weekdays, ['9AM','5PM', work]],    // commits to being at work from 9am–5pm on weekdays
  [...alldays, ['12PM','1PM', food]],    // commits to eating food from 12pm–1pm everyday
];

const { mon, sat } = mergeCommitments(commitments);

// mon
[
  ['6AM','9AM', { category: 'awake' }],
  ['9AM','12PM', { category: 'work' }],
  ['12PM','1PM', { category: 'food' }],
  ['1PM','5PM', { category: 'work' }],
  ['5PM','10PM', { category: 'awake' }],
];

// sat
[
  ['9AM','12PM', { category: 'awake' }],
  ['12PM','1PM', { category: 'food' }],
  ['1PM','11PM', { category: 'awake' }],
];
```


