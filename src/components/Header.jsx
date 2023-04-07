import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '/logo.svg'

export default function Header() {

    const { pathname } = useLocation()

    const pages = [
        { id: '00', name: 'home', path: '/' },
        { id: '01', name: 'destination', path: '/destination' },
        { id: '02', name: 'crew', path: '/crew' },
        { id: '03', name: 'technology', path: '/technology' }
    ]

    const options = pages.map(value => (
        <Link to={value.path} key={value.id} className='relative group cursor-pointer'>
            <span
                className='font-bold hidden 
                md:inline-block'
            >{value.id}  &nbsp; </span>{value.name}
            <div
                className={`absolute w-full top-12 border-[#979797]
                group-hover:border-2
                ${pathname == value.path && 'border-2 border-white'}`}
            ></div>
        </Link>
    ))

    return (
        <div
            className='absolute w-screen flex items-center justify-between text-[12px]
            md:mt-8 md:text-[16px] z-10'
        >

            <Link to='/' >
                <img className='w-10 ml-8' src={logo} alt="spex" />
            </Link>

            <div
                className='hidden flex-1 z-10 ml-12 -mr-3 border-b-[1px] border-[#272727]
                md:block'
            ></div>

            <nav className='backdrop-blur-xl bg-white bg-opacity-5 h-20 items-center pl-5
                md:w-3/5'
            >
                <div className='flex mx-8 gap-10 uppercase font-subemphasis text justify-center h-full items-center tracking-[2.7px]'>
                    {options}
                </div>
            </nav>
        </div>
    )
}