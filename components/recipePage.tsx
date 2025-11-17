"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import {
  BiDotsHorizontal,
  BiDotsHorizontalRounded,
  BiPlus,
} from "react-icons/bi";
import {
  deleteRecipe,
  editRecipe,
} from "@/app/(no-navbar)/bookshelf/[id]/book/[book_id]/actions";
import DeleteRecipeModal from "./deleteRecipeModal";

interface RecipePageProps {
  recipeData: any;
  userData: any;
}

export default function RecipePageComponent({
  userData,
  recipeData,
}: RecipePageProps) {
  
  const [isEditing, setIsEditing] = useState(false);
  const editRecipeWithID = editRecipe.bind(null, recipeData.id);

  function handleAddIngredient() {
    const ingredientsDiv = document.getElementById("ingredients-input");
  }

  function handleAddDirection() {
    const directionsDiv = document.getElementById("directions-input");
    const directionElement = document.createElement("input");
    directionsDiv?.appendChild(directionElement);
  }

  return (
    <>
      <div className="flex items-center">
        <Link
          href={`/bookshelf/${recipeData.bookshelf_id}/book/${recipeData.book_id}`}
          className="hover:bg-black/20 rounded-full w-fit inline-block m-5"
        >
          <img
            src="/images/circle-arrow-left-solid-full.svg"
            className="w-10"
          ></img>
        </Link>
        <div className="dropdown dropdown-end dropdown-hover ml-auto mr-10">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle m-1"
          >
            <BiDotsHorizontalRounded />
          </div>
          <ul
            tabIndex={-1}
            className="menu dropdown-content bg-white rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const recipeActionModal = document.getElementById(
                    `delete_recipe_modal_${recipeData.id}`
                  ) as HTMLDialogElement;
                  recipeActionModal.showModal();
                  
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* 
                Hidden edit functionality:
                    Title
                    Authored by {user}
                    Image
                    Prep Time | Cook Time
                    Ingredients
                    Steps
                Unhidden:
                    FORMS !!!
            */}
      {isEditing ? (
        <div className="m-auto">
          <p className="text-center">Editing Form Here</p>
          <fieldset className="fieldset m-auto w-xs lg:w-2xl">
            <div className="flex w-full">
              <div className="w-full">
                <label htmlFor="title" className="label">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="input"
                  placeholder="Title"
                  defaultValue={recipeData.title}
                />
              </div>
              <div className="w-full">
                <label htmlFor="image" className="label">
                  Upload Image
                </label>
                <input id="image" type="file" className="file-input" />
              </div>
            </div>

            <div id="ingredients-input" className="">
              {/* Render existing ingredients */}
              <label htmlFor="image" className="label">
                Ingredients
              </label>
              <input
                id="ingredient"
                type="text"
                placeholder="Add Ingredient"
                className="input"
              />
              <input
                id="ingredient"
                type="text"
                placeholder="Add Ingredient"
                className="input"
              />
            </div>
            {/* Add Ingredient Button */}
            <button
              className="btn btn-secondary w-fit"
              onClick={handleAddIngredient}
            >
              <BiPlus />
              Add Ingredient
            </button>

            <div id="directions-input" className="join join-vertical">
              {/* Render existing directions */}
            </div>

            {/* Add Direction Button */}

            <button
              className="btn btn-secondary w-fit"
              onClick={handleAddDirection}
            >
              <BiPlus />
              Add Directions
            </button>

            {/* if there is a button in form, it will close the modal */}
            <div className="flex items-center justify-evenly">
              <button className="btn btn-neutral mt-4" formMethod="dialog">
                Cancel
              </button>
              <button
                formAction={editRecipeWithID}
                className="btn btn-secondary mt-4"
              >
                Save
              </button>
            </div>
          </fieldset>
        </div>
      ) : (
        <div className="m-auto text-center">
          <h1 className="text-3xl font-bold">
            {recipeData.title} {recipeData.id}
          </h1>
          <img src={undefined} alt={`${recipeData.title} image`} />
          {/* don't render if no picture is defined */}
          <h2>Authored by {userData.display_name}</h2>
          {/* write a time formatting function */}
          <h2 className="text-lg font-bold">
            Prep Time: {recipeData.prep_time ? recipeData.prep_time : 0} | Cook
            Time: {recipeData.cook_time ? recipeData.cook_time : 0} | Total
            Time: {recipeData.cook_time + recipeData.prep_time}
          </h2>
          <hr />
          <h3 className="text-2xl font-bold">Ingredients</h3>
          <ul className="text-lg list-disc list-inside">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <hr />
          <h3 className="text-2xl font-bold">Directions</h3>
          <ol className="text-lg list-decimal list-inside">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ol>
        </div>
      )}
      <DeleteRecipeModal recipeID={recipeData.id} title={recipeData.title} />
    </>
  );
}
