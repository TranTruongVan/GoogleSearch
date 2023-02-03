import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../Stats/Stats';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import News from '../News/News';
import { CircularProgress } from '@mui/material';
import { useGetCryptoGlobalQuery } from '../../services/cryptoGlobalAPi';

const demoStats = {
  total: 23157,
  totalCoins: 23157,
  totalMarkets: 37226,
  totalExchanges: 179,
  totalMarketCap: '1122449042768',
  total24hVolume: '121885205173',
};

const Homepage = () => {
  // const { data, isFetching } = useGetCryptoGlobalQuery();
  // const stats = data?.data?.stats;
;

  // if (isFetching)
  //   return (
  //     <div className="flex justify-center">
  //       <CircularProgress size="120px" />
  //     </div>
  //   );

  return (
    <>
      <Stats stats={demoStats} />

      <div className="flex justify-between items-center">
        <div className="sm:text-base md:text-lg lg:text-2xl font-bold">
          Top 12 Cryptocurrencies in the world
        </div>
        <div className="hidden md:block md:text-lg lg:text-2xl font-bold text-blue-500">
          <Link to="/cryptocurrencies">Show More</Link>
        </div>
      </div>
      <Cryptocurrencies simplified />

      <div className="flex justify-between items-center">
        <div className="sm:text-base md:text-lg lg:text-2xl font-bold">
          Latest Crypto News
        </div>
        <div className="hidden md:block md:text-lg lg:text-2xl font-bold text-blue-500">
          <Link to="/news">Show More</Link>
        </div>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
