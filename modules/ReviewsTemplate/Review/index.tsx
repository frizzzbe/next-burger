import type { PropsType } from "./types"
import style from "./Review.module.css"

export const Review = ({ res, onClick }: PropsType) => {
  return (
    <li className={style.review} onClick={onClick}>
      {res.id + ". " + res.body}
    </li>
  )
}
