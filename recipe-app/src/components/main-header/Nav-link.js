'use client';
import Link from "next/link";
import classes from './Nav-link.module.css'
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const params = usePathname();
    return <Link className={params.startsWith(href) ? classes.active : undefined} href={href}>{children}</Link>
}