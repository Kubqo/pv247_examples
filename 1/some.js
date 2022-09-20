const userCart = [
  { producdId: 1, producdPrice: 355 },
  { producdId: 2, producdPrice: 5355 },
  { producdId: 3, producdPrice: 34 },
  { producdId: 4, producdPrice: 3535 },
];

console.log(userCart.some((e) => e.producdPrice > 10000));

const userCart_2 = [
  { producdId: 1, producdPrice: 355 },
  { producdId: 2, producdPrice: 5355 },
  { producdId: 3, producdPrice: 34 },
  { producdId: 4, producdPrice: 3535 },
  { producdId: 4, producdPrice: 15000 },
];

console.log(userCart_2.some((e) => e.producdPrice > 10000));

const isBiggerThan10 = (element) => element > 10;

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));
