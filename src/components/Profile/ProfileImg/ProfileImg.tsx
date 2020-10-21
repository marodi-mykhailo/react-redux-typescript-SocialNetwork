import React from 'react';
import s from './ProfileImg.module.css'
import {Paper} from "@material-ui/core";

const Photoczka = 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/61562943_165981037770760_3476157792246746001_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Icu-KFG-m8QAX9yI_sw&_nc_tp=18&oh=e6849b567eea0180601720555957da24&oe=5FBB673A'

const ProfileImg = (props: any) => {
    return (
        <div className={s.wrapper}>
            <Paper elevation={3} className={s.profileImg}>
                <img className={s.img}
                     src={props.large || Photoczka}
                     alt={''}/>
                <button className={s.profileImgBtn}>Edit</button>
            </Paper>
        </div>
    );
};

export default ProfileImg;
