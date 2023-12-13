import React from "react";

export default function SidebarTab({ icon, title, description }) {
  return (
    <div>
      <div className="my-8 py-4 px-8 hover:bg-gray-200 active:bg-gray-800 active:text-white transition-all cursor-pointer rounded-md">
        <div className="flex gap-3 items-center">
          {icon}
          {}
          <h3 className="font-bold text-md">{title}</h3>
        </div>
        <p className="pt-2">{description}</p>
      </div>
    </div>
  );
}
