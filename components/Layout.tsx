import React from "react";
import makeClassName from "../utils/makeClassName";
import Header from "./Header";
import type { MCBaseWrapComponentProps } from "../types/common";

interface LayoutProps extends MCBaseWrapComponentProps {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { rootCls: layoutCls } = makeClassName("layout");
  return (
    <>
      <div className={`${layoutCls}-wrapper`}>
        <Header />
        <main className={layoutCls}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
