import Link from "next/link"
import type { ReviewType } from "@/types/reviewTypes"
import style from "./Review.module.css"

export const Review = ({ id, body }: ReviewType) => {
  return (
    <Link className={style.review} href={`?commentId=${id}`} locale={false}>
      {id + ". " + body}
    </Link>
  )
}
