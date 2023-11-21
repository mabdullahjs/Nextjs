import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";



export async function GET(request: NextRequest) {
    await dbConn();
    const contact = await Contact.find({});
    return NextResponse.json(contact)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 401 });
    } else {
        await dbConn();
        await Contact.create(body);
        return NextResponse.json({
            message: 'course added succesfully'
        }, { status: 201 });
    }
}