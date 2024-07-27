import React from 'react'

const authLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative h-screen text-white bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {children}
        </div>
    )
}

export default authLayout
