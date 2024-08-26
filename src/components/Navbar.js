import React from "react";
import { Home, Message } from "@/Icons";

const Navbar = () => {
  return (
    <div className="flex justify-around p-5 bg-black text-white border-b-2 border-slate-400">
      <div className="flex gap-10">
        <div>logo</div>
        <input type="text" placeholder="Search" />
      </div>

      <div className="flex justify-around gap-20">
        <div>
          <Home />
        </div>
        <div>Highlights</div>
        <div>
          <Message />
        </div>
        <div>Notification</div>
        <div>Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
