import { Container } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type TLayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: TLayoutProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
