import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
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
