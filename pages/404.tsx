import Link from "next/link";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ой!</h1>
      <h2>Такой страницы здесь нет</h2>
      <p>
        Перейти на <Link href="/">главную траницу</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
