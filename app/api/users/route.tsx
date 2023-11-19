import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'abdullah' },
        { id: 2, name: 'usman' },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 401 });
    } else {
        return NextResponse.json({
            id: 1,
            name: body.name
        }, { status: 201 });
    }
}