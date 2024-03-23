'use client';
import React, { useEffect, useState } from 'react';
import globalApi from '@/utils/globalApi';

const usePrice = () => {
  const [priceList, setPriceList] = useState([]);

  const getPriceList = () =>{
    globalApi.getPrice().then(resp => {
        setPriceList(resp.data.data)
    })
  }
  useEffect(() => {
    getPriceList()
  }, [])
  return priceList
};

export default usePrice;
