export const calcRatingInPercent = (rating) => `${rating / 5 * 100}%`;

export const groupCities = (citiesArr, citiesOffers) =>
  citiesArr.map((city) => ({
    name: city,
    offers: citiesOffers.filter((offer) => offer.city.name === city),
  }));
