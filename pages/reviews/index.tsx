import { FC } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import type { ReviewsType } from "@/types/reviewTypes";
import { ReviewsTemplate } from "@/modules/reviewsTemplate";

type ServerSideType = {
  props: ReviewsType;
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
  reviews: ServerSideType;
}>;

const Reviews: FC<ReviewsType> = ({
  reviews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <ReviewsTemplate reviews={reviews} />;
};

export default Reviews;
