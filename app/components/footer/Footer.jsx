import Container from "@/app/_container/Container";
import bizToken from "../../../public/icon/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-[100%] bg-[#00265D] pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-12 md:gap-5 mb-[150px] gap-5 px-5 lg:px-0">
          <div className="lg:col-span-3 col-span-6">
            <Image className="w-[75%]" src={bizToken} alt="" />
          </div>
          <div className="lg:col-span-3 col-span-6 lg:flex justify-center">
            <div>
              <h3 className="text-[20px] text-[#fff] font-semibold uppercase">
                Company
              </h3>
              <ul className="flex flex-col gap-[10px] mt-3">
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6 lg:flex justify-center">
            <div>
              <h3 className="text-[20px] text-[#fff] font-semibold uppercase">
                Legal
              </h3>
              <ul className="flex flex-col gap-[10px] mt-3">
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    Privecy-Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    Affiliate Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6 lg:flex justify-center">
            <div>
              <h3 className="text-[20px] text-[#fff] font-semibold uppercase">
                QUICK LINKS
              </h3>
              <ul className="flex flex-col gap-[10px] mt-3">
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    Business Plan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    How href Start
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] text-[16px] font-medium"
                  >
                    Token on BSC Scan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <div className="text-[#fff] text-center mt-8">
        <p>Copyright © 2023 Biz Token. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
