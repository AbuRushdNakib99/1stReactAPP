import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let time=new Date().getHours();
let greetings=" ";

const cssStyle={
}

if(time>=1&&time<12){
    greetings="Good Morning";
    cssStyle.color='green';
}
else if(time>=12&&time<17){
    greetings="Good Afternoon";
    cssStyle.color='Yellow';
}
else if(time>=17&&time<19){
    greetings="Good Evening";
    cssStyle.color="Orange";
}
else{
    greetings="Good Night";
    cssStyle.color="Black";
}

ReactDOM.render(
    <>
        <div>
         <h1>Hello Sir,<span style={cssStyle}>{greetings}</span></h1>
         </div>
    </>,
    document.getElementById('root')
);

