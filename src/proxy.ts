import { Roles } from "@/constants/roles";
import { userService } from "@/services/user.service";
import { NextRequest, NextResponse } from "next/server";


export async function proxy(request: NextRequest) {

    const pathname = request.nextUrl.pathname;

    // let isAuthenticated = false;
    // let isAdmin = false;
    // let role;

    const { data } = await userService.getSession()

    // if (data) {
    //     isAuthenticated = true;
    //     isAdmin = data.user.role === Roles.admin
    // }

    if (!data) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    const role = data.user.role
    // ADMIN protection
    if (pathname.startsWith("/admin-dashboard") && role !== Roles.admin) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // SELLER protection
    if (pathname.startsWith("/seller-dashboard") && role !== Roles.seller) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // CUSTOMER protection
    if (pathname.startsWith("/dashboard") && role !== Roles.customer) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard", "/admin-dashboard", "/seller-dashboard"]
}