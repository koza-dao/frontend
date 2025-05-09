import Image from 'next/image'
import { FC } from 'react'

interface AvatarProps {
    src: string
    alt: string
    size?: 'small' | 'medium' | 'large'
}

const Avatar: FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
    const sizeClass = {
        small: 'w-8 h-8',
        medium: 'w-12 h-12',
        large: 'w-16 h-16',
    }[size]

    return (
        <div className={`${sizeClass} rounded-full overflow-hidden`}>
            <Image
                src={src}
                alt={alt}
                width={48} // 12 * 4 for medium size
                height={48} // 12 * 4 for medium size
                className="object-cover"
            />
        </div>
    )
}

export { Avatar }
