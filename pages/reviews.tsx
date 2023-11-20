import { FC } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { reviewsType } from "../types";
import { ReviewsTemplate } from "../modules/reviewsTemplate";

type serverSideType = {
  props: reviewsType;
};

export const getServerSideProps = (async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}) satisfies GetServerSideProps<{
  reviews: serverSideType;
}>;

const Reviews: FC<reviewsType> = ({
  reviews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <ReviewsTemplate reviews={reviews} />;
};

export default Reviews;
