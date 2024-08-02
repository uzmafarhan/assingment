//Q40
function make_album(artist_name, album_titel, albbum_track) {
    var album = {
        artiststring: artist_name,
        titel: album_titel
    };
    if (albbum_track !== undefined) {
        album.track = albbum_track;
    }
    else {
        return album;
    }
}
var album1 = make_album("hammad ali", "coding with hammad");
var album2 = make_album("hamza", "code with hamza", 10);
console.log(album1),
    console.log(album2);
