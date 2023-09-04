import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
  console.log(params);
  return NextResponse.json({
    message: "testing delete",
  });
}
