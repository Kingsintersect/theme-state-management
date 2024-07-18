import React, { ReactNode } from 'react'

const Card = ({ className, iClass, children }: { className: string, iClass: string, children: ReactNode }) => {
    return (
        <div className={`w-[300px] h-[300px] font-bold shadow-2xl flex items-center justify-center relative ${className}`}>
            <h1 className="heading text-3xl">{children}</h1>
            <div className={`absolute w-10 h-10 rounded-full right-2 top-1 ${iClass}`}></div>
        </div>
    )
}

export default Card


