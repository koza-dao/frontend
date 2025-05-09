import { ReactNode } from 'react'
import { useEffect } from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        // When the modal is open, prevent the page scroll
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                <div className="p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        <span className="text-2xl">&times;</span>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}
