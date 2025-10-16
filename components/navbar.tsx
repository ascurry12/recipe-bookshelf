import React, { ReactNode } from "react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { logout, getBookshelf } from "./actions";
import { createClient } from "@/utils/supabase/server";
import { data } from "react-router-dom";

interface Props {
  user: User | null;
  // any props that come into the component
}


export default async function Navbar({ user }: Props) { 
  const bookshelf = await getBookshelf(user);

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            {user ? (
              <>
                {" "}
                <li>
                  <Link href={ bookshelf ? `/bookshelf/${bookshelf.id}` : "/"}>Bookshelf</Link>
                </li>{" "}
                <li>
                  <Link href={"/"}>Profile</Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href={"/"}>
          la cuillère
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href={ bookshelf ? `/bookshelf/${bookshelf.id}` : "/"}>Bookshelf</Link>
              </li>
              <li>
                <Link href={"/"}>Profile</Link>
              </li>
            </>
          ) : null}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal lg:flex">
          {user ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <>
              {" "}
              <li>
                <Link href={"/login"}> Login </Link>
              </li>
              <li>
                <Link href={"/signup"}> Sign Up </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
