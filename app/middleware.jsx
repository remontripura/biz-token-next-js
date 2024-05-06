import { NextResponse } from "next/server";
import { isAuthenticated } from "./utils/Auth";
// import { isAuthenticated } from "./app/utils/Auth";

const protectedRoutes = ["/all-blogs"];

export default function middleware(req) {
  // Assuming isAuthenticated takes req as an argument to authenticate the user
  if (!isAuthenticated(req) && protectedRoutes.includes(req.url)) {
    // Redirect to login page or any other appropriate page
    return NextResponse.redirect("/login");
  }

  // If user is authenticated or route is not protected, continue with the request
  return NextResponse.next();
}
