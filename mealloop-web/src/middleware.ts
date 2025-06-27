import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
    const { nextUrl, cookies } = request;
    const pathname = nextUrl.pathname;
    
    console.log("Move to: ", pathname);

    if (pathname === "/") {
        return NextResponse.redirect(new URL('/explore', request.url));
    }

    return NextResponse.next();
}