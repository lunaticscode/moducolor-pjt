import React from "react";
import useHover from "../hooks/useHover";
import makeClassName from "../utils/makeClassName";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { ref: headerRef, isHover } = useHover();
  const { withSufixCls: headerCls } = makeClassName("header", {
    hover: isHover,
  });
  return (
    <header ref={headerRef} className={headerCls}>
      app-header
    </header>
  );
};

export default Header;
