import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Look for the generated PDF in the public folder
    const filePath = path.join(process.cwd(), 'public', 'Emmanuel_Ezeka_Resume.pdf');
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Resume not found. Please run build:resume.', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    // Generate dynamic filename with timestamp
    const date = new Date();
    const timestamp = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}_${date.getHours().toString().padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}`;
    const dynamicFilename = `Emmanuel_Ezeka_Resume_${timestamp}.pdf`;

    // Return response with Content-Disposition to force download and set IDM filename
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': `attachment; filename="${dynamicFilename}"`,
        'Content-Type': 'application/pdf',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error("Error serving resume API:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
