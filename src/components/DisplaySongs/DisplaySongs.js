import classes from "./DisplaySongs.module.css"
const DisplaySongs = (props) => { 

    function Song(name, img, uri) {
        this.name = name;
        this.img = img; 
        this.uri = uri;
    }

    const songData = props.topSongs; 

    console.log(songData)

    let songTitles = []; 
    var songs = []

    songData.forEach((song, i) => { 
        var i = new Song(song.name, song.album.images[0], song.preview_url)
        songTitles.push(i.name)
        songs.push(i);
    });

    console.log(songs);


    
    const mappedSongs = songs.map((song) => { 
        var correctAnswer = song.name
        var songOptionsFiltered = songs.filter(function( obj ) {
            return obj.name !== song.name;
          });

        var correctAnswerObj = songs.filter(function( obj ) {
            return obj.name === song.name;
          });
          
        const songOptionsShuffled = songOptionsFiltered.sort(() => 0.5 - Math.random());
        let selectedAnswerOptions = songOptionsShuffled.slice(0, 3);
        selectedAnswerOptions.push(correctAnswerObj[0])
        let answerOptionsShuffled = selectedAnswerOptions.sort(() => 0.5 - Math.random());
        

        const mappedAnswerOptions = answerOptionsShuffled.map( (song, i) => { 
            return (
                <>
                <div className={classes.answerContainer}>
                
                <button
                className={classes.btnAnswerOption}
                  type="radio"
                  name={correctAnswer}
                  value={song.name === correctAnswer ? true : false}
                  onClick={props.handleAnswer}
                ><div className={classes.imgContainer}><img src={song.img.url} className={classes.img} alt="album"></img></div><div className={classes.answerText}>{song.name}</div></button>
                </div>
                </>
                
              
                
            )})

        return (
            <>
            <div>{song.name}</div>
            <audio controls="controls">
            <source src={song.preview_url} type="audio/mpeg"/>
    
    
  </audio>
  {mappedAnswerOptions}
            
            </>
        )
    })

    return <div>{mappedSongs}</div> 

}

export default DisplaySongs; 