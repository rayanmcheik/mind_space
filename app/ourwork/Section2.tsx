import React from 'react'
import Card2 from './Card2'

const Section2 = () => {
  return (
    <div className='flex flex-col w-full mt-20 bg-black'>
        <div className="pb-10 text-5xl font-bold text-white">Our Value</div>
    <div className="pb-10 text-3xl text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
</div>
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
       
        <Card2 
        image='/rocket.svg'
        title='Be world-class'
        description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
'
        />       
        <Card2 
        image='/hand.svg'
        title='Take responsibility'
        description='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.'
        />       
        <Card2 
        image='/team.svg'
        title='Be supportive'
        description='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.'
        />       
        <Card2 
        image='/education.svg'
        title='Always learning'
        description=' lure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.
'
        />       
        <Card2 
        image='/stars.svg'
        title='Share everything you know'
        description='Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.'
        />       
        <Card2 
        image='/sun.svg'
        title='Enjoy downtime'
        description='Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.'
        />
    </div>
    </div>
  )
}

export default Section2