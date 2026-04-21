import { useState } from 'react';
import DisplayCards from './DisplayCard.jsx';

    function CheckPlay({clicked, setClicked , clickedList, setClickedList}){
          
        if(clicked == null){return console.log("no click", clicked)}
        if(clickedList.includes(clicked)){ 
           setClicked(null);
            setClickedList([]);
            console.log("inside false", clicked, clickedList);
            return false
        } else {
         setClicked(null);
            let ar= clickedList.slice()
            ar.push(clicked) 
            setClickedList(ar );
            console.log("inside true" ,clicked, clickedList);
            return true
        }
    }



function Game({plants}){
    const [topScore, setTopScore ]= useState(0);
    const [currentScore, setCurrentScore ]= useState(0);
    const [clickedList, setClickedList]= useState([]) 

    console.log("game got ",plants)
 
    function checkPlay(clicked){
        if(clicked == null){console.log("no click", clicked); return }
        if(clickedList.includes(clicked)){ 
            setClickedList([]);
            if(topScore <currentScore){ setTopScore(currentScore)} ;
            setCurrentScore(0);
            console.log("inside false", clicked, clickedList);
            return false
        } else {
            let ar= clickedList.slice()
            ar.push(clicked) 
            setClickedList(ar );
            setCurrentScore(currentScore+1)
            console.log("inside true" ,clicked, clickedList);
            return true
        }
    }

    return (
        <div className='game' >
            <h1>Buganvilia's Memory Game</h1>
            <div className='Scores'> 
                Top score: {topScore} <br />
                Score: {currentScore}
            </div> 
            <DisplayCards plants={plants} checkPlay={checkPlay}  />
        </div>
    )
    

}

export default Game