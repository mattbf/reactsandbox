const now = new Date()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date('April 1, 2019 03:30:00'),
    end: new Date('April 1, 2019 04:30:00'),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date('April 10, 2019 03:30:00'),
    end: new Date('April 10, 2019 04:30:00'),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date('April 8, 2019 03:30:00'),
    end: new Date('April 8, 2019 04:30:00'),
  },
  {
    id: 3,
    title: 'Dinner',
    start: new Date('April 18, 2019 03:30:00'),
    end: new Date('April 18, 2019 04:30:00'),
  },
  {
    id: 4,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 5,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date('May 10, 2019 03:30:00'),
    end: new Date('May 10, 2019 04:30:00'),
  },
]
