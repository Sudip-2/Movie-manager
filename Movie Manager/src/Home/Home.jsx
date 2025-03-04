import React, { useEffect, useState } from 'react';
import Homediv from './Homediv.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const apikey = import.meta.env.VITE_Apikey;
      const apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&s=movie&y=2024&plot=full&page=${page}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.Search) {
        setContent((prev) => [...prev, ...data.Search]);
      }

      if (content.length >= data.totalResults) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="bg-gray-800 text-gray-300 px-2 min-h-[90svh]">
      <InfiniteScroll
        dataLength={content.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<h4 className='text-center text-xl mb-2'>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8">
          {content.map((item) => (
            <Homediv item={item} key={item.imdbID} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;