import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  color: string;
  title: string;
  icon: string;
  link: string;
}

type Options = {
    [key: string]: string
}

export default async function Book({ color, title, icon, link }: Props) {
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
    default: "#e7e2df",
    red: "#ff6961",
    orange: "#ffb480",
    yellow: "#f8f38d",
    green: "#42d6a4",
    blue: "#59adf6",
    indigo: "#9d94ff",
    violet: "#c780e8",
    turquoise: "#08cad1",
  };
  return (
    <div className={`group w-30 bg-[${colors[color]}] mx-5 mb-5 p-5 rounded-r-lg rounded-l-xs relative`}>
      <Link href={link ? link : "/"}>
        <div className="w-fit hidden group-hover:flex absolute top-0.5">
          <button className="btn btn-xs">Edit</button>
          <button className="btn btn-xs">Delete</button>
        </div>
        <img
          src={icons[icon]}
          className="w-fit m-2"
        ></img>
        <p className="truncate text-sm text-center">{title}</p>
      </Link>
    </div>
  );
}
