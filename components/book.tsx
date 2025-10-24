import React, { ReactNode } from "react";
import Link from "next/link";
interface Props {
  color?: string;
  title?: string;
  icon?: string;
  link?: string;
}

export default async function Book({ color, title, icon, link }: Props) {
  const icons = {
    book: "",
    dog: "",
    cat: "",
    cake: "",
    carrot: "",
    icecream: "",
    paw: "",
    snowflake: "",
    cheese: "",
    pizza: "",
  };
  return (
    <div className="group w-30 bg-base-300 mx-5 mb-5 p-5 rounded-r-lg rounded-l-xs relative">
      <Link href={link ? link : "/"}>
        <div className="w-fit hidden group-hover:flex absolute top-0.5">
          <button className="btn btn-xs">Edit</button>
          <button className="btn btn-xs">Delete</button>
        </div>
        <img
          src="/images/icons/book-solid-full.svg"
          className="w-fit m-2"
        ></img>
        <p className="truncate text-sm">Kirby's Recipes</p>
      </Link>
    </div>
  );
}
