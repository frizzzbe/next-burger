import { FC, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <div className="content">
        <Header />
        <main className="mainWrapper">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
