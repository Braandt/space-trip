import { useState } from 'react'

import techInfos from '../../public/techInfos.json'

export default function Technology() {

    const [tech, setTech] = useState(techInfos[0])

    const options = techInfos.map((value, index) => (
        <div
            key={value.name}
            onClick={() => setTech(value)}
            className={`flex justify-center items-center rounded-full aspect-square font-emphasis outline outline-1 outline-white/[.25] cursor-default w-12 text-xl
            md:w-[80px] md:text-[32px]
            hover:outline-white/[1]
            ${value == tech && 'bg-white text-black'}`}
        >
            {index + 1}
        </div>
    ))

    return (
        <>
            <div className='absolute w-screen h-screen bg-cover bg-technology -z-10'></div>
            <div
                className='absolute w-full flex flex-col bottom-0 h-4/5 items-center
                md:flex-row md:pl-40 md:justify-between'
            >
                <div
                    className='h-1/3 w-full
                    md:order-3 md:h-[527px] md:w-auto'
                >
                    <img className='w-full h-full object-cover' src={tech.photo} alt="" />
                </div>
                <div
                    className='flex gap-8 my-8
                    md:flex-col md:mr-14'
                >
                    {options}
                </div>

                <div
                    className='max-w-xl text-center
                    md:text-left'
                >
                    <h5 className='font-subemphasis tracking-[2.7px] text-lightblue'>The terminology ...</h5>
                    <h1 className='font-emphasis text-[56px] uppercase'>{tech.name}</h1>
                    <p
                        className='leading-[32px] text-lightblue text-sm
                        md:text-[18px]'
                    >
                        {tech.description}
                    </p>
                </div>
            </div>
        </>
    )
}