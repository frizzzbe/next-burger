import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { reviewsType } from "../../types";
import Review from "./Review";

export const ReviewsTemplate: FC<reviewsType> = ({ reviews }: reviewsType) => {
  const router = useRouter();
  const [revs, setRevs] = useState(reviews);

  const commentPageId = (id) => {
    router.push(`?commentId=${id}`, "", { shallow: true });
  };

  useEffect(() => {
    if (router.query.commentId) {
      setRevs(
        revs.filter((curr) => String(curr.id) === router.query.commentId)
      );
    } else {
      setRevs(reviews);
    }
  }, [router.query.commentId]);

  return (
    <>
      <Head>
        <title>
          {router.query.commentId
            ? `Супер бургеры | Отзыв №${router.query.commentId}`
            : "Супер бургеры | Отзывы"}
        </title>
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <ul className="reviews">
          {!!revs.length &&
            revs
              .slice(0, 20)
              .map((res) => (
                <Review
                  res={res}
                  key={res.id}
                  onClick={() => commentPageId(res.id)}
                />
              ))}
        </ul>
        {router.query.commentId && (
          <Link href="/reviews" className="btn">
            Все отзывы
          </Link>
        )}
      </div>
    </>
  );
};
