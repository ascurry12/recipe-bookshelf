import React from "react";
import {
  getUserInfo,
  getUserBookshelf,
  getUserBooks,
  addBook,
} from "./actions";
import AddBookButton from "@/components/addBookButton";
import Link from "next/link";
import Book from "@/components/book";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Bookshelf({ params }: PageProps) {
  const { id } = await params;
  const userInfo = await getUserInfo();
  const bookshelfInfo = await getUserBookshelf();
  const bookshelfBooks = await getUserBooks();

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-3"
            className="btn drawer-button lg:hidden mb-10"
          >
            Open drawer
          </label>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 mt-10">
            {bookshelfBooks.data?.map((book) => {
              return (<Book key={book.id} color={book.color} title={book.title} icon={book.icon} link={`${bookshelfInfo.data.id}/book/${book.id}`}/>)
            })}
          </div>
        </div>
        <div className="drawer-side border-r-2 border-r-[#d3cccb]">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-300 min-h-full w-80 p-4">
            <div className="flex items-center">
              <Link href={"/"} className="hover:bg-black/10 rounded-full mr-6">
                <img
                  src="/images/circle-arrow-left-solid-full.svg"
                  className="w-10"
                ></img>
              </Link>
              <h1 className="text-xl">{bookshelfInfo.data.title}</h1>
            </div>
            <img src="/images/user-solid-full.svg" className="w-fit"></img>
            <li className="mx-auto">
              <AddBookButton />
            </li>

            <div className="divider"></div>
            {/* Stat content here */}
            <div className="flex justify-evenly">
              <div className="items-center text-center">
                <img
                  src="/images/icons/book-solid-full.svg"
                  className="w-10 mx-auto"
                ></img>
                <h2 className="text-lg">
                  {bookshelfBooks.data ? bookshelfBooks.data?.length : 0}
                </h2>
                <h2 className="text-lg">Books</h2>
              </div>
              <div className="items-center text-center">
                <img
                  src="/images/eye-solid-full.svg"
                  className="w-10 mx-auto"
                ></img>
                <h2 className="text-lg">0</h2>
                <h2 className="text-lg">Views</h2>
              </div>
              <div className="items-center text-center">
                <img
                  src="/images/star-solid-full.svg"
                  className="w-10 mx-auto"
                ></img>
                <h2 className="text-lg">4.32</h2>
                <h2 className="text-lg">Rating Avg.</h2>
              </div>
            </div>
          </ul>

          <dialog
            id="add_book_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add Book</h3>
              <div className="modal-action">
                <form method="post" className="flex m-auto">
                  <fieldset className="fieldset bg-base-100 border-base-200 rounded-box w-xs border p-4">
                    <label htmlFor="title" className="label">
                      Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="input"
                      placeholder="Title"
                      defaultValue={`${userInfo.data.display_name}'s book`}
                      required
                    />

                    <label htmlFor="color" className="label">
                      Color
                    </label>
                    <select
                      defaultValue="default"
                      id="color"
                      name="color"
                      className="select"
                    >
                      <option disabled={true} value="">Pick a color</option>
                      <option value="default">Default</option>
                      <option value="red">Red</option>
                      <option value="orange">Orange</option>
                      <option value="yellow">Yellow</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="indigo">Indigo</option>
                      <option value="violet">Violet</option>
                      <option value="turquoise">Turquoise</option>
                    </select>

                    <label htmlFor="icon" className="label">
                      Icon
                    </label>
                    <select
                      defaultValue="book"
                      id="icon"
                      name="icon"
                      className="select"
                    >
                      <option disabled={true} value="">Pick an icon</option>
                      <option value="book">Book</option>
                      <option value="cake">Cake</option>
                      <option value="carrot">Carrot</option>
                      <option value="cat">Cat</option>
                      <option value="cheese">Cheese</option>
                      <option value="dog">Dog</option>
                      <option value="icecream">Ice Cream</option>
                      <option value="paw">Paw</option>
                      <option value="pizza">Pizza</option>
                      <option value="snowflake">Snowflake</option>
                    </select>
                    {/* if there is a button in form, it will close the modal */}
                    <div className="flex items-center justify-evenly">
                      <button className="btn btn-neutral mt-4" formMethod="dialog">Cancel</button>
                      <button
                        formAction={addBook}
                        className="btn btn-neutral mt-4"
                      >
                        Add Book
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
