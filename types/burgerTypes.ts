export type BurgerType = {
  name: string
  image: string
  desc: string
  price: number
  id: string
}

export type BurgersType = {
  burgers: BurgerType[]
}

export type BurgersTypeProps = {
  burgers: BurgerType[]
  error?: boolean
}

export type BurgerTypeProps = {
  burger: BurgerType
}
