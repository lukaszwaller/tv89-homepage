import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">

        <div className="flex justify-center mb-4">
          <Image src="/tv89-logo.svg" width={50} height={50} alt="Logo" />
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </Link>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/">
            Impressum
          </Link>
          <Link href="/">
            Datenschutz
          </Link>
        </div>

        <p className="text-sm">©2024 TV89 Zuffenhausen e.V.</p>
        <p className="text-sm">Powered by{" "}
          <Link href="https://github.com/lukaszwaller" target="_blank" rel="noopener noreferrer">
            lukaszwaller
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;