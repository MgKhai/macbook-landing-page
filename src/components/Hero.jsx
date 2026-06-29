import { useEffect, useRef } from "react";
const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div className="flex flex-col justify-content-center items-center mt-15">
        <div className="text-white">
          <h1 className="text-4xl font-semibold text-center mb-2">
            MacBook Pro
          </h1>
          <img src="/title.png" alt="MacBook Title" width={650} />
        </div>
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          playsInline
          width={1200}
        />
        <button class="bg-blue-600 text-white  py-1 px-4 rounded-full">
          Buy
        </button>
        <p className="text-gray-500 mt-3">
          From $1599 or $133/mo for 12 months
        </p>
      </div>
    </section>
  );
};
export default Hero;
