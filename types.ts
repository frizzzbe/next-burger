export type burgerType = {
  name: string,
  image: string,
  desc: string,
  price: number,
  id: string
}

export type burgersType = {
  burgers: burgerType[]
}

export type reviewType = {
  body: string,
  email: string,
  id: number,
  name: string,
  postId: number
}

export type reviewsType = {
  reviews: reviewType[]
}