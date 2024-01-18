import React, { useState } from "react";
import { Card } from "../components/Card";
import { cardsData } from "../data/cardsData";
import { useNavigate } from "react-router-dom";

export default function Genre() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const saveGenre = () => {
    localStorage.setItem("genre", JSON.stringify(selected));
    navigate("/");
  };

  return (
    <div className="bg-black text-white h-screen w-full relative">
      <div className="px-24 py-20">
        <div className="flex gap-x-20">
          <div className="flex-1 space-y-10">
            <h1 className="text-[color:var(--green-text)] text-4xl">
              Super app
            </h1>

            <p className="text-5xl font-medium leading-tight">
              Choose your entertainment category
            </p>

            <div className="flex flex-wrap">
              {selected.map((item) => (
                <p
                  key={item}
                  className="bg-green-500 my-2 mr-4 w-fit px-5 py-1.5 rounded-full"
                >
                  {item}
                </p>
              ))}
            </div>

            <div>
              {selected.length < 3 && (
                <p className="text-red-500">Minimum 3 categories required</p>
              )}
            </div>
          </div>

          <div className="flex-[2]">
            <div className="grid grid-cols-3 gap-6 float-right">
              {cardsData?.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  setSelected={setSelected}
                  selected={selected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-24">
        <button
          disabled={selected.length < 3}
          onClick={saveGenre}
          className="w-40 p-2 font-medium text-xl bg-green-500 hover:bg-green-500/90 rounded-full disabled:cursor-not-allowed disabled:bg-green-400"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
