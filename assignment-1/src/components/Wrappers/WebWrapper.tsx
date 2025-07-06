import React from "react";
const WebWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 min-h-screen min-w-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {children}
    </div>
  );
};
export default WebWrapper;