
import './App.css';
import Row from './Row'
import requests from './request'
// import { some } from './Row'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
       {/* {banner} */}
       <Nav/>
       <Banner/>
      {/* <h1>
        hi there!
      </h1> */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}></Row>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}></Row>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies}></Row>
    </div>
  );
}

export default App;
