export type ReviewType = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export type ReviewsType = {
  reviews: ReviewType[];
};
