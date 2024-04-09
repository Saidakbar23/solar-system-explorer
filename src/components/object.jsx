import React, { useState } from 'react';
import bg from './assets/images/stars.jpg';
import planets from './assets/data';
import { useParams } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function Object() {
    const { planetName } = useParams();
    const planet = planets.find((planet) => planet.planet === planetName);
    const [info, setInfo] = useState([]);

    window.addEventListener('load', () => {
        fetchData();
    });

    const fetchData = async () => {
        // db.collection('planets').get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         setInfo(doc.data());
        //     });
        // });
        db.collection('planets').doc('92hThamH0FdVZA8OHewS').collection(planetName).doc('3cJbvPR2UUdIBDwhzRss').collection('information').get().then((querySnapshot) => {
            if (querySnapshot.exists) {
                console.log(querySnapshot.data());
            } else {
                console.log('No such document!');
            }
            // querySnapshot.forEach((doc) => {
            //     setInfo(doc.data());
            // });
        });
    };
    fetchData();
    console.log(info);

    return (
        <div className='bg-black h-screen w-screen flex items-center justify-center relative'>
            <img src={bg} className='object-cover brightness-50' alt="" />
            <div className='max-w-[1400px] w-full absolute bg-white flex'>
                <img src={planet.image} alt="" className='w-1/2' />
                <div className='w-1/2'>{planet.planet}</div>
            </div>
        </div>
    )
}