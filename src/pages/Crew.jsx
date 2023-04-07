import { useState } from 'react'

import crewInfos from '../../public/crewInfos.json'

export default function Crew() {

    const [person, setPerson] = useState(crewInfos[0])

    const personInfo = crewInfos.map((value, index) => (
        <div
            key={value.name}
            onClick={() => setPerson(value)}
            className={`h-3 w-3 bg-white/[.17] rounded-full
            hover:bg-white/[0.5]
            ${person == value && 'bg-white/[1]'}`}
        ></div>
    ))

    return (
        <>
            <div className='absolute w-screen h-screen bg-cover bg-crew -z-10'></div>
            <div
                className='absolute w-full flex flex-col bottom-0 h-4/5
                md:flex-row md:pl-32 md:gap-24'
            >
                <div
                    className='flex items-center flex-col text-center
                    md:w-1/2 md:items-start md:text-left md:justify-end md:h-full'
                >
                    <Card person={person} />
                    <div className='py-4 md:py-20'>
                        <div className='bottom-20 flex gap-4'>
                            {personInfo}
                        </div>
                    </div>
                </div>
                <div
                    className='relative flex-1
                    md:w-full md:flex-auto'
                >
                    <img
                        className='absolute h-full left-1/2 -translate-x-1/2 object-cover
                        md:'
                        src={person.photo} alt={person.name}
                    />
                </div>
            </div>
        </>
    )
}

function Card({ person }) {
    return (
        <div className='px-4 md:px-0'>
            <h3
                className='font-emphasis text-[20px] uppercase text-lightblue
                md:text-[32px]'
            >
                {person.position}
            </h3>
            <h1 className='font-emphasis text-[56px] uppercase'>{person.name}</h1>
            <p
                className='text-lightblue text-[14px] leading-[32px]
                md:text-[18px] md:max-w-md'
            >
                {person.description}
            </p>
        </div>
    )
}