import React,{useEffect, useState} from 'react'
import axios from './axios'
import request from './request'
import './Banner.css'
function Banner() {
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        async function fetchDate(){
        const req=await axios.get(request.fetchNetflixOriginals)

        setMovie(
            req.data.results[Math.floor(Math.random()*req.data.results.length-1)]
        );
        return req;
        }
        fetchDate()
    },[])
    return (
        <header className="banner"
         style={
             {
                 backgroundSize:"cover",
                 backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                 backgroundPosition:"center center"
             }
         }>
             <div className="banner_contents">
                      <h1 className="banner_title">
                          {movie?.title ||movie?.name||movie?.original_name}
                      </h1>
                      <div className="banner_buttons"
                      >
                          <button className="banner_button"> 
                              play
                          </button>
                          <button className="banner_button"> 
                              my list
                          </button>

                      </div>
                      <h1 className="banner_description">
                            {movie?.overview}
                      </h1>
             </div>
             <div className="banner_fadeButton"/>
        </header>
    )
}

export default Banner

