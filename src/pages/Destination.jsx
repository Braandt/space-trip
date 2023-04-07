import { useState } from 'react'

import planetsInfos from '../../public/planetsInfos.json'

export default function Destination() {

    const [planet, setPlanet] = useState(planetsInfos[0])

    const options = planetsInfos.map((value, index) => {
        return (
            <li
                key={value.name}
                onClick={() => setPlanet(value)}
                className={`group relative
            ${planet == value && 'text-white'}`}
            >
                {value.name.charAt(0).toUpperCase() + value.name.slice(1)}
                <div
                    className={`absolute w-full top-7 border-[#979797]
                group-hover:border-[1px]
                md:top-10
                ${planet == value && 'border-[1px] border-white'}`}
                ></div>
            </li>
        )
    })

    return (
        <>
            <div className='absolute w-screen h-screen bg-cover bg-destinations -z-10'></div>
            <div
                className='absolute flex flex-col w-full h-4/5 bottom-0 px-8 gap-6 items-center
                md:flex-row md:gap-16 md:px-32'
            >
                <div
                    className='flex h-2/5
                    md:w-3/5 md:h-auto'
                >
                    <img
                        className='self-center w-full h-full
                        md:w-auto md:h-auto'
                        src={planet.image} alt={planet.name}
                    />
                </div>
                <div
                    className='text-center flex flex-col items-end
                    md:w-2/5 md:text-left md:min-w-[60%]'
                >
                    <div
                        className='md:max-w-md flex flex-col items-center
                        md:block'
                    >
                        <nav className='text-lightblue'>
                            <ul
                                className='flex font-subemphasis tracking-[2.7px] gap-8 cursor-default text-sm
                                md:mb-10 md:text-base'
                            >
                                {options}
                            </ul>
                        </nav>
                        <Planet info={planet} />
                    </div>
                </div>
            </div>
        </>
    )
}

function Planet({ info }) {

    const { name, description, dist, travelTime } = info

    return (
        <>
            <h1 className='font-emphasis uppercase text-[100px] -mb-5'>{name}</h1>
            <p
                className='text-lightblue leading-[32px]
                md:text-[18px] md:mb-16'
            >
                {description}
            </p>
            <hr className='w-full border-[#383B4B]' />
            <div className='flex gap-24 mt-6'>
                <div>
                    <h5 className='text-lightblue text-[14px] tracking-[2.36px]'>Avg. distance</h5>
                    <h2 className='font-emphasis text-[28px]'>{dist}</h2>
                </div>
                <div>
                    <h5 className='text-lightblue text-[14px] tracking-[2.36px]'>Est. travel time</h5>
                    <h2 className='font-emphasis text-[28px]'>{travelTime}</h2>
                </div>
            </div>
        </>
    )
}