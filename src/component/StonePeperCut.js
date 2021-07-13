import React, {useState} from 'react'
import Stone from '../img/even1.png'
import Pepper from '../img/niyar1.png'
import Cut from '../img/misparaim1.png'
import CWin from '../img/misparaimWin.png'
import PWin from '../img/peperWin.png'
import SWin from '../img/rockWin.png'
import './StonePeperCut.css';
import {HashRouter as Router,Switch,Link , Route} from 'react-router-dom'
// import {BrowserRouter as Router,Switch,Link , Route} from 'react-router-dom'
export default function StonePeperCut(props) {
    const [img,setImg] =useState([{name:'stone' , pic:Stone},{name:'peper',pic:Pepper},{name:'cut',pic:Cut}]);
    
    
        const imgStyle = {
            width:'100px',
            hight:'100px'
        }
        const play = (index,temp)=>{
            
            
        if (index==temp)
        {
           return <span style={{fontSize:'30px'}}>תיקו</span>
        }
        else
        {
            if (temp==0)
            {
                if (index==1)
                {
                    props.winner(1)
                    return <p style={{backgroundColor:'red'}}>שחקן ניצח <br /><img style={imgStyle} src={PWin} /></p>
                    
                }
                else
                {
                    props.winner(2)
                    return <p style={{backgroundColor:'orange'}}>מחשב ניצח <br /><img style={imgStyle} src={SWin} /></p>
                    
                }
            }
            else{
                if (temp==1)
            {
                if (index==2)
                {
                    props.winner(1)
                    return <p style={{backgroundColor:'red'}}>שחקן ניצח <br /><img style={imgStyle} src={CWin} /></p>
                    
                }
                else
                {
                    props.winner(2)
                    return <p style={{backgroundColor:'orange'}}>מחשב ניצח<br /><img style={imgStyle} src={PWin} /></p>
                    
                }
            }
            else{
                if (index==0)
                {
                    props.winner(1)
                    return <p style={{backgroundColor:'red'}}>שחקן ניצח<br /><img style={imgStyle} src={SWin} /></p>
                    
                }
                else
                {
                    props.winner(2)
                    return <p style={{backgroundColor:'orange'}}>מחשב ניצח<br /><img style={imgStyle} src={CWin} /></p>
                    
                }
            }
            }
            
        }
        // 
    }
    return (
        <div>
            <center>
            <br />
            <p style={{backgroundColor:'red'}}> שחקן <br/><img style={imgStyle} src={img[props.player].pic} /> </p><br />
            <p>{play(props.player,props.comp)} </p><br />
            <p style={{backgroundColor:'orange'}}> מחשב <br/><img style={imgStyle} src={img[props.comp].pic} /></p>
            
            <br/>
          <p style={{fontSize:'30px'}}>
            <span style={{backgroundColor:'orange'}}>ניצחונות מחשב</span>|
            <span style={{backgroundColor:'red'}}>ניצחונות שחקן</span>
          <br/>
            <span style={{backgroundColor:'red' }} >_______{props.p}_______</span>|
            <span style={{backgroundColor:'orange'}}>_______{props.c}_______</span>
          </p>
          </center>
            
        </div>
    )
}
