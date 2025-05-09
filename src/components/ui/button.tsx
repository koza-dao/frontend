import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean; // Add disabled prop
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'px-4 py-2 font-semibold rounded-md focus:outline-none',
                'bg-white text-sBlue hover:bg-sBlue hover:text-white', // Default styling
                {
                    'bg-gray-300 text-gray-500 cursor-not-allowed': disabled, // Disabled state
                    'hover:bg-sBlue hover:text-white': !disabled, // Normal state
                },
                className // Dynamically added class from outside
            )}
            disabled={disabled} // Disable button functionality
        >
            {children}
        </button>
    );
};
