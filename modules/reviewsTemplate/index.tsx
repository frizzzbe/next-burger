import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useLocale } from "@/hooks/useLocale"
import { Review } from "./Review"
import type { ReviewsType } from "@/types/reviewTypes"

export const ReviewsTemplate = ({ reviews }: ReviewsType) => {
  const router = useRouter()
  const i18n = useLocale()
  const [revs, setRevs] = useState(reviews)
  const commentId = router.query.commentId

  const commentPageId = (id) => {
    router.push(`?commentId=${id}`, "", { shallow: true, locale: false })
  }

  useEffect(() => {
    if (commentId) {
      setRevs(revs.filter((curr) => String(curr.id) === commentId))
    } else {
      setRevs(reviews)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentId])

  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.reviewsTitle}</title>
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
        {commentId && (
          <Link href="/reviews" className="btn center">
            {i18n.reviewsAllReviews}
          </Link>
        )}
      </div>
    </>
  )
}
