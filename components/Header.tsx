import Image from "next/image";
import React from "react";
import useHover from "../hooks/useHover";
import makeClassName from "../utils/makeClassName";
import logoImg from "../public/assets/mc-app-logo.png";
interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { ref: headerRef, isHover } = useHover();
  const { rootCls, withSufixCls: headerCls } = makeClassName("header", {
    hover: isHover,
  });
  return (
    <header ref={headerRef} className={headerCls}>
      <div className={`${rootCls}--logo`}>
        <Image alt="logo" src={logoImg} width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;
