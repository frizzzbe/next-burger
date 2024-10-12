import Head from "next/head"
import { useLocale } from "@/hooks/useLocale"
import { ReviewsTemplate } from "@/modules/ReviewsTemplate"
import type { ReviewsType } from "@/types/reviewTypes"

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
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.reviewsTitle}</title>
      </Head>
      <ReviewsTemplate reviews={reviews} />
    </>
  )
}

export default Reviews
