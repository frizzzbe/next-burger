import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useLocale } from "@/hooks/useLocale"
import useSWR from "swr"
import { Review } from "./Review"
import { axiosGet } from "@/helpers/axiosGet"
import type { ReviewType } from "@/types/reviewTypes"

export const ReviewsTemplate = () => {
  const i18n = useLocale()
  const { commentId } = useRouter().query
  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<ReviewType[]>(
    `https://jsonplaceholder.typicode.com/comments${commentId ? `?id=${commentId}` : ""}`,
    axiosGet,
  )

  if (isLoading) return <p>{i18n.statusLoading}</p>
  if (error) return <p>{i18n.statusError}</p>
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.reviewsTitle}</title>
      </Head>
      <div>
        <h2>{i18n.reviews}</h2>
        <ul className="reviews">
          {reviews.length ? (
            reviews.slice(0, 20).map((res) => <Review key={res.id} {...res} />)
          ) : (
            <p>{i18n.emptyMessage}</p>
          )}
        </ul>
        {commentId && (
          <Link href="/reviews" className="btn center">
            {i18n.reviewsAllReviews}
          </Link>
        )}
      </div>
    </>
  )
}
