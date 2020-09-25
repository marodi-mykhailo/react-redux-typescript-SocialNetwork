import React from 'react';
import preloader from '../assets/images/preloader.svg'

type PreloaderType = {
    isFetching: boolean
}

const Preloader = (props:PreloaderType) => {
    return (
        <div>
            {props.isFetching && <img src={preloader} alt={''}/>}
        </div>
    );
};

export default Preloader;
