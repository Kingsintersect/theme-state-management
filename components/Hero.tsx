import React from 'react'
import SwitchTheme from './SwitchTheme'

const Hero = () => {
    return (
        <div className="pt-36 relative overflow-hidden min-h-[70vh]">
            <div className="flex justify-center relative pb-5 z-10">
                <div className="max-w-[89vw] md:max-w-w2xl lg:max-w-[60vw] flex flex-col items-center">
                    <div className="text-center  w-[450px]">
                        <span className='md:tracking-widest mb-4 text-sm  md:text-lg lg:text-5xl'>
                            Tailwind CSS
                            Color Generator
                        </span>
                        <div className="md:tracking-widest mb-4 text-sm  md:text-lg lg:text-lg">Press spacebar, enter a hexcode or change the
                            HSL values to create a custom color scale</div>
                    </div>

                    <SwitchTheme />
                </div>
            </div>
        </div>
    )
}

export default Hero