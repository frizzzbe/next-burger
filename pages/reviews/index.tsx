import Head from "next/head"
import { useLocale } from "@/hooks/useLocale"
import { ReviewsTemplate } from "@/modules/ReviewsTemplate"

const Reviews = () => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.reviewsTitle}</title>
      </Head>
      <ReviewsTemplate />
    </>
  )
}

export default Reviews
