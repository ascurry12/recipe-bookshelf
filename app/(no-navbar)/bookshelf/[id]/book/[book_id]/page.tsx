import React from "react";
import AddBookButton from "@/components/addBookButton";
import Link from "next/link";

interface PageProps {
  params: {
    book_id: string;
  };
}

export default async function Book({ params }: PageProps) {
    const { book_id } = await params;
    return (<>Hi {book_id}</>);
}