import React from "react";

export interface IKatLinkProps {
  to: string;
  text: string;
  icon?: React.ReactElement;
  className?: string;
  onClick?: () => void;
}
