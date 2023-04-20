import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import Header from "./header";
import BreadCrumbs from "./Breadcrumb";

type Props = {
  title?: string;
  _site?: any;

  children?: React.ReactNode;
};

const PageLayout = ({
  title,
  _site,

  children,
}: Props) => {
  return (
    <>
      <Header _site={_site} />

      {children}
      <Footer _site={_site} />
    </>
  );
};

export default PageLayout;
