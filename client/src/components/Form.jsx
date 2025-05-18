import React, { useState } from "react";
import CustomInput from "./CustomInput";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Test</h1>
      <div className="p-4 sm:p-6 md:p-10 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Responsive Form</h1>

        <form className="space-y-4">
          <CustomInput
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />

          <CustomInput
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            helperText="We'll never share your email."
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
