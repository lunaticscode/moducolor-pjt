import { useRouter } from "next/router";
import React from "react";
import { MCErrorType } from "../types/error";
import makeClassName from "../utils/makeClassName";
interface CustomErrorProps {
  error: MCErrorType;
}
const CustomError: React.FC<CustomErrorProps> = ({ ...props }) => {
  const { error } = props;
  const { rootCls: customErrorCls } = makeClassName("error");
  const router = useRouter();
  const handleClickButton = () => {
    router.replace("/");
  };
  return (
    <div className={customErrorCls}>
      {`${error.name}\n${error.message}`}
      <br />
      <button onClick={handleClickButton}>Home</button>
    </div>
  );
};
export default CustomError;
