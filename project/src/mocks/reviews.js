const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const NAMES = ['Angelina', 'Ivan', 'Michael', 'John', 'Lewis', 'Sebastian'];

const generateRandomNumber=  (min = 0 , max = 1, point = 0) => {
  const num = Math.random() * (max - min) + min;
  return Number(num.toFixed(point));
};

const creatRandomReview = () => {
  return {
    name: NAMES[generateRandomNumber(0, NAMES.length - 1)],
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    rating:  generateRandomNumber(1, 5, 1),
    date: 'June 2021',
    text: TEXT.split('.').slice(generateRandomNumber(0, 5), generateRandomNumber(5, TEXT.length)).join(''),
  };
};

export const reviews = new Array(4).fill('').map((_, i) => {
  return {
    id: 1 + i,
    reviewsArr: new Array(generateRandomNumber(1, 5)).fill('').map(creatRandomReview),
  };
});

// export const STATIC_REVIEWS = [
//   {
//     name: 'Lewis',
//     avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
//     rating:  1.3,
//     date: 'June 2021',
//     text: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.',
//   },
//   {
//     name: 'Ivan',
//     avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
//     rating:  3.3,
//     date: 'June 2021',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
//   },
//   {
//     name: 'Michael',
//     avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
//     rating:  4.1,
//     date: 'June 2021',
//     text: 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.',
//   },
//   {
//     name: 'John',
//     avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
//     rating:  2.6,
//     date: 'June 2021',
//     text: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
//   },
// ]
