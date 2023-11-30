import React from "react";

export const Alerts = ({ variant, children }) => {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      <strong>{children}</strong>
    </div>
  );
};
