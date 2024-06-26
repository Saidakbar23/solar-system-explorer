import React, { useEffect, useState } from 'react';
import bg from './assets/images/stars.jpg';
import planets from './assets/data';
import './background.css';
import { useParams } from 'react-router-dom';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default function Object() {
    const { planetName } = useParams();
    const planet = planets.find((planet) => planet.planet === planetName);
    const [info, setInfo] = useState([]);
    const [images, setImages] = useState([]);
    const [imageNumber, setImageNumber] = useState(-1);

    const planetID = {
        'sun': process.env.REACT_APP_SUN,
        'mercury': process.env.REACT_APP_MERCURY,
        'venus': process.env.REACT_APP_VENUS,
        'earth': process.env.REACT_APP_EARTH,
        'mars': process.env.REACT_APP_MARS,
        'jupiter': process.env.REACT_APP_JUPITER,
        'saturn': process.env.REACT_APP_SATURN,
        'uranus': process.env.REACT_APP_URANUS,
        'neptune': process.env.REACT_APP_NEPTUNE,
    };

    useEffect(() => {
        fetchData('information');

    }, []);

    useEffect(() => {
        fetchData('images');
    }, []);

    const fetchData = async (lastCollection) => {
        try {
            const collectionRef = firebase.firestore().collection('planets').doc('92hThamH0FdVZA8OHewS').collection(planetName).doc(planetID[planetName]).collection(lastCollection);
            const snapshot = await collectionRef.get();
            const fetchedData = [];
            snapshot.forEach((doc) => {
                fetchedData.push(doc.data());
            });
            if (lastCollection === 'information') {
                setInfo(fetchedData);
            } else {
                fetchedData.map((data) => {
                    if (images.some(image => image.src === data['image'])) {
                        return;
                    }
                    images.push({ src: data['image'] });
                });
            }

        } catch (error) {
            console.log('Error fetching data: ', error);
        }
    };

    return (
        <div className='h-full w-full flex justify-center overflow-hidden relative' style={{
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
            <div className='px-10 sm:px-24 md:px-36 w-full h-full absolute overflow-y-auto hide-scrollbar pt-20' style={{ height: '100vh', zIndex: '1' }}>
                <h2 className='text-white text-5xl font-["Angora"] text-center mb-14'>{planetName}</h2>
                <div className='flex justify-between flex-col md:flex-row items-center md:items-start'>
                    <img src={planet.image} alt="" className='w-1/2 object-contain h-full md:sticky top-0 z-10' />
                    <div className='w-3/4 md:w-1/2 flex flex-col justify-end'>
                        {info.map((data) => (
                            <div className='text-white font-serif mb-4' key={data.title}>
                                <p className='text-3xl lg:text-4xl md:text-2xl font-bold'>{data.title}</p>
                                <p className='text-xl lg:text-2xl md:text-xl'>{data.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='text-white text-5xl font-["Angora"] text-center my-20 '>Images</h2>

                    <div className='grid grid-cols-auto gap-4'>
                        {images.map((image, index) => {
                            return (
                                <div className='h-80 w-full cursor-pointer' key={index}>
                                    <img className='h-full w-full object-cover rounded-xl' onClick={() => setImageNumber(index)} src={image['src']} />
                                </div>
                            )
                        })}
                    </div>

                    <Lightbox plugins={[Zoom, Thumbnails]} index={imageNumber} slides={images} open={imageNumber >= 0} close={() => setImageNumber(-1)} />

                </div>
                <div className=' h-screen'>
                    <iframe src={`https://eyes.nasa.gov/apps/solar-system/#/${planetName}`} className=' w-full h-full py-20'></iframe>
                </div>

                <div className='flex justify-center py-10'>
                    <p className='text-gray-600 text-md font-serif'>All images and data are provided by NASA</p>
                </div>

            </div>
        </div>
    );


}