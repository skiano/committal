# committal.js

Commital takes a list (or lists) of "commitment" objects and merges them into a list of time chunks. It assumes that commitments with higher indexes are higher priority.

## example

```javascript
import {
  mergeCommitments,
  weekdays,
  weekends,
  everyday,
} from 'committal';

const commitments = [
  [...weekdays, [ '6AM','10PM', { category: 'awake' }]],
  [...weekends, [ '9AM','11PM', { category: 'awake' }]],
  [...weekdays, [ '9AM', '5PM', { category: 'work'  }]],
  [...everyday, ['12PM', '1PM', { category: 'food'  }]],
];

const { mon, sat } = mergeCommitments(commitments);

// mon
// [
//   [ '6AM', '9AM', { category: 'awake' }],
//   [ '9AM','12PM', { category: 'work'  }],
//   ['12PM', '1PM', { category: 'food'  }],
//   [ '1PM', '5PM', { category: 'work'  }],
//   [ '5PM','10PM', { category: 'awake' }],
// ];

// sat
// [
//   [ '9AM','12PM', { category: 'awake' }],
//   ['12PM', '1PM', { category: 'food'  }],
//   [ '1PM','11PM', { category: 'awake' }],
// ];
```


