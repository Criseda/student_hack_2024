"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const navItems = [
        {
        name: "About",
        link: "/about",
        icon: < FontAwesomeIcon icon={faCircleInfo} />,
        },
    ];
    
    return (
        <FloatingNav navItems={navItems} />
    );
}