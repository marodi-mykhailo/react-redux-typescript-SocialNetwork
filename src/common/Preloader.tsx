import React from 'react';
import preloader from '../assets/images/preloader.svg'

type PreloaderType = {

}

const Preloader = (props:PreloaderType) => {
    return (
        <div>
            <img src={preloader} alt={''}/>
        </div>
    );
};

export default Preloader;
