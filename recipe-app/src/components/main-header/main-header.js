import Link from "next/link";
import logoImage from '@/assets/logo.png'
import Image from "next/image";
import classes from './main-header.module.css';
import NavLink from "./Nav-link";

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link href='/' className={classes.logo}>
                <Image src={logoImage} alt="A plate with food on it" priority />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href={'/meals'}>Browse Meals</NavLink></li>
                    <li><NavLink href={'/community'}>Foodies Community</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}