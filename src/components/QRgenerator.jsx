import React from "react";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import DownloadQr from "./DownloadQr";
// import './index.css'

const QRgenerator = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  function handleInput(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setQrValue(text);
    if (text == "") {
      document.querySelector("p").innerText = "Please enter a valid url";
    } else {
      document.querySelector("p").innerText = "QR code generated successfully";
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        {qrValue ? (
          <QRCodeCanvas value={qrValue} size={200} id="qrCode" />
        ) : null}
      </div>
      <div className="flex flex-col justify-center items-center">
        <input
          className="border-black border-2 rounded-2xl py-3 px-5 mt-5"
          onChange={(e) => {
            handleInput(e);
          }}
          value={text}
          type="text"
          placeholder="Enter url or text"
        />
        <p
          className="m-4"
          style={qrValue == "" ? { color: "red" } : { color: "green" }}
        ></p>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
          <button
            className="bg-amber-300 rounded-2xl py-2 px-4 font-bold hover:bg-amber-500 cursor-pointer"
            onClick={handleClick}
          >
            Generate QR
          </button>
          <DownloadQr />
        </div>
      </div>
    </div>
  );
};

export default QRgenerator;
