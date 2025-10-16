import React from "react";
import { signup } from "./actions";

export default function Signup() {
  return (
    <form method="post">
      <fieldset className="fieldset bg-base-100 border-base-200 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Sign Up</legend>

        <label htmlFor="display-name" className="label">Display Name</label>
        <input id="display-name" name="display-name" type="text" className="input" placeholder="Display Name" required/>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          required
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="input"
          placeholder="Password"
          required
        />

        <button formAction={signup} className="btn btn-neutral mt-4">
          Sign Up
        </button>
      </fieldset>
    </form>
  );
}
