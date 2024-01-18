import React from "react";
import Profile from "../assets/images/profileBig.png";
import { Weather } from "../components/Weather";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const genres = JSON.parse(localStorage.getItem("genre"));

  return (
    <div className="bg-black h-screen w-full">
      <div className="flex gap-x-20 text-white px-20 py-12">
        <div className="flex-[2] flex flex-col gap-10">
          <div className="p-8 rounded-3xl bg-blue-600 flex gap-x-10">
            <img src={Profile} alt="profile" />

            <div className="flex flex-col justify-around gap-y-5">
              <div>
                <p className="text-2xl">{user.name}</p>
                <p className="text-2xl">{user.email}</p>
                <p className="text-3xl font-semibold">{user.username}</p>
              </div>

              <div className="grid grid-cols-3">
                {genres.map((g) => (
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

        <div className="flex-1 bg-green-500 rounded-3xl p-6">NEWS</div>
      </div>
    </div>
  );
}
