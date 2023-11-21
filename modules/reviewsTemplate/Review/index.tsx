import { reviewType } from "../../../types/reviewTypes";
import st from "./Review.module.css";

type propsType = {
  res: reviewType;
  onClick: () => void;
  key: number;
};

const Review = ({ res, onClick }: propsType) => {
  return (
    <li className={st.review} onClick={onClick}>
      {res.id + ". " + res.body}
    </li>
  );
};

export default Review;
