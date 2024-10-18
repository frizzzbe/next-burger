import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useLocale } from "@/hooks/useLocale"
import useSWR from "swr"
import { Review } from "./Review"
import type { ReviewType } from "@/types/reviewTypes"

const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .catch((error) => {
      throw new Error(error)
    })

export const ReviewsTemplate = () => {
  const i18n = useLocale()
  const { commentId } = useRouter().query
  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<ReviewType[]>(
    `https://jsonplaceholder.typicode.com/comments${commentId ? `?id=${commentId}` : ""}`,
    fetcher,
  )

  if (isLoading) return "загрузка..."
  if (error) return "ошибка..."
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
            <p>Отзывы не найдены</p>
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
