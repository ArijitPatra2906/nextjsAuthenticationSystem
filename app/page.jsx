"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
  const { user } = useAuth();
  if (!user) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="min-h-[82vh] flex justify-center items-center">
        <div className="border border-black w-2/3 md:w-1/2 min-h-[10vh] rounded-lg p-4">
          <div className="mb-3">
            <p className="font-semibold text-2xl"> Name : {user.name}</p>
          </div>
          <div className="mb-3">
            <p className="font-semibold text-2xl"> Email : {user.email}</p>
          </div>
          <div className="mt-8 mb-3">
            <Link
              className="bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-white"
              href={"/update-profile"}
            >
              Profile Update
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
