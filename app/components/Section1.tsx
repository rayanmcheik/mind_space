'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Section1 = () => {
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
    <section className="flex-col flex ">
      <h1 className="text-3xl font-bold border">{data.title}</h1>
      <div className='grid grid-cols-3 gap-10'>
          {data.sections.map((section: any) => (
      
        <div key={section.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.details.text && (
            <div
              className="text-gray-700 mt-2"
              dangerouslySetInnerHTML={{ __html: section.details.text }}
            />
          )}
          {section.details.image && (
            <img
              src={section.details.image}
              alt={section.title}
              className="w-full max-w-lg rounded mt-2"
            />
          )}
          {section.details.cta_link && (
            <a
              href={section.details.cta_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 block"
            >
              {section.details.cta_text || 'Read more'}
            </a>
          )}
        </div>
       
      ) 
      )
   
    }
    </div>  
    </section>
  );
};

export default Section1;
