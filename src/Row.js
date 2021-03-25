import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
    // const ApiKey = "74e7840874a68eed545eb1368c68bb6e"
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("")
    const opts={
        height:"400",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
    const handleClick=(movie)=>{
        if(trailerUrl!=''){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name||'')
            .then((url)=>{
                const urlparms= new URLSearchParams( new URL(url).search)
                setTrailerUrl(urlparms.get('v'))

            }).catch((err)=>{
                console.log(err,movie.name)
            })
            
        }
    }
    // const fulldate = axios.get(`/trending/all/day?api_key=${ApiKey}`)
    useEffect(() => {
        console.log("hi", props.fetchUrl)
        async function fetchData() {
            const req = await axios.get(props.fetchUrl)
            console.log(req)
            setMovies(req.data.results)
            return req
        }
        fetchData()
    }, [props.fetchUrl])
    return (
        <div className="row">
            <h1>
                {props.title}
            </h1>
            <div className="row-posters">
               {movies.map((movie) => {
                    return <img
                    onClick={()=>handleClick(movie)} 
                    key={movie.id}
                    className="row_poster"
                    src={`${base_url}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>
               { trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}
function some() {

}
export { some }

export default Row
