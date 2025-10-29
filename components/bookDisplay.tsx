"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Book from "./book";

interface Props {
  bookData: any[] | null;
  bookshelfData: any;
}

export default function BookDisplay({ bookshelfData, bookData }: Props) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    if (!bookData) {
      setFiltered([]);
      return;
    }

    const temp = bookData.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(temp);
  }, [search, bookData]);

  return (
    <>
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
        <input
          id="book-search"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-5 mt-10">
        {!bookData || bookData?.length == 0 ? (
          <h2 className="mx-auto text-xl">You have no books!</h2>
        ) : search && filtered.length > 0 ? (
          filtered?.map((book) => {
            return (
              <Book
                key={book.id}
                bookID={book.id}
                color={book.color}
                title={book.title}
                icon={book.icon}
                link={`${bookshelfData.id}/book/${book.id}`}
              />
            );
          })
        ) : search && filtered.length == 0 ? (
          <h2 className="mx-auto text-xl">No matches found</h2>
        ) : (
          bookData?.map((book) => {
            return (
              <Book
                key={book.id}
                bookID={book.id}
                color={book.color}
                title={book.title}
                icon={book.icon}
                link={`${bookshelfData.id}/book/${book.id}`}
              />
            );
          })
        )}
      </div>
    </>
  );
}
