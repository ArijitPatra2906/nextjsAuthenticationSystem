import { NextResponse } from "next/server";

export const POST = async (request) => {
  const response = NextResponse.json(
    { error: null, msg: "Logout success" },
    {
      status: 200,
    }
  );

  response.cookies.delete("token");

  return response;
};
