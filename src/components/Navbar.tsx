"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "basketball",
        },
        {
            id: 2,
            link: "fussball",
        },
        {
            id: 3,
            link: "handball",
        },
        {
            id: 4,
            link: "schwimmen",
        },
        {
            id: 5,
            link: "sport-stacking",
        },
        {
            id: 6,
            link: "tischtennis",
        },
        {
            id: 7,
            link: "turnen",
        },
        {
            id: 8,
            link: "volleyball",
        },
        {
            id: 10,
            link: "fanshop",
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-white border-b-4 border-blue shadow fixed nav">
            <div>
                <h1 className="ml-2">
                    <Link href="/">
                        <Image src="/tv98-logo.svg" width={50} height={50} alt="Logo" />
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-blue hover:scale-105 hover:text-darkblue duration-200 link-underline"
                    >
                        <Link href={link}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-blue md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-blue bg-white">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;