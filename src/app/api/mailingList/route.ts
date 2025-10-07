import { dbConnect } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import MailListEntry from "./model";

export async function GET() {
  await dbConnect();

  //   const email = request.nextUrl.searchParams.get("person");
  //   const regex = new RegExp(email, "i");
  try {
    const contactData = await MailListEntry.find({});
    console.log(contactData);
    return NextResponse.json(contactData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { email } = await request.json();
    await MailListEntry.create({ email });

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
