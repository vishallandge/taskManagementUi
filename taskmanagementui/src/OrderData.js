export default [
  {
    stage: 'NEW ORDERS',
    results: [
      {
        image: '1.jpg',
        time: '5 days left',
        hours: '20 hrs',
        price: '$320',
        status: 'NEW ORDER',
        message: {
          name: 'Soniya',
          image: '2.png'
        }
      },
      {
        image: '2.jpg',
        time: '3 days left',
        hours: '4 hrs',
        price: '$85',
        status: 'NEW ORDER',
        message: {
          name: 'Soniya',
          image: '1.png'
        }
      }
    ]
  },
  {
    stage: 'IN PROGRESS',
    results: [
      {
        image: '3.jpg',
        time: 'Due in 2 days, 5 hrs',
        hours: '5 hrs',
        price: '$155',
        status: 'IN PROGRESS',
        message: {
          name: 'Soniya',
          reply: 0,
          image: '4.png'
        }
      },
      {
        image: '2.jpg',
        time: 'Due in 3 days, 2hrs',
        hours: '8 hrs',
        price: '$385',
        status: 'IN PROGRESS',
        message: {
          name: 'John',
          reply: 1,
          draft: 0,
          image: '3.png'
        }
      }
    ]
  },
  {
    stage: 'WAITING FOR BUYER',
    results: [
      {
        image: '1.jpg',
        time: '3 days left',
        hours: '3 hrs',
        price: '$385',
        status: 'DELIVERED',
        message: {
          name: 'Michal',
          image: '2.png'
        }
      }
    ]
  },
  {
    stage: 'COMPLETED',
    results: [
      {
        image: '4.jpg',
        time: 'DEC 12, 9:43PM',
        price: '$346',
        status: 'COMPLETED',
        message: {
          name: 'Michal',
          image: '2.png'
        }
      },
      {
        image: '5.jpg',
        time: 'DEC 13, 8:21PM',
        price: '$320',
        status: 'COMPLETED',
        message: {
          name: 'Michal',
          image: '2.png'
        }
      },
      {
        image: '3.jpg',
        time: 'DEC 12, 9:43PM',
        hours: '20 hrs',
        price: '$385',
        status: 'CANCELLED',
        message: {
          name: 'Kat',
          image: '3.png'
        }
      }
    ]
  }
]