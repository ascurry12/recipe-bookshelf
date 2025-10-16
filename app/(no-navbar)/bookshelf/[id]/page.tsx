import React from "react";
import { getUserInfo, getUserBookshelf } from "./actions";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Bookshelf({ params }: PageProps) {
  const { id } = await params;
  const userInfo = await getUserInfo();
  const bookshelfInfo = await getUserBookshelf();
  // const bookshelfBooks = await getUserBooks();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side border-r-1">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-300 min-h-full w-80 p-4">
            <div className="flex items-center">
              <Link href={"/"} className="mr-6">
                <img
                  src="/images/circle-arrow-left-solid-full.svg"
                  className="w-10"
                ></img>
              </Link>
              <h1 className="text-xl">{bookshelfInfo.data.title}</h1>
            </div>
            <img src="/images/user-solid-full.svg" className="w-fit"></img>
            <li className="mx-auto">
              <button className="w-fit btn btn-secondary">
                + Create new book
              </button>
            </li>

            <div className="divider"></div>
            {/* Stat content here */}
            <div className="flex justify-evenly">
              <div className="items-center text-center">
                <img src="/images/book-solid-full.svg" className="w-10 mx-auto"></img>
                <h2 className="text-lg">0</h2>
                <h2 className="text-lg">Books</h2>
              </div>
              <div className="items-center text-center">
                <img src="/images/eye-solid-full.svg" className="w-10 mx-auto"></img>
                <h2 className="text-lg">0</h2>
                <h2 className="text-lg">Views</h2>
              </div>
              <div className="items-center text-center">
                <img src="/images/star-solid-full.svg" className="w-10 mx-auto"></img>
                <h2 className="text-lg">4.32</h2>
                <h2 className="text-lg">Rating Avg.</h2>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
