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
              <div key={section.id} className="flex flex-col items-center justify-center pb-80">
                <div className='flex items-center justify-center w-full h-full'>
                  <AnimatedCirclecontact />
                </div>
                <div
                  style={{ cursor: 'url("./cursor.svg") 16 16, auto' }}
                  className="w-full h-80 overflow-hidden -mt-[600px] flex items-center justify-center ${./cursor.svg}"

                >
                  {section.details.image && (
                    <img
                      src={section.details.image}
                      alt={section.title}
                      className="object-cover w-1/2 h-full transition-all duration-300 ease-in-out hover:brightness-50"
                    />
                  )}
                </div>

                {section.details.cta_link && (
                  <h2 className="relative text-[60px] font-bold text-white cursor-pointer group -mt-28 w-1/2 ml-[650px]">
                    <span className="transition-opacity duration-300 group-hover:opacity-0">
                      {section.title}
                    </span>

                    <a
                      href={section.details.cta_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-0 left-0 w-full text-left text-[40px] text-red-500 mt-28 ml-28 transition-opacity duration-300  rounded opacity-0 bg-opacity-70 p-2 group-hover:opacity-100 inline-block"
                    >
                      {section.details.cta_text || "Read More"}
                    </a>
                  </h2>
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
