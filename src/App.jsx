import React from "react";
import FullQr from "./components/FullQr";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <FullQr />
      <div className="flex justify-between items-center gap-4 mt-5 flex-col lg:flex-row">
        <div>
          <h3 className="text-2xl font-medium">Mayank Srivastav</h3>
          <p>mastermayank786@gmail.com</p>
        </div>
        <a href="https://digitalheroesco.com" target="_blank">
          <button className="bg-blue-400 px-3 py-2 rounded-xl font-semibold hover:bg-blue-500 cursor-pointer">
            Built for Digital Heroes
          </button>
        </a>
      </div>
    </div>
  );
};

export default App;
