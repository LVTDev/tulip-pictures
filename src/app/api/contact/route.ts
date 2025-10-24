import { dbConnect } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import ContactEntry from "./model";
import { sendMail } from "./mailService";

export async function GET() {
  await dbConnect();

  //   const email = request.nextUrl.searchParams.get("person");
  //   const regex = new RegExp(email, "i");
  try {
    const contactData = await ContactEntry.find({});
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
    const { name, email, message, company } = await request.json();
    await ContactEntry.create({ name, email, message, company });
    const res = await sendMail(
      "Sitio Tulip: Formulario Contactanos",
      "tulip@grupolvt.com",
      `Client: ${name}
       Correo: ${email}
       Empresa:${company}
       Mensaje: ${message}`
    );
    console.log(res);

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
