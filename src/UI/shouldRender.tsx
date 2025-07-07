import React from "react";

type Props = {
  if: unknown;
  children: React.ReactNode;
};

export const ShouldRender = ({ if: condition, children }: Props) => (
  <>{condition ? children : null}</>
);
