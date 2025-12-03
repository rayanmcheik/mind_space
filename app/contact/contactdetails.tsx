'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section1 from "../components/Section1";
import AnimatedCirclecontact from './AnimatedCircle';

const Contactdetails = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://hanzo.dxpshift.com/api/page/news')
      .then((res) => {
        if (res.data.success) setData(res.data.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className='flex items-start justify-center w-full bg-black h-lvh pt-96'><h1 className='text-3xl font-bold text-white'>Loading...</h1></div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="w-full h-auto bg-black">
      <div className="container w-full h-auto px-0 pt-20 pb-12 mx-auto md:pt-96 ">
       
        <div className="flex flex-col items-center justify-center bg-black">

          <div className="grid items-center grid-cols-1 gap-3 ">
            {data.sections.map((section: any) => (
              <div key={section.id} className="flex flex-col items-center justify-center pb-48">
                <div className='flex items-center justify-center w-full h-full'>
                <AnimatedCirclecontact />
                </div>
                <div className=" w-full h-80 overflow-hidden -mt-[600px] flex items-center justify-center ">
                       
                  {section.details.image && (
                    <img
                      src={section.details.image}
                      alt={section.title}
                      className="object-cover w-1/2 h-full transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  )}
                </div>

                <h2 className="pt-5 pb-3 text-xl font-bold text-white">
                  {section.title}
                </h2>

                {section.details.text && (
                  <div
                    className="pr-4 mb-4 text-sm text-white"
                    dangerouslySetInnerHTML={{ __html: section.details.text }}
                  />
                )}

                {section.details.cta_link && (
                  <a
                    href={section.details.cta_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 mb-16 font-bold text-red-500 transition-colors rounded-md "
                  >
                    {section.details.cta_text || "Read More"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactdetails;
