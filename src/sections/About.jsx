import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import IconGlobe from '../components/Globe.jsx';
import Button from '../components/Button.jsx';
import CodeWindow from '../components/CodeWindow.jsx';
import { code } from '../constants/index.js';
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [hoverLabel, setHoverLabel] = useState(null);
  const handleCopy = () => {
    navigator.clipboard.writeText(' aneek.guha9051@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const markers = [
    {
      lat: 28.4211,
      lng: 77.3078,
      name: 'Aagman Society, Faridabad, Haryana, India',
      color: '#00ff88', // bright green
      size: 1.2,
    },
  ];

  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    const globe = globeEl.current;
    if (!globe) return;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.8;
    globeEl.current.controls().enableZoom = false;
    globe.pointOfView(
      { lat: 28.4211, lng: 77.3078, altitude: 1.4 }, // Faridabad, India
      3000, // animation duration (ms)
    );
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container ">
            <img
              src="assets/profile.jpg"
              alt="grid-1"
              className="w-[200px] h-[200px] object-cover rounded-full mt-[60px] mx-auto"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Aneek</p>
              <p className="grid-subtext">
                Driven by curiosity and creativity, I build scalable full-stack applications that unite elegant design
                with powerful engineering to deliver impactful digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <IconGlobe className="w-full sm:h-[500px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="relative rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={300}
                width={300}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // 🔹 Point markers
                pointsData={markers}
                pointAltitude={0.02}
                pointColor={(point) => point.color}
                pointRadius={(point) => point.size}
                pointLabel={(point) => `${point.name}`}
                // 🔹 Tooltip on hover
                onPointHover={setHoverLabel}
              />

              {/* Tooltip Display */}
              {hoverLabel && (
                <div className="absolute bottom-10 bg-black bg-opacity-70 px-3 py-1 rounded-lg text-green-400 text-sm pointer-events-none transition-all duration-300">
                  {hoverLabel.name}
                </div>
              )}
            </div>

            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Faridabad, India and open to remote work worldwide.</p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
                onClick={() => {
                  const el = document.getElementById('contact');
                  const offset = el.getBoundingClientRect().top + window.scrollY - 80; // adjust 80px if navbar height
                  window.scrollTo({ top: offset, behavior: 'smooth' });
                }}
              />
              <Button
                name="My Resume"
                isBeam
                containerClass="w-full mt-5"
                onClick={() => window.open('/assets/Aneek-Guha-2025.pdf', '_blank')}
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <CodeWindow code={code} />
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  aneek.guha9051@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
