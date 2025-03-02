import React from "react";

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="btn">{label}</button>;
};
