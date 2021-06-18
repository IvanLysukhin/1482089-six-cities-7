import {TEXT, NAMES}  from '../constants';
import {nanoid} from '@reduxjs/toolkit';

const generateRandomNumber=  (min = 0 , max = 1, point = 0) => {
  const num = Math.random() * (max - min) + min;
  return Number(num.toFixed(point));
};

const creatRandomReview = () => ({
  name: NAMES[generateRandomNumber(0, NAMES.length - 1)],
  avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
  rating: generateRandomNumber(1, 5, 1),
  date: 'June 2021',
  text: TEXT.split('.').slice(generateRandomNumber(0, 5), generateRandomNumber(5, TEXT.length)).join(''),
  id: nanoid(2),
});

export const reviews = new Array(15).fill('').map((_, i) => ({
  id: 1 + i,
  reviewsArr: new Array(generateRandomNumber(1, 5)).fill('').map(creatRandomReview),
}));
