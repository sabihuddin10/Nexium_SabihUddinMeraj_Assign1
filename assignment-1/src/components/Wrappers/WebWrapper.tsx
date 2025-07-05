import React from "react";
const WebWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 min-h-screen min-w-screen flex flex-col bg-[#232323]">
      {children}
    </div>
  );
};
export default WebWrapper;