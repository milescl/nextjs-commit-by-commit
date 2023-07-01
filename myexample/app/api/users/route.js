import { NextResponse } from "next/server";
import { getUsers, postUser } from "@/lib/db";
export async function GET() {
    const resultado = await getUsers()
    return NextResponse.json({ data: resultado });
}
export async function POST(req) {
    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    console.log(body);
     const resultado = await postUser(body);
    return NextResponse.json({ data: resultado });
}