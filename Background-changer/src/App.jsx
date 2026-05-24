import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [Color, Setcolor] = useState("purple");

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: Color }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-30 insert-x-0 px-2">
          <div className=" fixed flex flex-wrap px3 py-4 rounded-3xl">
            <button
              onClick={() => {
                Setcolor("red");
              }}
              className="outline-none px-5 rounded-full py-2 ml-80  text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                Setcolor("green");
              }}
              className="outline-none px-5 rounded-full   text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                Setcolor("orange");
              }}
              className="outline-none px-5 rounded-full   text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                Setcolor("yellow");
              }}
              className="outline-none px-5 rounded-full   text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => {
                Setcolor("black");
              }}
              className="outline-none px-5 rounded-full   text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>

            <button
              onClick={() => {
                Setcolor("white");
              }}
              className="outline-none px-5 rounded-full   text-white shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;


