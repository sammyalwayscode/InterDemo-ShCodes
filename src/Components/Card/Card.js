import React, { useState, useEffect } from "react";
import Pres from "../Image/buhari.jpg";
import "./Card.css";
import { app } from "../Firebase";

const task = app.firestore().collection("FormData");
function Card() {
  const [getData, setGetData] = useState([]);

  const Data = async () => {
    await task.onSnapshot((snapshot) => {
      const info = [];
      snapshot.forEach((doc) => {
        info.push({ ...doc.data(), id: doc.id });
      });
      setGetData(info);
    });
  };

  useEffect(() => {
    Data();
  }, []);

  return (
    <div>
      {getData.map(({ id, Avatar, name }) => (
        <div key={id} className="CardMain">
          <img src={Avatar} alt="Buhari" style={{ width: "290px" }} />

          <h3
            style={{
              color: "#fff",
              fonttWeight: "bold",
            }}
          >
            {name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Card;
