import React from "react";
import './Style/ErrorMessage.css'

export const ErrorMessage = ({ children }) => {
  return <div className="error">{children}</div>;
};

export default ErrorMessage;
