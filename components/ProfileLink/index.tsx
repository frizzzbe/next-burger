import { useEffect, useState, type FC } from "react";
import { useRouter } from "next/router";
import useLocale from "@/hooks/useLocale";
import Link from "next/link";
import { deleteCookie, hasCookie } from "cookies-next";
import styles from "./ProfileLink.module.css";

const ProfileLink: FC = () => {
  const router = useRouter();
  const i18n = useLocale();
  const [isAuth, setIsAuth] = useState(false);
  const isProfilePage = router.pathname.includes("/profile");

  const logoutUser = (e) => {
    if (isProfilePage) {
      e.preventDefault();
      deleteCookie("userId");
      router.push("/login");
    }
  };

  useEffect(() => {
    hasCookie("userId") ? setIsAuth(true) : setIsAuth(false);
  }, [hasCookie("userId")]);

  return (
    <>
      {isAuth ? (
        <Link href="/profile" className={styles.loginBtn} onClick={logoutUser}>
          {isProfilePage ? i18n.menuLogout : i18n.menuProfile}
        </Link>
      ) : (
        <Link href="/login" className={styles.loginBtn}>
          {i18n.menuLogin}
        </Link>
      )}
    </>
  );
};

export default ProfileLink;
