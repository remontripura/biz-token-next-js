"use client";
import Container from "@/app/_container/Container";
import email from "../../../public/icon/contact/email.svg";
import facebook from "../../../public/icon/contact/facebook.svg";
import twitter from "../../../public/icon/contact/twitter.svg";
import linkedin from "../../../public/icon/contact/linkedin.svg";
import youtube from "../../../public/icon/contact/youtube.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full bg-[#F3F3F3] px-3 py-20">
      <Container>
        <div className="grid grid-cols-12 gap-5">
          <div className="bg-[#F3FAFF] rounded-md lg:col-span-6 col-span-12 flex flex-col justify-center items-center py-6 lg:px-24 px-5">
            <Image className="size-24" src={email} alt="" />
            <div className="my-6 text-center">
              <h3 className="text-[28px] text-[#242424] font-semibold">
                Subscribe To Our Newslatter
              </h3>
              <p className="text-style3 my-3">
                Enter Your E-mail To Recive Your Daily Update
              </p>
            </div>
            <form className="w-full">
              <div className="flex gap-[6px] items-center">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-[#2F76DE] outline-[#2f76DE] transition-all rounded-2xl"
                />
                <motion.button
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#2F76DE] rounded-2xl px-5 py-2 text-[#fff]"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
          <div className="bg-[#F3FAFF] rounded-md col-span-12 lg:col-span-6 flex flex-col justify-center items-center py-6 lg:px-24 px-5">
            <h3 className="text-[28px] text-[#242424] font-semibold">
              Join Our Social Media
            </h3>
            <div className="flex gap-5 mt-8">
              <Link href="/" className="md:md:p-2 md:bg-[#D6E7FF] rounded-full">
                <Image width={40} height={40} src={email} alt="" />
              </Link>
              <Link href="/" className="md:md:p-2 md:bg-[#D6E7FF] rounded-full">
                <Image width={40} height={40} src={facebook} alt="" />
              </Link>
              <Link href="/" className="md:md:p-2 md:bg-[#D6E7FF] rounded-full">
                <Image width={40} height={40} src={twitter} alt="" />
              </Link>
              <Link href="/" className="md:md:p-2 md:bg-[#D6E7FF] rounded-full">
                <Image width={40} height={40} src={linkedin} alt="" />
              </Link>
              <Link href="/" className="md:md:p-2 md:bg-[#D6E7FF] rounded-full">
                <Image width={40} height={40} src={youtube} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
