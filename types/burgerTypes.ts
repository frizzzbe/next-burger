export type BurgerType = {
  name: string;
  image: string;
  desc: string;
  price: number;
  id: string;
};

export type BurgersType = {
  burgers: BurgerType[];
};
