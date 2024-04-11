import React, { useEffect, useState } from 'react';
import bg from './assets/images/stars.jpg';
import planets from './assets/data';
import './background.css';
import { useParams } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ4O801k6pCZXvDxbblyUdjcMcoj8ocfE",
    authDomain: "solarsystemexplorer.firebaseapp.com",
    projectId: "solarsystemexplorer",
    storageBucket: "solarsystemexplorer.appspot.com",
    messagingSenderId: "67786755143",
    appId: "1:67786755143:web:398bb59ed11144fa5c3562"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default function Object() {
    const { planetName } = useParams();
    const planet = planets.find((planet) => planet.planet === planetName);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = firebase.firestore().collection('planets').doc('92hThamH0FdVZA8OHewS').collection(planetName).doc('3cJbvPR2UUdIBDwhzRss').collection('information');
                const snapshot = await collectionRef.get();
                const fetchedData = [];
                snapshot.forEach((doc) => {
                    fetchedData.push(doc.data());
                });
                setInfo(fetchedData);
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);


    console.log(info);

    return (
        // <div className='h-full w-full flex justify-center overflow-hidden' style={
        //     {
        //         background: `url(${bg})`,
        //         backgroundSize: 'cover',
        //         backgroundAttachment: 'fixed',
        //         backgroundRepeat: 'no-repeat',
        //         height: '100vh',
        //     }
        // }>
        //     <div className='max-w-[1400px] w-full h-full absolute flex gap-8 overflow-y-auto hide-scrollbar' style={{ height: '100vh' }}>
        //         <img src={planet.image} alt="" className='w-1/2 object-contain h-full my-auto' />
        //         <div className='w-1/2'>
        //             {info.map((data) => (
        //                 <div className='text-white font-serif mb-4'>
        //                     <p className='text-5xl'>{data['title']}</p>
        //                     <p className='text-2xl'>{data['content']}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
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
            <div className='max-w-[1400px] w-full h-full absolute overflow-y-auto hide-scrollbar pt-20' style={{ height: '100vh', zIndex: '1' }}>
                <h2 className='text-white text-5xl font-["Angora"] text-center mb-14'>{planetName}</h2>
                <div className='flex gap-8'>
                    <img src={planet.image} alt="" className='w-1/2 object-contain h-full my-auto' />
                    <div className='w-1/2'>
                        {info.map((data) => (
                            <div className='text-white font-serif mb-4' key={data.title}>
                                <p className='text-4xl font-bold'>{data.title}</p>
                                <p className='text-2xl'>{data.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );


}