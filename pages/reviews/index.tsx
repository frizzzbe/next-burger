import type { ReviewsType } from "@/types/reviewTypes"
import { ReviewsTemplate } from "@/modules/reviewsTemplate"

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments")
  const data = await response.json()

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  }
}

const Reviews = ({ reviews }: ReviewsType) => {
  return <ReviewsTemplate reviews={reviews} />
}

export default Reviews
