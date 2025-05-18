import React, { useState } from "react";
import CustomModal from "./components/CustomModal";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import Form from "./components/Form";
const App = () => {
  const [open, setOpen] = useState(false);
  const handleClickAlert = () => {
    alert("You clicked a button.");
  };

  const [namevalue, setNameValue] = useState("");

  const handleChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <CustomButton onClick={handleClickAlert} className="m-2 cursor-pointer">
        Click me
      </CustomButton>

      <br />

      <CustomButton onClick={handleModalOpen} className="m-2 cursor-pointer">
        Open Modal
      </CustomButton>
      <CustomModal open={open} onClose={onClose} title="Modal">
        <p>Hello this is a modal</p>
      </CustomModal>

      <CustomInput
        type="text"
        value={namevalue}
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
        className="m-2"
      />
    </div>
  );
};

export default App;
