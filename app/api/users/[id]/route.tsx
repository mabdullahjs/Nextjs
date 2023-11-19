import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: { id: number }
}
export function GET(request: NextRequest, { params: { id } }: Props) {

    if (id > 10) {
        return NextResponse.json({ error: 'error occured' }, { status: 404 });
    } else {
        return NextResponse.json({
            id: 1,
            name: 'abdullah'
        });
    }
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (id > 10) {
        return NextResponse.json({ error: 'User not found' }, { status: 401 });
    } else if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }
    return NextResponse.json({
        id: 1,
        name: 'abdullah'
    });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json();
    if (id > 10) {
        return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }
    return NextResponse.json({ message: 'user deleted succesfully' });
}