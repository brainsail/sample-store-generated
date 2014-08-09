(function () {
  

  var products =  [
  {
    name: 'Nike Running Shoe',
    price: 2.95,
    description: 'Various different things about this shoe.',
    images: [
      'images/nike-01-full.jpg',
      'images/nike-01-thumb.jpg'
    ],
    canPurchase: true,
    soldOut: false,
    reviews: [
      {
      stars: 5,
      body: "Nice Shoe!",
      author: "me@there.com"
      },
      {
      stars: 3,
      body: "Meh.",
      author: "you@there.com"
      },
      {
      stars: 2,
      body: "Wouldn't be caught dead in these!",
      author: "us@there.com"
      }
    ]

  },
  {
    name: 'Reebok Ballerina Pump',
    price: 10.95,
    description: 'Various different things about this shoe.',
    images: [
      'images/reebok-01-full.jpg',
      'images/reebok-01-thumb.jpg'
    ],
    canPurchase: true,
    soldOut: false,
    reviews: [
      {
      stars: 5,
      body: "Nice Shoe!",
      author: "me@there.com"
      },
      {
      stars: 3,
      body: "Meh.",
      author: "you@there.com"
      },
      {
      stars: 2,
      body: "Wouldn't be caught dead in these!",
      author: "us@there.com"
      }
    ]
  },
  {
    name: 'Fila Skele-toes Flip Flop',
    price: 12.95,
    description: 'Various different things about this shoe.',
    images: [
      'images/skele-toes-01-full.jpg',
      'images/skele-toes-01-thumb.jpg'
    ],
    canPurchase: true,
    soldOut: false,
    reviews: [
      {
      stars: 5,
      body: "Nice Shoe!",
      author: "me@there.com"
      },
      {
      stars: 3,
      body: "Meh.",
      author: "you@there.com"
      },
      {
      stars: 2,
      body: "Wouldn't be caught dead in these!",
      author: "us@there.com"
      }
    ]
  }
  ];

  angular.module('wc.services.ProductResourceMockData', [])
    .value('ProductResourceMockData', products);

})();