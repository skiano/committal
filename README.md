# committal

Commital takes a list (or lists) of "commitment" objects and merges them into a list of time chunks. It assumes that commitments with higher indexes are higher priority.

## example

```javascript
const weekdays = ['mon','tues', 'wed', 'thus', 'fri'];
const weekends = ['sat','sun'];
const alldays = [...weekdays, ...weekends];

const work = { category: 'work' };
const food = { category: 'food' };

const commitments = [
  [...weekdays, ['6AM', '10PM']],
  [...weekdays, ['9AM', '11PM']],
  [...weekdays, ['9AM', '5PM', work]],
  [...alldays, ['12PM', '1PM', food]]
];

const timeChunks = commital(commitments);

// in should.js
timeChunks.mon.should.match([
  
])
```


