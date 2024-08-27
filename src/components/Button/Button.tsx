import React, { useEffect } from "react";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";

export interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  useEffect(() => {
    console.log("useState button");
  }, []);
  return <PieButton>{text}</PieButton>;
};
