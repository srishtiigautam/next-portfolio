"use client";
import { IoMdMail } from "react-icons/io";
import Button from "./Button.component";

const Mail = () => {
  const sendMail = () => {
    const email = "srishti.gautam0423@gmail.com";
    const subject = encodeURIComponent("Excited to Connect with You!");
    const body = encodeURIComponent(
      "Hi Srishti,\n" +
        "I came across your portfolio and wanted to get in touch. Looking forward to connecting with you!\n\n" +
        "Best regards,\n"
    );
    const mailTo = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(mailTo, "_blank");
  };
  return (
    <Button onClick={sendMail} className="bg-none px-0 py-0 m-0">
      <IoMdMail size={35} className="hover:text-pink-600" />
    </Button>
  );
};

export default Mail;
