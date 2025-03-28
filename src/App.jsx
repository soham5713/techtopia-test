import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check device type on component mount
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768); // Typical mobile breakpoint
    };

    // Initial check
    checkDeviceType();

    // Add event listener to handle resizing
    window.addEventListener('resize', checkDeviceType);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return (
    <div
      className='h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url('./pink-clouds-background.webp')`
      }}
    >
      {isMobile ? (
        <Spline
          scene="https://prod.spline.design/JicyBDF54FEmvzwO/scene.splinecode"
          width={428}
          height={926}
        />
      ) : (
        <Spline scene="https://prod.spline.design/ERrreC0H9Vvwhpq6/scene.splinecode" />
      )}
    </div>
  );
}