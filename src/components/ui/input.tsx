import React, { ChangeEvent } from 'react';

interface InputProps {
    as?: 'input' | 'textarea'; // Dynamically switch between 'input' and 'textarea'
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Updated type for 'input' and 'textarea'
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    as = 'input', // Default to 'input' if no 'as' is provided
    type = 'text',
    placeholder,
    value,
    onChange,
    className,
}) => {
    if (as === 'textarea') {
        return (
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`px-4 py-2 border rounded-md ${className}`}
            />
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`px-4 py-2 border rounded-md ${className}`}
        />
    );
};
