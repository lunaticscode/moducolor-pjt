import React from "react";
import { ErrorType } from "../types/error";
import makeClassName from "../utils/makeClassName";
interface CustomErrorProps {
  error: ErrorType;
}
const CustomError: React.FC<CustomErrorProps> = ({ ...props }) => {
  const { error } = props;
  const { rootCls: customErrorCls } = makeClassName("error");
  return (
    <div className={customErrorCls}>{`${error.name}\n${error.errText}`}</div>
  );
};
export default CustomError;
