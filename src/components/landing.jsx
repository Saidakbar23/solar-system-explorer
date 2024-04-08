import React from 'react';
import bg from './assets/images/stars.jpg';
import sun from './assets/images/sun.png';
import mercury from './assets/images/mercury.png';
import venus from './assets/images/venus.png';
import earth from './assets/images/earth.png';
import mars from './assets/images/mars.png';
import jupiter from './assets/images/jupiter.png';
import saturn from './assets/images/saturn.png';
import uranus from './assets/images/uranus.png';
import neptune from './assets/images/neptune.png';

export default function Landing() {
    return (
        <div className='bg-black h-screen flex items-center'>
            <div className='flex'>
                <div>
                    <img src={sun} alt="" />
                    <p className='text-white'>SUN</p>
                </div>
                <div>
                    <img src={mercury} alt="" />
                </div>
                <div>
                    <img src={venus} alt="" />
                </div>
                <div>
                    <img src={earth} alt="" />
                </div>
                <div>
                    <img src={mars} alt="" />
                </div>
                <div>
                    <img src={jupiter} alt="" />
                </div>
                <div>
                    <img src={saturn} alt="" />
                </div>
                <div>
                    <img src={uranus} alt="" />
                </div>
                <div>
                    <img src={neptune} alt="" />
                </div>
            </div>
        </div>
    );
}