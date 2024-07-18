// app/api/theme/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const themeFilePath = path.resolve(process.cwd(), 'theme.json');

export async function GET() {
    try {
        const themeData = fs.readFileSync(themeFilePath, 'utf-8');
        const theme = JSON.parse(themeData).theme;
        const mode = JSON.parse(themeData).mode;
        return NextResponse.json({ theme, mode });
    } catch (error) {
        console.error("Error reading theme file:", error);
        return NextResponse.json({ error: "Failed to read theme file" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { theme, mode } = await request.json();
        // if (!theme || (theme !== 'light' && theme !== 'dark')) {
        if (!theme && !mode) {
            return NextResponse.json({ error: 'Invalid theme value' }, { status: 400 });
        }
        const themeData = JSON.parse(fs.readFileSync(themeFilePath, 'utf-8'));
        if (mode) { themeData["mode"] = mode; }
        if (theme) { themeData["theme"] = theme; }
        fs.writeFileSync(themeFilePath, JSON.stringify({ ...themeData }, null, 2));
        return NextResponse.json({ theme });
    } catch (error) {
        console.error("Error writing theme file:", error);
        return NextResponse.json({ error: "Failed to write theme file" }, { status: 500 });
    }
}
