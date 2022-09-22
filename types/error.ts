import type { FallbackProps } from "react-error-boundary";
type FallbackPropsErrorType = FallbackProps["error"];
export interface MCErrorType extends FallbackPropsErrorType {
  status?: number;
}
