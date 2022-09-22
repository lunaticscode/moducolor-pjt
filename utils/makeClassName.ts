import { APP_PREFIX_CLASSNAME } from "../const";

interface makeClassNameType {
  rootCls: string;
  withSufixCls?: string;
}

const makeClassName = (
  cls?: string,
  sufix?: { [key: string]: boolean }
): makeClassNameType => {
  const rootCls = `${APP_PREFIX_CLASSNAME}-${cls}`;
  const withSufixCls = rootCls + makeSufixClassName(sufix);
  return { rootCls, withSufixCls };
};

const makeSufixClassName = (sufix?: { [key: string]: boolean }) => {
  let sufixCls = "";
  if (sufix && Object.keys(sufix).length) {
    Object.keys(sufix).forEach((key) => {
      if (sufix[key]) {
        sufixCls = sufixCls + ` ${key}`;
      }
    });
  }
  return sufixCls;
};
export default makeClassName;
