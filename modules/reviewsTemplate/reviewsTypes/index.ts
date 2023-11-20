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