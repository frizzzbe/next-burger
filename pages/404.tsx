import Link from "next/link";
import type { FC } from "react";
import useLocale from "@/hooks/useLocale";

const NotFoundPage: FC = () => {
  const i18n = useLocale();
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
