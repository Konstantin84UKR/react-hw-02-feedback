import React , { Component } from 'react';
import style from './Feedback.module.css'

export default class Feedback extends Component{
    constructor(props){
        super(props);
        this.state ={
            good: 0,
            neutral: 0,
            bad: 0
          }     
       // this.handleClick = this.handleClick.bind(this); 
    }

    incrementCounter(prevState,id) {
       // как динамически изменить стейт?
       // например если Я знаю имя поля, но не прописываю изменение явно например вот так 
       // result = {id: prevState.id + 1}  где id входяший параметр

       let result = {};
       switch (id) {
           case 'good':
            result = {good: prevState.good + 1}
               break;
           case 'neutral':
            result = {neutral: prevState.neutral + 1}
               break;
           case 'bad':
            result = {bad: prevState.bad + 1}
               break;    
           default:
               break;
       } 
       return result;
    }

    handleClick =(id)=>{
       this.setState(()=>this.incrementCounter(this.state,id))
    }

    render(){
        // пробовал разнести по разным файлам, но получаеться не так наглядно.
        // решил оставить все в одном классе 
        let statistic;
        if ((this.state.good + this.state.neutral + this.state.bad) > 0) {
            statistic = <div>
                <ul>
                    <li className={style.li_item}>Good : {this.state.good}</li>
                    <li className={style.li_item}>Neutral : {this.state.neutral}</li>
                    <li className={style.li_item}>Bad : {this.state.bad}</li>
                    <li className={style.li_item}>Total : {this.state.good + this.state.neutral + this.state.bad}</li>
                </ul>
                <h3 className={style.title}>Positiv feedback: {((this.state.good)/(this.state.good + this.state.neutral + this.state.bad) *100).toFixed(2)}%</h3>
            </div>
          } else {
            statistic = <h3 className={style.title}>no feedback given</h3>
          }

       return (
        <div className={style.container}>
        <h2 className={style.h2}>Please leave Feedback</h2>
            <div className={style.button_container}>
                <button className={style.button} onClick={()=>this.handleClick('good')} id='good'>Good</button>
                <button className={style.button} onClick={()=>this.handleClick('neutral')} id='neutral'>Neutral</button>
                <button className={style.button} onClick={()=>this.handleClick('bad')} id='bad'>Bad</button>
            </div>  
            <div>
            <h2 className={style.title}>Statistics</h2>  
                {statistic}  
            </div>   
        </div>
       )    
    }
};
