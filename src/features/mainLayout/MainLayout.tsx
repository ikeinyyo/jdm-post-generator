import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {children}
    </div>
  );
};

export default Layout;
