import { FC } from "react";
import useLocale from "@/hooks/useLocale";

const About: FC = () => {
  const i18n = useLocale();
  return (
    <div>
      <h1>{i18n.about}</h1>
      <p>{i18n.aboutP1}</p>
      <p>{i18n.aboutP2}</p>
      <p>{i18n.aboutP3}</p>
    </div>
  );
};

export default About;
