import type { ReactNode } from "react";
import { FallbackProps } from "react-error-boundary";

export interface MCBaseWrapComponentProps {
  children?: ReactNode;
}
export interface MCBasePageProps {
  pageTitle?: string;
  isError?: boolean;
  error?: FallbackProps["error"];
}
