import { useState } from "react";

const Signup = () => {
  return (
    <div className="">
      <label>Display Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="text" />
      <label>Confirm Password</label>
      <input type="password" />
    </div>
  );
};

export default Signup;
