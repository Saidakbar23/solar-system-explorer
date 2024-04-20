import React, { useEffect, useState } from 'react'
import bg from './assets/images/stars.jpg';

export const Apod = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [explanation, setExplanation] = useState('');

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title);
                setImage(data.url);
                setExplanation(data.explanation);
            })
    }, []);

    return (
        <div className='h-full w-full flex items-center justify-center overflow-hidden relative' style={{
            height: '100vh',
        }}>
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.6)',
                    zIndex: '-1',
                    opacity: '1',
                }}
            />
            <div className='max-w-[1400px] w-full h-full absolute overflow-y-auto hide-scrollbar' style={{ height: '100vh', zIndex: '1' }}>
                <div className='relative h-screen'>
                    <div className='flex flex-col items-center justify-center w-full py-20 text-white'>
                        <h1 className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-["Angora"] '>{title}</h1>
                        <img src={image} alt={title} className=' w-3/4 lg:w-1/2 my-10 object-cover' />
                        <p className='text-xl lg:text-2xl md:text-xl font-serif mx-10'>{explanation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
