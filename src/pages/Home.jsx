import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='absolute w-screen h-screen bg-home2 bg-cover -z-10
            md:bg-home'
            ></div>
            <div
                className='absolute w-full h-4/6 px-12 top-32
                md:bottom-0 md:top-auto'
            >

                <div className='flex flex-col justify-between max-w-7xl mx-auto items-center text-center
                md:flex-row md:items-end md:text-left'
                >

                    <div className='max-w-md'>
                        <h2
                            className='font-subemphasis tracking-[4.75px] uppercase text-lightblue text-[20px]
                            md:text-[28px]'
                        >
                            So, you want to travel to
                        </h2>
                        <h1 className='font-emphasis text-[150px] uppercase'>Space</h1>
                        <p className='text-lightblue'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>

                    <Link to='/destination'
                        className='flex items-center 
                        md:justify-end'
                    >
                        <div
                            className='h-[274px] w-[274px] bg-white text-black flex items-center justify-center rounded-full mt-12 transition-all
                            hover:outline hover:outline-[#979797]/[0.5] hover:outline-[60px] hover:cursor-pointer
                            md:mt-0'
                        >
                            <h2 className='font-emphasis uppercase text-3xl'>Explore</h2>
                        </div>
                    </Link>

                </div>

            </div>
        </>
    )
}