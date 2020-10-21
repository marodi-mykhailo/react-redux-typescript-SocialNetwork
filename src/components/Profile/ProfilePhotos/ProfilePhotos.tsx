import React from 'react';
import s from "./ProfilePhotos.module.css"
import {Paper} from "@material-ui/core";

const ProfilePhotos = () => {
    return (
        <div className={s.profilePhotos}>
        <Paper elevation={3} className={s.wrapper}>
            <div className={s.head}>Misha's photos <span>11</span></div>
            <div className={s.box}>
                <img src={'https://sun9-17.userapi.com/c855524/v855524504/3fe3f/NoXaQxGgAL0.jpg'} alt={''}/>
                <img src={'https://sun9-17.userapi.com/c855524/v855524504/3fe3f/NoXaQxGgAL0.jpg'} alt={''}/>
                <img src={'https://sun9-17.userapi.com/c855524/v855524504/3fe3f/NoXaQxGgAL0.jpg'} alt={''}/>
                <img src={'https://sun9-17.userapi.com/c855524/v855524504/3fe3f/NoXaQxGgAL0.jpg'} alt={''}/>
            </div>
        </Paper>
        </div>
    );
};

export default ProfilePhotos;
