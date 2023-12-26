import React, { useEffect, useState } from 'react'

const PreviewImage = ({ imgsrc, imgalt, angle }) => {

    const [currentAngle, setCurrentAngle] = useState(angle);
    const angleItem = [-90, 0, 45];

    useEffect(() => {
        let ang = 0;
        if (angle !== currentAngle) {
            setCurrentAngle(angle)
        }
        else {
            const intervalId = setInterval(() => {
                setCurrentAngle(angleItem[ang]);
                ang = ang === 2 ? 0 : ang + 1;
                return () => clearInterval(intervalId);
            }, 2000)
        }
    }, [angle])
console.log(currentAngle);
    return (
        <img src={imgsrc} alt={imgalt} style={{ transform: `rotate(${currentAngle}deg)`,  mixBlendMode:'multiply',borderRadius:'20px' }} height={150} width={150} />
    )
}

export default PreviewImage