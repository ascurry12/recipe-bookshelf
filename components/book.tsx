import React, { ReactNode } from "react";
import BookActionButton from "./bookActionButton";
import { deleteBook, getBook } from "@/app/(no-navbar)/bookshelf/[id]/actions";
import Link from "next/link";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";

interface Props {
  color: string;
  title: string;
  icon: string;
  link: string;
  bookID: string;
}

type Options = {
  [key: string]: string;
};

export default async function Book({
  color,
  title,
  icon,
  link,
  bookID,
}: Props) {
  console.log(title);

  const icons: Options = {
    book: "/images/icons/book-solid-full.svg",
    dog: "/images/icons/dog-solid-full.svg",
    cat: "/images/icons/cat-solid-full.svg",
    cake: "/images/icons/cake-candles-solid-full.svg",
    carrot: "/images/icons/carrot-solid-full.svg",
    icecream: "/images/icons/ice-cream-solid-full.svg",
    paw: "/images/icons/paw-solid-full.svg",
    snowflake: "/images/icons/snowflake-regular-full.svg",
    cheese: "/images/icons/cheese-solid-full.svg",
    pizza: "/images/icons/pizza-slice-solid-full.svg",
  };

  const colors: Options = {
    default: "bg-primary-300",
    red: "bg-red-200",
    orange: "bg-orange-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
    blue: "bg-blue-200",
    indigo: "bg-indigo-200",
    violet: "bg-violet-200",
    turquoise: "bg-teal-200",
    pink: "bg-pink-200",
  };
  return (
    <>
      <div
        className={`group w-30 ${colors[color]} mx-5 mb-5 p-5 rounded-r-lg rounded-l-xs relative`}
      >
        {" "}
        {/*figure out color issue */}
        <div className="w-fit hidden group-hover:flex group-active:flex absolute top-0.5">
          <BookActionButton modalID={`edit_book_modal_${bookID}`} />
          <BookActionButton modalID={`delete_book_modal_${bookID}`} />
        </div>
        <Link href={link ? link : "/"}>
          <img src={icons[icon]} className="w-fit m-2"></img>
          <p className="truncate text-sm text-center">{title}</p>
        </Link>
      </div>
      
      <EditModal bookID={bookID} title={title} color={color} icon={icon}/>
      <DeleteModal bookID={bookID} title={title}/>
    </>
  );
}
