# committal

Commital takes a list (or lists) of "commitment" objects and merges them into a list of time chunks. It assumes that commitments with higher indexes are higher priority.

## example

```javascript

const commitments = [
  {
    days: ['mon', 'tue', 'wed', 'thu', 'fri'],
    time: ['8:00 AM', '4:00 PM'],
    meta: { category: 'work' }
  },
  {
    days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    time: ['8:00 AM', '4:00 PM'],
    meta: { category: 'work' }
  },
];

const timeChunks = commital(commitments);

// in should.js
timeChunks.mon.should.match([
  
])

```

```javacript
const commitment = ['8:00AM', '9:00AM', { category: 'work' }]
const plan = ['mon','tues','wed', commitment ]

const plan = ['mon','tues','wed', ['8:00AM', '9:00AM', { category: 'work' }] ]



```


