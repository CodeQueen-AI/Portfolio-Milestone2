import React from 'react';
import Link from 'next/link';
interface ResponsiveMenuProps {
    open: boolean;
    toggleMenu: () => void;
}
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, toggleMenu }) => {
    return (
        <div
            className={`absolute top-20 left-0 w-full h-screen z-20 bg-black bg-opacity-50 transition-all ${open ? 'block' : 'hidden'}`}>
            <div
                className='text-xl font-semibold uppercase bg-blue-800 text-white py-10 m-6 rounded-3xl'>
                <ul className='flex flex-col items-center gap-10'>
                    <li><Link href="/Hero" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/About" onClick={toggleMenu}>About</Link></li>
                    <li><Link href="/Skill" onClick={toggleMenu}>Skill</Link></li>
                    <li><Link href="/Journey" onClick={toggleMenu}>My Journey</Link></li>
                    <li><Link href="/project" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link href="/Contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default ResponsiveMenu;
