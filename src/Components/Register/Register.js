import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { app } from "../Firebase";

const task = app.firestore().collection("FormData");
function Register() {
  const [name, setName] = useState("");
  const [image1, setImage1] = useState(null);

  const ImageUrl = async (e) => {
    const file1 = e.target.files[0];
    const storage1 = app.storage().ref();
    const Child = storage1.child(file1.name);
    await Child.put(file1);
    setImage1(await Child.getDownloadURL());
  };

  const Click = async () => {
    await task.doc().set({
      name,
      Avatar: await image1,
    });
    setImage1(null);
    setName("");
  };

  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Input
        style={{ width: "300px" }}
        placeHolder="Image"
        type="file"
        onChange={ImageUrl}
      />

      <br />
      <br />
      <Input
        style={{ width: "300px" }}
        placeHolder="Name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <Button
        style={{ backgroundColor: "#123456", color: "#fff", fontWeight: "600" }}
        onClick={Click}
      >
        Summit
      </Button>
    </div>
  );
}

export default Register;
