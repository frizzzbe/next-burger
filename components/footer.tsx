import useLocale from "@/hooks/useLocale";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const Footer: FC = () => {
  const i18n = useLocale();
  const router = useRouter();
  const { locale } = router;

  return (
    <footer>
      <p>{i18n.copyright}</p>
      <Link href={router.pathname} locale={locale === "ru" ? "en" : "ru"}>
        {i18n.changeLanguage}
      </Link>
    </footer>
  );
};

export default Footer;
