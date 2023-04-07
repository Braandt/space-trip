import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Subtitle() {

    const [info, setInfo] = useState({})

    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname == '/destination') {
            setInfo({
                id: '01',
                text: 'Pick your destination'
            })
        }
        else if (pathname == '/crew') {
            setInfo({
                id: '02',
                text: 'Meet your crew'
            })
        }
        else if (pathname == '/technology') {
            setInfo({
                id: '03',
                text: 'Space launch 101'
            })
        } else {
            setInfo({})
        }
    }, [pathname])

    return (
        <>
            {
                pathname !== '/' &&
                <h1
                    className='absolute uppercase font-subemphasis tracking-[4.75px] top-28 left-8
                    md:top-40 md:left-36 md:text-[28px]'
                >
                    <span className='text-[#979797]'>{info.id} </span> {info.text}
                </h1>
            }
        </>
    )
}