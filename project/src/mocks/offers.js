const generateRandomNumber = (min = 0, max = 1, point = 0) => {
  const num = Math.random() * (max - min) + min;
  return Number(num.toFixed(point));
};

const CITIES = ['Tokyo', 'Seul', 'Shanghai', 'Singapore', 'New-York', 'Pusan', 'Helsinki', 'Heppenheim'];
const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const GOODS = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'];
const DESCRIPTIONS = ['Beautiful & luxurious apartment at great location', 'Wood and stone place', 'Canal View Prinsengracht', 'Nice, cozy, warm big bed apartment'];
const TYPES = ['Private room', 'Apartment', 'House', 'Villa'];
const NAMES = ['Angelina', 'Ivan', 'Michael', 'John', 'Lewis', 'Sebastian'];
const OFFER_PHOTOS = ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg'];

export const offers = new Array(4).fill('').map((_, i) => {
  const min = generateRandomNumber(0, GOODS.length - 1);
  const max = min + generateRandomNumber(0, GOODS.length - 1 - min);

  return {
    bedRooms: generateRandomNumber(0, 4),
    city: {
      location: {
        latitude: 52.370216 + generateRandomNumber(0, 1, 6),
        longitude: 4.895168 + generateRandomNumber(0, 1, 6),
        zoom: 10,
      },
      name: CITIES[generateRandomNumber(0, CITIES.length - 1)],
    },
    description: TEXT.split('.').slice(generateRandomNumber(0, 5), generateRandomNumber(5, TEXT.length)).join(''),
    goods: GOODS.slice().splice(min, max),
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: i + 1,
      isPro: !generateRandomNumber(),
      name: NAMES[generateRandomNumber(0, NAMES.length - 1)],
    },
    id: i + 1,
    images: OFFER_PHOTOS.slice(0, generateRandomNumber(0, OFFER_PHOTOS.length - 1)),
    isFavorite: !generateRandomNumber(),
    isPremium: !generateRandomNumber(),
    location: {
      latitude: 52.35514938496378 + generateRandomNumber(0, 1, 10),
      longitude: 4.673877537499948 + generateRandomNumber(0, 1, 10),
      zoom: 8,
    },
    maxAdults: generateRandomNumber(1, 5),
    previewImage: `img/apartment-0${generateRandomNumber(1, 3)}.jpg`,
    price: generateRandomNumber(100, 500),
    rating: generateRandomNumber(1, 5, 1),
    title: DESCRIPTIONS[generateRandomNumber(0, DESCRIPTIONS.length - 1)],
    type: TYPES[generateRandomNumber(1, TYPES.length - 1)],
  };
});


export const STATIC_OFFERS = [
  {
    bedRooms: 2,
    city: {
      location: {
        latitude: 52.370213,
        longitude: 4.895132,
        zoom: 10,
      },
      name: 'Tokyo',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Ivan',
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 51.35514938496328,
      longitude: 4.6738775374999232,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 200,
    rating: 4.6,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Private room',
  },

  {
    bedRooms: 1,
    city: {
      location: {
        latitude: 52.120213,
        longitude: 5.895132,
        zoom: 10,
      },
      name: 'Seul',
    },
    description: 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    goods: ['Heating', 'Cable TV', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Michael',
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35414938496328,
      longitude: 3.6746775374999232,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    price: 350,
    rating: 3.7,
    title: 'Wood and stone place',
    type: 'Villa',
  },

  {
    bedRooms: 3,
    city: {
      location: {
        latitude: 53.372213,
        longitude: 5.895132,
        zoom: 10,
      },
      name: 'Singapore',
    },
    description: 'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    goods: ['Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'John',
    },
    id: 3,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3554344938496328,
      longitude: 4.6738435374999232,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 200,
    rating: 4.6,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },

  {
    bedRooms: 1,
    city: {
      location: {
        latitude: 53.372113,
        longitude: 5.895163,
        zoom: 10,
      },
      name: 'Pusan',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Sebastian',
    },
    id: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 54.3567344938496328,
      longitude: 5.6738435374999232,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 500,
    rating: 2.6,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
];
