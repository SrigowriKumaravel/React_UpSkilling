import React from "react";
import { Outlet } from "react-router-dom";

function PageLayout({ children }) {
  return (
    <div className="layout">
      {children}
      <Outlet />
    </div>
  );
}

export default PageLayout;
