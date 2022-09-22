import type { ReactNode } from "react";

export interface MCBaseWrapComponentProps {
  children?: ReactNode;
}
export interface MCBasePageProps {
  pageTitle?: string;
  isError?: boolean;
  error?: any;
}
