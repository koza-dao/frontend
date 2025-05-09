'use client'

import { useState } from 'react'
import { FaBars, FaTimes, FaBell, FaUser, FaCog, FaEnvelope, FaSearch } from 'react-icons/fa'
import Link from 'next/link'

interface DropdownMenuProps {
    menuName: string
    items: { menuName: string; linkName: string }[]  // Menu items will be passed here
    isOpen: boolean
    onToggle: () => void
    onItemClick: () => void  // Yeni: item tıklanında dropdown kapanacak
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuName, items, isOpen, onToggle, onItemClick }) => {
    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="text-white font-medium"
            >
                {menuName}
            </button>
            {isOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
                    {items.map((item) => (
                        <li key={item.linkName}>
                            <Link
                                href={`/${item.linkName}`}
                                className="block px-4 py-2 hover:bg-gray-200"
                                onClick={onItemClick}  // Yeni: item tıklanırsa dropdown kapanacak
                            >
                                {item.menuName}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)

    const toggleDropdown = (index: number) => {
        setDropdownOpen(dropdownOpen === index ? null : index)
    }

    const closeDropdown = () => {
        setDropdownOpen(null)
    }

    // Dropdown menülerine gönderilecek itemlar
    const menuItems1 = [
        { menuName: 'Discover', linkName: 'discover-communities' },
        { menuName: 'My Communities', linkName: 'my-communities' }
    ]
    const menuItems2 = [
        { menuName: 'All Events', linkName: 'event-list' },
        { menuName: 'My Events', linkName: 'my-events' }
    ]
    const menuItems3 = [
        { menuName: 'Explore Jobs', linkName: 'job-list' },
        { menuName: 'My Applications', linkName: 'my-applications' }
    ]

    return (
        <nav className="bg-sBlue text-white px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">PRIVA</div>

                {/* Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 items-center justify-between ml-6">
                    {/* Search */}
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                            <FaSearch className="w-4 h-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Dropdowns */}
                    <div className="flex items-center gap-4 ml-6">
                        <DropdownMenu
                            menuName="Communities"
                            items={menuItems1}
                            isOpen={dropdownOpen === 1}
                            onToggle={() => toggleDropdown(1)}
                            onItemClick={closeDropdown}  // item tıklanınca dropdown kapanacak
                        />
                        <DropdownMenu
                            menuName="Events"
                            items={menuItems2}
                            isOpen={dropdownOpen === 2}
                            onToggle={() => toggleDropdown(2)}
                            onItemClick={closeDropdown}  // item tıklanınca dropdown kapanacak
                        />
                        <DropdownMenu
                            menuName="Jobs"
                            items={menuItems3}
                            isOpen={dropdownOpen === 3}
                            onToggle={() => toggleDropdown(3)}
                            onItemClick={closeDropdown}  // item tıklanınca dropdown kapanacak
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4 text-xl ml-6">
                        <FaEnvelope className="cursor-pointer hover:text-blue-400" />
                        <FaBell className="cursor-pointer hover:text-blue-400" />
                        <FaCog className="cursor-pointer hover:text-blue-400" />
                        <FaUser className="cursor-pointer hover:text-blue-400" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                            <FaSearch className="w-4 h-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <DropdownMenu
                            menuName="Communities"
                            items={menuItems1}
                            isOpen={dropdownOpen === 1}
                            onToggle={() => toggleDropdown(1)}
                            onItemClick={closeDropdown}  // item tıklanınca dropdown kapanacak
                        />
                        <DropdownMenu
                            menuName="Events"
                            items={menuItems2}
                            isOpen={dropdownOpen === 2}
                            onToggle={() => toggleDropdown(2)}
                            onItemClick={closeDropdown}  // item tıklanınca dropdown kapanacak
                        />
                        <DropdownMenu
                            menuName="Jobs"
                            items={menuItems3}
                            isOpen={dropdownOpen === 3}
                            onToggle={() => toggleDropdown(3)}
                            onItemClick={closeDropdown}  // item tıklanınca dropdown kapanacak
                        />
                    </div>

                    <div className="flex justify-around text-xl pt-2">
                        <FaEnvelope className="cursor-pointer hover:text-blue-400" />
                        <FaBell className="cursor-pointer hover:text-blue-400" />
                        <FaCog className="cursor-pointer hover:text-blue-400" />
                        <FaUser className="cursor-pointer hover:text-blue-400" />
                    </div>
                </div>
            )}
        </nav>
    )
}
