const ruBurgers = [
  {
    name: "Чизбургер",
    image: `${process.env.API_URL}/images/cheese.jpg`,
    desc: "Классический бургер с бифштексом из 100% говядины с маринованными огурчиками и свежей пшеничной булочкой.",
    price: 110,
    id: "001",
  },
  {
    name: "Чикен Бургер",
    image: `${process.env.API_URL}/images/chicken.jpg`,
    desc: "Куриный бургер с добавлением расплавленного сыра, соуса Барбекю и листового салата.",
    price: 150,
    id: "002",
  },
  {
    name: "Двойной Гамбургер",
    image: `${process.env.API_URL}/images/double.jpg`,
    desc: "Двойной гамбургер с бифштексом из 100% говядины и расплавленным сыром Чеддер и пряным соусом.",
    price: 200,
    id: "003",
  },
];

const enBurgers = [
  {
    name: "Cheeseburger",
    image: `${process.env.API_URL}/images/cheese.jpg`,
    desc: "Classic burger with 100% beef steak with pickled cucumbers and fresh wheat bun.",
    price: 110,
    id: "001",
  },
  {
    name: "Chickenburger",
    image: `${process.env.API_URL}/images/chicken.jpg`,
    desc: "Chicken burger with melted cheese, barbecue sauce and lettuce.",
    price: 150,
    id: "002",
  },
  {
    name: "Double Burger",
    image: `${process.env.API_URL}/images/double.jpg`,
    desc: "Double burger with 100% beef steak and melted Cheddar cheese and spicy sauce.",
    price: 200,
    id: "003",
  },
];

export const getBurgers = (locale) => (locale === "ru" ? ruBurgers : enBurgers);
