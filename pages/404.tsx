import Link from "next/link";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import useLocale from "@/hooks/useLocale";

const NotFoundPage: FC = () => {
  const router = useRouter();
  const i18n = useLocale();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>{i18n.notFoundTitle}</h1>
      <h2>{i18n.notFoundMessage}</h2>
      <p>
        {i18n.notFoundAction} <Link href="/">{i18n.notFoundLinkMain}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
