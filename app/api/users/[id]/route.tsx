import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import Contact from "@/models/contact";
import mongoose from "mongoose";
import dbConn from "@/utils/dbConn";

interface Props {
    params: { id: number }
}

// get single contact from DB
export async function GET(request: NextRequest, { params: { id } }: Props) {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'No such contact' }, { status: 404 });
    }
    const contact = await Contact.findById(id);
    return NextResponse.json(contact, { status: 200 });

}

// update contact from DB
export async function PUT(request: NextRequest, { params: { id } }: Props) {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'No such contact' }, { status: 404 });
    }
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 401 });
    }
    await dbConn();
    const contact = await Contact.findOneAndUpdate(
        { _id: id },
        {
            ...body,
        }
    );
    if (!contact) {
        return NextResponse.json({ error: "No such Contact" });
    }
    return NextResponse.json(contact, { status: 201 });
}


// delete contact from DB
export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'No such contact' }, { status: 404 });
    }
    const contact = await Contact.findOneAndDelete({ _id: id });

    if (!contact) {
        return NextResponse.json({ error: "No such contact" });
    }

    return NextResponse.json({ message: 'contact deleted succesfully' });
}