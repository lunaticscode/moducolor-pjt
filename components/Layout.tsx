import React from "react";
import makeClassName from "../utils/makeClassName";
import Header from "./Header";
import type {
  MCBasePageProps,
  MCBaseWrapComponentProps,
} from "../types/common";
import CustomError from "./CustomError";
import { FallbackProps } from "react-error-boundary";

interface LayoutProps
  extends MCBaseWrapComponentProps,
    Partial<MCBasePageProps> {}
const Layout: React.FC<LayoutProps> = ({ children, isError, error }) => {
  const { rootCls: layoutCls } = makeClassName("layout");
  return (
    <>
      <div className={`${layoutCls}-wrapper`}>
        <Header />
        {!isError ? (
          <main className={layoutCls}>{children}</main>
        ) : (
          <CustomError error={error as FallbackProps["error"]} />
        )}
      </div>
    </>
  );
};
export default Layout;
