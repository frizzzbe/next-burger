import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data }
  }
}

const Burgers = ({burgers}) => {
  return (
    <>
      <Head>
        <title>Наши бургеры</title>
      </Head>
      <div>
        <h1>Наши бургеры</h1>
        {burgers.map(burger => (
          <Link href={`/burgers/${burger.id}`} key={burger.id} className="burgerCard">
            <div className="imageContainer">
              <Image 
                src={`${burger.image}`} 
                alt={`${burger.name}`} 
                width={150}
                height={150}
                layout="responsive" 
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Burgers