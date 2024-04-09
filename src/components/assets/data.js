import sun from './images/sun.png';
import mercury from './images/mercury.png';
import venus from './images/venus.png';
import earth from './images/earth.png';
import mars from './images/mars.png';
import jupiter from './images/jupiter.png';
import saturn from './images/saturn.png';
import uranus from './images/uranus.png';
import neptune from './images/neptune.png';

let planets = [
    {
        id: 1,
        planet: 'sun',
        image: sun,
        description: 'Our Sun is a 4.5 billion-year-old yellow dwarf star – a hot glowing ball of hydrogen and helium – at the center of our solar system. It’s about 93 million miles (150 million kilometers) from Earth and it’s our solar system’s only star. Without the Sun’s energy, life as we know it could not exist on our home planet.',
    },
    {
        id: 2,
        planet: 'mercury',
        image: mercury,
        description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.',
    },
    {
        id: 3,
        planet: 'venus',
        image: venus,
        description: 'Venus is the second planet from the Sun, and our closest planetary neighbor. It\'s the hottest planet in our solar system, and is sometimes called Earth\'s twin.',
    },
    {
        id: 4,
        planet: 'earth',
        image: earth,
        description: 'Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It\'s the only place we know of inhabited by living things.',
    },
    {
        id: 5,
        planet: 'mars',
        image: mars,
        description: 'Mars – the fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather.',
    },
    {
        id: 6,
        planet: 'jupiter',
        image: jupiter,
        description: 'Jupiter is a world of extremes. It\'s the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It\'s also the oldest planet, forming from the dust and gases left over from the Sun\'s formation 4.5 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis.',
    },
    {
        id: 7,
        planet: 'saturn',
        image: saturn,
        description: 'Saturn is the sixth planet from the Sun, and the second-largest planet in our solar system.',
    },
    {
        id: 8,
        planet: 'uranus',
        image: uranus,
        description: 'Uranus is the seventh planet from the Sun, and it has the third largest diameter of planets in our solar system. Uranus appears to spin sideways.',
    },
    {
        id: 9,
        planet: 'neptune',
        image: neptune,
        description: 'Neptune is the eighth and most distant planet in our solar system.',
    },
];

export default planets;