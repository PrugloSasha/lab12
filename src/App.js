import React, { useState } from "react";

function Biography(){
  return(
    <div> 
      <p>Уильям Шекспир</p>
      <p>Уи́льям Шекспи́р — английский поэт и драматург, зачастую считается величайшим англоязычным писателем и одним из лучших драматургов мира. Часто именуется национальным поэтом Англии. Дошедшие до нас работы, включая некоторые, написанные совместно с другими авторами, состоят из 38 пьес, 154 сонетов, 4 поэм и 3 эпитафий</p>
    </div>
  );
}
function Creature(){
  return(
    <div> 
      <p>Hamlet</p>
      <p>«Траги́ческая исто́рия о Га́млете, при́нце да́тском» (англ. The Tragical Historie of Hamlet, Prince of Denmarke) или просто «Га́млет» — трагедия Уильяма Шекспира в пяти актах, одна из самых известных его пьес и одна из самых знаменитых пьес в мировой драматургии[1]. Написана в 1600—1601 годах. Это самая длинная пьеса Шекспира — в ней 4042 строки и 29 551 слово.</p>
    </div>
  );
}

function Increaser(){
  const [currentVal,InccurrentVal] = useState(1);
  const butClick = () =>{
    InccurrentVal(currentVal+1);
  }
  return(
    <button onClick={butClick}>{currentVal}</button>
  )
}








function ExternalInc(props){

  const handlerClick = () =>{
    props.onClickAct(props.IncreasedVal);
  }
  return(
      <div>
          <button onClick={handlerClick}>{props.IncreasedVal}</button>
      </div>
  );
}

function Display(props){

    return(
      <div>
        <p>{props.CurVal}</p>
      </div>
    );
}


export default function App() {
  
  const [displaycounter,Setdisplaycounter] = useState(1);

  const incfunc = incvalue => {
    Setdisplaycounter(displaycounter+incvalue);
  };
  
  return (

    <div className="App">
        {/* Ex 1
      <Biography/>
      <Creature/> */}


{/* 
            Ex 2
            <br/>
            <Increaser/> */}
{/* 
            Ex 3
            <ExternalInc IncreasedVal = {1} onClickAct={incfunc}/>
            <Display CurVal = {displaycounter}/> */}


            Ex 4
            <ExternalInc IncreasedVal = {1} onClickAct={incfunc}/>
            <ExternalInc IncreasedVal = {10} onClickAct={incfunc}/>
            <ExternalInc IncreasedVal = {-100} onClickAct={incfunc}/>
            <ExternalInc IncreasedVal = {25} onClickAct={incfunc}/>
            <Display CurVal = {displaycounter}/>
      
    </div>
  );
  // App.defaultProps={CurVal="0"};
}
