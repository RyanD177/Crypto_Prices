import React from 'react';
import {useEffect, useState } from 'react'
//When the component intially mounts, should make a request to the api
//excepts a GET with one query parameter, page
//page should be a num representing which page of data is being requested.
// hasNext will always be true.
// component should return a table. coin   price    market cap
//
//
const CRYPTO_PRICES_API_BASE_URL = '/api/fe/cryptocurrencies';


  
export default function CryptoPrices() {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(0);
    const [hasNext, setHasNext] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `${CRYPTO_PRICES_API_BASE_URL}?page=${page}`;
        
            const response = await fetch(apiUrl);
            const {coins, hasNext} = await response.json();
            setCoins(coins)
            setHasNext(hasNext)
        }
        fetchData();
    }, [page])

  return (
    <>
        <h1> Hello</h1>
    </>
  );
}