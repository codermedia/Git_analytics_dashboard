import { useState } from "react";
import { Link } from "react-router-dom";
import { icon, logo, navLinks } from "../constants/data";

const Sidebar = () => {
  const path = window.location.href;

  const tab = path.split("/")[3];

  const [activeLink, setActiveLink] = useState(tab || "dashboard");

  return (
    <section className="my-10 flex w-full flex-col">
      <Link
        to="/"
        className="mx-auto mb-10 flex items-center font-semibold capitalize"
        onClick={() => setActiveLink("dashboard")}
      >
        <div className="inline-flex w-full gap-x-2">
          <div className="h-8 w-8 rounded-full bg-teal-500">{icon}</div>
          <div className="flex items-center justify-center bg-gradient-to-tl from-red-500 to-cyan-500 bg-clip-text text-lg leading-5 text-transparent">
            <span>{logo}</span>
          </div>
        </div>
      </Link>
      <div className="border-b-8 border-b-slate-50"></div>
      <ul className="my-8 flex flex-col justify-center pl-10">
        {navLinks.map((item, index) => (
          <li key={index} className="py-5 text-slate-700">
            <Link
              to={item.path}
              className={`flex items-center gap-x-5 transition-all duration-300 ease-in-out
              ${
                (tab === "" && "border-r-4 border-r-indigo-700 font-semibold",
                activeLink === item.name
                  ? "border-r-4 border-r-indigo-700 font-semibold"
                  : "hover:border-r-4 hover:border-r-red-600")
              }`}
              onClick={() => setActiveLink(item.name)}
            >
              {item.icon}
              <span className="capitalize">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-b-8 border-b-slate-50"></div>
    </section>
  );
};

export default Sidebar;
