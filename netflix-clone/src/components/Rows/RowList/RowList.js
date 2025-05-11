import React from 'react';  // <-- This is needed for React <17
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const rowConfigs = [
  { title: 'NETFLIX ORIGINALS', fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
  { title: 'Trending Now', fetchUrl: requests.fetchTrending },
  { title: 'Top Rated', fetchUrl: requests.fetchTopRatedMovies },
  { title: 'Action Movies', fetchUrl: requests.fetchActionMovies },
  { title: 'Comedy Movies', fetchUrl: requests.fetchComedyMovies },
  { title: 'Horror Movies', fetchUrl: requests.fetchHorrorMovies },
  { title: 'Romance Movies', fetchUrl: requests.fetchRomanceMovies },
  { title: 'TV Shows', fetchUrl: requests.fetchTVShow },
  { title: 'Documentaries', fetchUrl: requests.fetchDocumentaries }
];

const RowList = () => {
  return (
    <>
      {rowConfigs.map((row) => (
        <Row
          key={row.title}
          title={row.title}
          fetchUrl={row.fetchUrl}
          isLargeRow={row.isLargeRow}
        />
      ))}
    </>
  );
};

export default RowList;
