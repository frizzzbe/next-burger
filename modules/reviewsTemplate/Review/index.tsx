import type { ReviewType } from "../../../types/reviewTypes";
import st from "./Review.module.css";

type PropsType = {
  res: ReviewType;
  onClick: () => void;
  key: number;
};

const Review = ({ res, onClick }: PropsType) => {
  return (
    <li className={st.review} onClick={onClick}>
      {res.id + ". " + res.body}
    </li>
  );
};

export default Review;
