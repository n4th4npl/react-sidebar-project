import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="flex justify-between my-10">
      <ul className="flex gap-10 items-center font-semibold text-gray-500">
        <li>
          <Link
            to="/discover"
            className={location.pathname === "/discover" ? "active:text-gray-950" : ""}
          >
            Discover
          </Link>
        </li>
        <li>
          <Link
            to="/live"
            className={location.pathname === "/live" ? "active:text-gray-950" : ""}
          >
            Live
          </Link>
        </li>
        <li>
          <Link
            to="/jobs"
            className={location.pathname === "/jobs" ? "active:text-gray-950" : ""}
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/conferences"
            className={location.pathname === "/conferences" ? "active:text-gray-950" : ""}
          >
            Conferences
          </Link>
        </li>
      </ul>
      <div className="flex gap-10">
        <div>
          <a href="">Log In</a>
        </div>
        <div>
          <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
