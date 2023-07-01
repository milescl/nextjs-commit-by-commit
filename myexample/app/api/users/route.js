import { NextResponse } from "next/server";
export async function GET() {

    return NextResponse.json({ hello: "world" });
}
export async function POST(req) {
    console.log(req.body)
    return NextResponse.json({ hello: "world POST" });
}