const moviet=require("movie-trailer")
moviet("Chilling Adventures of Sabrina").then(function(url){
    console.log(url)
}).catch(function(err){
    console.log(err)
})