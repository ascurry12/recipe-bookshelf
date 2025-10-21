import React from "react";
import { login } from "./actions";

export default function Login() {
  return (
    <form method="post" className="mt-10">
      <fieldset className="fieldset bg-base-100 border-base-200 rounded-box w-xs border p-4 m-auto">
        <legend className="fieldset-legend">Login</legend>

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

        <button formAction={login} className="btn btn-neutral mt-4">
          Login
        </button>
      </fieldset>
    </form>
  );
}
