'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section1 from "./Section1";

const Section2 = () => {
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

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="w-full h-auto bg-black">
      <div className="w-full h-auto px-5 md:pt-32 pb-12 mx-auto max-w-[1200px] container pt-20">
                  <Section1></Section1>
        <div className="flex flex-col bg-black">
          <div className="grid grid-cols-2 px-16">
            {data.sections.map((section: any) => (
              <div key={section.id} className="pr-8">
                <a
                  href={section.details.cta_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="w-full h-64 mt-2 overflow-hidden ">
                    {section.details.image && (
                      <img
                        src={section.details.image}
                        alt={section.title}
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    )}
                  </div>

                  <h2 className="pt-5 pb-3 text-xl font-bold text-white">
                    {section.title}
                  </h2>

                  {section.details.text && (
                    <div
                      className="pr-4 mb-16 text-sm text-white"
                      dangerouslySetInnerHTML={{ __html: section.details.text }}
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
