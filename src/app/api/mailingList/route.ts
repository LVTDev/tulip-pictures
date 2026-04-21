import { dbConnect } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import MailListEntry from "./model";
import { sendMailMailingList } from "../contact/mailService";

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
    // "vbotoku@grupolvt.com",
    // "naomi@letswoohoo.com",
    const res = await sendMailMailingList(
      "Sitio Tulip: mailing list",
      "cotizaciones@tulip-pictures.com",
      `Correo: ${email}`
    );
    console.log(res);

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
