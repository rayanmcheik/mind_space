import React from 'react'
import AnimatedCirclecontact from './AnimatedCircle'
import Contactdetails from './contactdetails'


const contact = () => {
    return (
        <div className="w-full h-full bg-black pb-80">
            <div className="container w-full h-full px-0 pt-20 pb-12 mx-auto md:pt-20 md:pb-52">
                <div className='flex flex-col items-center justify-center'>
                    <AnimatedCirclecontact />
                    <p className="absolute text-[80px] text-white top-48 w-1/2 text-center font-serif leading-20 pb-20">
                        We’re right here - in<br />
                        different markets,<br />
                        doing different things.<br />
                        because each is<br />
                        different, and the<br />
                        needs are different.<br />
                        that’s<br />
                        how we do <text className='font-bold text-[90px] leading-28'>less of
                            <br />
                             the same, and</text><text className='font-bold text-red-500 text-[90px] leading-28'> more<br /> of what matters.</text>
                    </p>
                    <Contactdetails />
                </div>
            </div>
        </div>
    )
}

export default contact