'use client';
import Link from "next/link";
import '/styles/NavBar.scss';
import {usePathname} from "next/navigation";
import React from "react";

const NavBar: React.FC = () => {
    const pathname = usePathname();

    return (
        <>
            <nav className='navbar'>
                {/*<p className='navbar-text'>Motivational Quotes</p>*/}
                <ul className='navbar-items'>
                    <li className='navbar-item'>
                        <Link href='/' className={`page-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link href='/categories' className={`page-link ${pathname === '/categories' ? 'active' : ''}`}>Categories</Link>
                    </li>
                    {/*<li className='navbar-item'>*/}
                    {/*    <Link href='/favorites' className={`page-link ${pathname === '/favorites' ? 'active' : ''}`}>Favorites</Link>*/}
                    {/*</li>*/}
                    <li className='navbar-item'>
                        <Link href='/add-quote' className={`page-link ${pathname === '/add-quote' ? 'active' : ''}`}>Add Quote</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;