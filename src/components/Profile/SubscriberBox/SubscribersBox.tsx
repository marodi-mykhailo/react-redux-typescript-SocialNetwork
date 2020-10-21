import React from 'react';
import s from './SubscribersBox.module.css'
import {Paper} from "@material-ui/core";

const SubscribersBox = () => {
    return (
        <div className={s.subscribersBox}>
            <Paper elevation={3} className={s.wrapper}>
                <div className={s.head}>Subscribers <span>1000</span></div>
                <div className={s.box}>
                    <div className={s.item}>
                        <img
                            src={'https://sun9-14.userapi.com/impf/c638716/v638716938/4150d/-eLSOlJAwkQ.jpg?size=100x0&quality=88&crop=0,0,453,453&sign=371d3bcb10e07dc5ba7894660896d81a&ava=1'}
                            alt={''}/>
                        <span className={s.name}>Stas</span>
                    </div>
                    <div className={s.item}>
                        <img
                            src={'https://sun9-14.userapi.com/impf/c638716/v638716938/4150d/-eLSOlJAwkQ.jpg?size=100x0&quality=88&crop=0,0,453,453&sign=371d3bcb10e07dc5ba7894660896d81a&ava=1'}
                            alt={''}/>
                        <span className={s.name}>Stas</span>
                    </div>
                    <div className={s.item}>
                        <img
                            src={'https://sun9-14.userapi.com/impf/c638716/v638716938/4150d/-eLSOlJAwkQ.jpg?size=100x0&quality=88&crop=0,0,453,453&sign=371d3bcb10e07dc5ba7894660896d81a&ava=1'}
                            alt={''}/>
                        <span className={s.name}>Stas</span>
                    </div>
                    <div className={s.item}>
                        <img
                            src={'https://sun9-14.userapi.com/impf/c638716/v638716938/4150d/-eLSOlJAwkQ.jpg?size=100x0&quality=88&crop=0,0,453,453&sign=371d3bcb10e07dc5ba7894660896d81a&ava=1'}
                            alt={''}/>
                        <span className={s.name}>Stas</span>
                    </div>
                    <div className={s.item}>
                        <img
                            src={'https://sun9-14.userapi.com/impf/c638716/v638716938/4150d/-eLSOlJAwkQ.jpg?size=100x0&quality=88&crop=0,0,453,453&sign=371d3bcb10e07dc5ba7894660896d81a&ava=1'}
                            alt={''}/>
                        <span className={s.name}>Stas</span>
                    </div>
                    <div className={s.item}>
                        <img
                            src={'https://sun9-14.userapi.com/impf/c638716/v638716938/4150d/-eLSOlJAwkQ.jpg?size=100x0&quality=88&crop=0,0,453,453&sign=371d3bcb10e07dc5ba7894660896d81a&ava=1'}
                            alt={''}/>
                        <span className={s.name}>Stas</span>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default SubscribersBox;
