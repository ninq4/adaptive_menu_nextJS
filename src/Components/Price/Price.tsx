'use client';
import React from 'react';
import usePrice from '@/Hooks/usePrice';

const Price = () => {
  const priceList = usePrice();
  return (
    <section className="w-full py-12">
      <div className="container">
        <h2 className="text-center text-2xl text-white font-bold">Прайс лист</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-7">
          {priceList.length > 0
            ? priceList.map((item, pos) => (
                <div
                  key={pos}
                  className="bg-blue-500 rounded-xl p-4 flex flex-col items-start justify-between">
                  <h5 className="font-bold">{item.attributes?.title}</h5>
                  <div className="flex flex-col gap-4 pt-6">
                    <p className="text-white text-l">{item.attributes?.description}</p>
                    <p className="text-white text-l">{item.attributes?.egde}</p>
                    {item.attributes?.date && (
                      <p className="text-white text-l">
                        Действует до <span className="font-bold">{item.attributes?.date} </span>
                      </p>
                    )}
                    <p className="text-white text-xl font-bold">{item.attributes?.price} рублей</p>
                  </div>
                </div>
              ))
            : [1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-full h-[200px] md:h-[240px] rounded-xl bg-blue-800 animate-pulse"></div>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default Price;
