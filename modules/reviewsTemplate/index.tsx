import { useEffect, useState } from "react"
import type { FC } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import useLocale from "@/hooks/useLocale"
import Review from "./Review"
import type { ReviewsType } from "@/types/reviewTypes"

export const ReviewsTemplate: FC<ReviewsType> = ({ reviews }: ReviewsType) => {
  const router = useRouter()
  const i18n = useLocale()
  const [revs, setRevs] = useState(reviews)

  const commentPageId = (id) => {
    router.push(`?commentId=${id}`, "", { shallow: true })
  }

  // https://jsonplaceholder.typicode.com/comments?id=5
  useEffect(() => {
    if (router.query.commentId) {
      setRevs(revs.filter((curr) => String(curr.id) === router.query.commentId))
    } else {
      setRevs(reviews)
    }
  }, [router.query.commentId])

  return (
    <>
      <Head>
        <title>
          {router.query.commentId
            ? `${i18n.mainTitle} | ${i18n.reviewTitle} №${router.query.commentId}`
            : `${i18n.mainTitle} | ${i18n.reviewsTitle}`}
        </title>
      </Head>
      <div>
        <h1>{i18n.reviews}</h1>
        <ul className="reviews">
          {!!revs.length &&
            revs
              .slice(0, 20)
              .map((res) => (
                <Review res={res} key={res.id} onClick={() => commentPageId(res.id)} />
              ))}
        </ul>
        {router.query.commentId && (
          <Link href="/reviews" className="btn center">
            {i18n.reviewsAllReviews}
          </Link>
        )}
      </div>
    </>
  )
}
