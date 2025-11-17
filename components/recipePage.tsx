"use client";

import React from "react";
import dynamic from "next/dynamic";

interface RecipePageProps {
  params: {
    id: string;
    book_id: string;
    recipe_id: string;
  };
}

export default function RecipePageComponent({ params }: RecipePageProps) {
  const API_KEY = process.env.NEXT_PUBLIC_TINY_MCE_KEY!;
  const { recipe_id } = params;
  const emptyList = "<ul><li></li></ul>";

  return (
    <>
      
    </>
  );
}
