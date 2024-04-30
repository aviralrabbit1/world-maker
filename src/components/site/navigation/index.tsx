import { User } from "@clerk/nextjs/server";
import React from "react";
import Image from 'next/image';

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
        </div>
    ) 
}

export default Navigation