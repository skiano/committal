export const combineCommitments = (commitments) => {
  const plan = {};
  commitments.forEach(commitment => {
    const days = [...commitment];
    const time = days.pop();
    const meta = time.pop();
  });
}



// ['mon', 'tues', 'wed', ['8:00AM', '9:00AM', { category: 'work' }]],
// ['mon', 'tues', 'wed', ['8:00AM', '9:00AM', { category: 'work' }]],
// ['mon', 'tues', 'wed', ['8:00AM', '9:00AM', { category: 'work' }]],
// ['mon', 'tues', 'wed', ['8:00AM', '9:00AM', { category: 'work' }]],
// ['mon', 'tues', 'wed', ['8:00AM', '9:00AM', { category: 'work' }]],
// ['mon', 'tues', 'wed', ['8:00AM', '9:00AM', { category: 'work' }]],
// ['mon', 'tues', 'wed', ['8:00AM', '9:00AM', { category: 'work' }]],