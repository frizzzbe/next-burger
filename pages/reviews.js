import Head from "next/head";

const Reviews = ({reviews}) => {
	return (
    <>
      <Head>

      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <ul className="reviews">
          { !!reviews.length && reviews.slice(0, 20).map(res => {
            return (
              <li key={res.id} className="review">
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