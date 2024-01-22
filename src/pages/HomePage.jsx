import React from "react";
import Profile from "../assets/images/profileBig.png";
import { Weather } from "../components/Weather";
import { NewsData } from "../components/News";
import { Notes } from "../components/Notes";
import { Timer } from "../components/Timer";
import { Link } from "react-router-dom";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const genres = JSON.parse(localStorage.getItem("genre"));

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="flex flex-col gap-10 lg:flex-row gap-x-20 text-white px-20 py-12">
        <div className="flex-[2] flex flex-col gap-10">
          <div className="p-8 rounded-3xl bg-[#5746ea] flex gap-x-10">
            <img src={Profile} alt="profile" />

            <div className="flex flex-col justify-around gap-y-5">
              <div>
                <p className="text-2xl">Name: {user?.name}</p>
                <p className="text-2xl break-all">Username: {user?.email}</p>
                <p className="text-3xl font-semibold break-all">
                  Email: {user?.username}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {genres?.map((g) => (
                  <p
                    key={g}
                    className="text-lg px-6 py-2 rounded-full bg-purple-400 w-40 m-2"
                  >
                    {g}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <Weather />
        </div>

        <div className="flex-1 border rounded-3xl overflow-hidden h-full">
          <NewsData />
        </div>
      </div>

      <div className="flex flex-col gap-y-10 lg:flex-row px-20 py-6 text-white gap-20">
        <div className="flex-1">
          <Notes />
        </div>

        <div className="flex-[2]">
          <Timer />
        </div>
      </div>

      <div className=" pb-10 px-20 flex justify-end">
        <Link to="/movies">
          <button className="w-40 p-2 font-medium text-xl bg-green-500 hover:bg-green-500/90 rounded-full ">
            Browse
          </button>
        </Link>
      </div>
    </div>
  );
}
