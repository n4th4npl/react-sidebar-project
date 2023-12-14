import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center py-8 px-28 z-999 shadow-md z-50">
      <ul className="flex gap-10 items-center font-semibold text-gray-500">
        <li>
          <Link
            to="/discover"
            className={`${
              location.pathname === "/discover" ? "text-gray-950" : ""
            } hover:text-gray-950 transition`}
          >
            Discover
          </Link>
        </li>
        <li>
          <Link
            to="/live"
            className={`${
              location.pathname === "/live" ? "text-gray-950" : ""
            } hover:text-gray-950 transition`}
          >
            Live
          </Link>
        </li>
        <li>
          <Link
            to="/jobs"
            className={`${
              location.pathname === "/jobs" ? "text-gray-950" : ""
            } hover:text-gray-950 transition`}
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/conferences"
            className={`${
              location.pathname === "/conferences" ? "text-gray-950" : ""
            } hover:text-gray-950 transition`}
          >
            Conferences
          </Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <div>
          <a className="font-bold px-8 py-4 rounded-full bg-gray-200" href="">
            Log In
          </a>
        </div>
        <div>
          <a
            className="font-bold px-8 py-4 rounded-full bg-gray-800 text-white"
            href=""
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
