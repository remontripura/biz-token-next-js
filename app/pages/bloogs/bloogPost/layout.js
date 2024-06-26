import AdminSidebar from "@/app/components/shared/admin/AdminSideBar";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {

    return (
        <div className="w-full mx-auto relative">
            <div className="grid grid-cols-12 overflow-hidden ">
                <div className={`col-span-3 md:block hidden bg-white z-30 sticky overflow-y-auto`}>
                    <AdminSidebar />
                </div>
                <div className="col-span-9">
                    {children}
                </div>
            </div>

        </div>

    );
}
