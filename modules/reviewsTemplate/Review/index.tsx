import style from "./Review.module.css"
import type { PropsType } from "./types"

const Review = ({ res, onClick }: PropsType) => {
  return (
    <li className={style.review} onClick={onClick}>
      {res.id + ". " + res.body}
    </li>
  )
}

export default Review
