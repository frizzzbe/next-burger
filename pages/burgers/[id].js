import React from "react";
import Image from "next/image";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  const paths = data.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return {
    props: { burger: data }
  }
}

const Cheeseburger = ({burger}) => {
  return (
    <>
      <Head>
        <title>{ burger.name }</title>
      </Head>
      <div className="singleBurger">
        <h1>{ burger.name }</h1>
          <div className="imageContainer">
            <Image 
              src={`${burger.image}`} 
              alt={`${burger.name}`} 
              width={100} 
              height={100}
              priority={true}
            />
          </div>
          <div>
            <p>{ burger.desc }</p>
        </div>
      </div>
    </>
  );
};

export default Cheeseburger;
