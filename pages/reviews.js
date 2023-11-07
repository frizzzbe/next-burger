import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Reviews = ({reviews}) => {
  const router = useRouter()
  const [revs, setRevs] = useState(reviews)

  const commentPageId = (id) => {
    router.push(`?commentId=${id}`, false, { shallow: true })
  }

  useEffect(()=>{
    if(router.query.commentId) {
      setRevs(revs.filter((curr)=>curr.id == router.query.commentId))
    }
  }, [router.query.commentId])

	return (
    <>
      <Head>

      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <ul className="reviews">
          { !!revs.length && revs.slice(0, 20).map(res => {
            return (
              <li key={res.id} className="review" onClick={()=>commentPageId(res.id)}>
                {res.id + '. ' + res.body}
              </li>
            )
          }) }
        </ul>
      </div>
    </>
	)
}

export async function getServerSideProps() {
  const response =  await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20)
    }
  }
}

export default Reviews;