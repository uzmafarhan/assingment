//Q40


function make_album (artist_name:string,album_titel:string,albbum_track?:number){

    let album:{artiststring,titel:string,track?:number}={
        artiststring: artist_name,
        titel:album_titel

    }

    if (albbum_track !== undefined){
        album.track=albbum_track

    }else{return album}

    }

   let album1= make_album("hammad ali","coding with hammad")

   let album2= make_album("hamza","code with hamza",10)

   console.log(album1),
   console.log(album2)

