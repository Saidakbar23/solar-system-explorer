import React, { useEffect } from 'react';
import bg from './assets/images/stars.jpg';
import planets from './assets/data';
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
    const [planetIndex, setPlanetIndex] = React.useState(0);

    function showPrevImage() {
        setPlanetIndex((prevIndex) => {
            if (prevIndex === 0) {
                return planets.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    function showNextImage() {
        setPlanetIndex((prevIndex) => {
            if (prevIndex === planets.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }

    useEffect(() => {
        const planetName = localStorage.getItem('planetName');
        console.log(planetName);
        if (planetName) {
            const planet = planets.find((planet) => planet.planet === planetName);
            setPlanetIndex(planets.indexOf(planet));
            localStorage.removeItem('planetName');
        }
    }, [localStorage]);

    return (
        <div className='h-full w-full flex items-center justify-center overflow-hidden relative' style={{
            height: '100vh',
        }}>
            {/* <img src={bg} className='object-cover brightness-50' /> */}
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
            <div className='max-w-[1400px] w-full h-full absolute ' style={{ height: '100vh', zIndex: '1' }}>
                <div className='relative h-screen'>
                    <div className='h-full w-full flex overflow-hidden'>
                        {planets.map((planet) => (
                            <div key={planet.id} id={planet.id} className='w-full h-screen flex flex-col flex-shrink-0 justify-center items-center mt-48'>
                                <div className='w-2/3 flex flex-col items-center gap-4 mt-32'>
                                    <h2 className='text-white text-5xl font-["Angora"]'>{planets[planetIndex].planet}</h2>
                                    <p className='text-white text-2xl text-center font-thin'>{planets[planetIndex].description}</p>
                                    <Link to={`/object/${planets[planetIndex].planet}`}>
                                        <button onClick={
                                            () => localStorage.setItem('planetName', planets[planetIndex].planet)
                                        } className='bg-white px-10 py-2 mt-10 text-xl rounded-3xl'>Learn More</button>
                                    </Link>

                                </div>
                                <img src={planet.image} className='object-fill w-full h-full block shrink-0 grow-0 transition-[translate] ease-in-out delay-400 translate-y-1/4' style={{ translate: `${-100 * planetIndex}%` }} alt="" />
                            </div>
                        ))}
                    </div>
                    <button onClick={showPrevImage} className='block absolute top-0 bottom-0 p-5 cursor-pointer left-0 hover:bg-white/10 transition ease-in-out delay-100'>
                        <ArrowBigLeft className='stroke-white fill-white w-10 h-10' />
                    </button>
                    <button onClick={showNextImage} className='block absolute top-0 bottom-0 p-5 cursor-pointer right-0 hover:bg-white/10 transition ease-in-out delay-100'>
                        <ArrowBigRight className='stroke-white fill-white w-10 h-10' />
                    </button>
                    <div className='absolute bottom-2 left-1/2 -translate-x-1/2 gap-2 flex'>
                        {planets.map((_, index) => (
                            <button className='block cursor-pointer w-6 h-6' key={index} onClick={() => setPlanetIndex(index)}>
                                {index === planetIndex ? <CircleDot className='stroke-white fill-black h-full w-full' /> : <Circle className='stroke-white fill-black h-full w-full' />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}