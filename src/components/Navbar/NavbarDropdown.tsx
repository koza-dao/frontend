import { useEffect, useRef } from 'react'
import { cn } from '../../../lib/utils'

interface DropdownMenuProps {
    items: string[]
    menuName: string
    isOpen: boolean
    onToggle: (menuName: string) => void
}

export default function DropdownMenu({ items, menuName, isOpen, onToggle }: DropdownMenuProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onToggle('') // dışarı tıklandığında kapat
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onToggle])

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => onToggle(menuName)}
                className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
            >
                {menuName}
            </button>
            {isOpen && (
                <div className={cn(
                    'mt-2 w-40 bg-white text-black rounded shadow-md z-10',
                    isOpen ? 'block' : 'hidden',
                    'md:absolute md:top-full md:right-0'
                )}>
                    <ul>
                        {items.map((item: string, index: number) => (
                            <li key={index} className="px-4 py-2 hover:bg-sBlue/80 hover:text-white cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
