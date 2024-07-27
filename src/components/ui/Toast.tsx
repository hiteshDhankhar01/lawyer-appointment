import React, { useState, useEffect } from 'react';

type ToastProps = {
    message: string;
    duration?: number;
    onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed top-4 right-4 max-w-xs w-full bg-white p-4 rounded-lg shadow-lg text-black transform transition-all duration-300 ease-in-out animate-fade-in-out">
            <div className="flex items-center">
                <div className="flex-shrink-0">

                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Toast;
