import { User } from "@clerk/nextjs/server";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { ModeToggle } from "@/components/global/mode-toggle";
import { UserButton } from "@clerk/nextjs";

type Props = {
    user?: null | User
}

const Navigation = ({ user }: Props) => {
    return (
        <div className="p-4 flex items-center justify-between relative">
            <aside className="flex items-center gap-2">
                <Image src={'/assets/world-maker.svg'} alt="logo" height={40} width={40}
                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted" />
                <span className="text-xl font-bold">World-Maker</span>                
            </aside>
            <nav className="hidden md:block absolute left-[50%] top-[50%] 
            transform translate-x-[-50%] translate-y-[-50%]">
                <ul className="flex items-center justify-center gap-8">
                    <Link href={'#'}>Pricing</Link>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Documentation</Link>
                    <Link href={'#'}>Features</Link>
                </ul>
            </nav>
                <aside className="flex gap-2 items-center">
                    <Link href='/agency' className="bg-primary text-white p-2 px-4
                    rounded-md hover:bg-primary/80 " > Login </Link>
                    <UserButton />
                    <ModeToggle />
                </aside>
            
        </div>
    ) 
}

export default Navigation