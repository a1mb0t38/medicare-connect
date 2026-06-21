
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {

    const pathname = usePathname()

    const isActive = pathname === href;

    return <Link href={href} className={isActive ? 'text-[#157299] border-b-2 border-b-[#076a94]' : ""}>{children}</Link>
};

export default NavLink;