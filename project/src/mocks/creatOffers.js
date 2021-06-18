import {CITIES, TEXT, GOODS, DESCRIPTIONS, TYPES, NAMES, OFFER_PHOTOS} from '../constants';

const generateRandomNumber = (min = 0, max = 1, point = 0) => {
  const num = Math.random() * (max - min) + min;
  return Number(num.toFixed(point));
};

export const creatOffers = () => {
  return new Array(4).fill('').map((_, i) => {
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
}


export const STATIC_OFFERS = [
  {
    bedRooms: 2,
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      },
      name: 'Amsterdam',
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
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 100,
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
      name: 'Amsterdam',
    },
    description: 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    goods: ['Heating', 'Cable TV', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Michael',
    },
    id: 2,
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
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
      name: 'Amsterdam',
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
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
      name: 'Amsterdam',
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
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/room.jpg',
    price: 500,
    rating: 2.6,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },


  {
    bedRooms: 2,
    city: {
      location: {
        latitude: 50.9333,
        longitude: 6.95,
        zoom: 12,
      },
      name: 'Cologne',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: 'Ivan',
    },
    id: 5,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 100,
    rating: 4.6,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Private room',
  },

  {
    bedRooms: 1,
    city: {
      location: {
        latitude: 50.8504,
        longitude: 4.34878,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    goods: ['Heating', 'Cable TV', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: 'Michael',
    },
    id: 6,
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
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
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    goods: ['Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 7,
      isPro: false,
      name: 'John',
    },
    id: 7,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.374,
      longitude: 4.88969,
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
        latitude: 53.5753,
        longitude: 10.0153,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 8,
      isPro: true,
      name: 'Sebastian',
    },
    id: 8,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/room.jpg',
    price: 500,
    rating: 2.6,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },

  {
    bedRooms: 1,
    city: {
      location: {
        latitude: 51.2217,
        longitude: 6.77616,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 9,
      isPro: true,
      name: 'Sebastian',
    },
    id: 9,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/room.jpg',
    price: 500,
    rating: 2.6,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },

  {
    bedRooms: 3,
    city: {
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    goods: ['Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: 10,
      isPro: false,
      name: 'John',
    },
    id: 10,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 200,
    rating: 4.6,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
];
