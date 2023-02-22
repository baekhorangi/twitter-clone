import React from "react";

function SidebarLink({ text, Icon, active, onClick }) {
  return (
    <div
      className={`hoverAnimation ${text === "Home" && "cursor-pointer"} flex items-center justify-center space-x-3 text-xl text-[#d9d9d9] xl:justify-start ${active && "font-bold"}`}
      onClick={onClick}>
      <Icon className="h-7 text-white" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
