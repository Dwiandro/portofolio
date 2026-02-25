import { HERO_CONTENT } from "../constants";
import profilPic from "../assets/profil.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-16 lg:mb-35 ">
      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="py-4 lg:pb-8 text-xl font-normal tracking-widest lg:tracking-wider lg:mt-16 lg:text-[2.2rem] text-center lg:text-left">
              Muhammad Afdhal Hanif Dwiandro
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-wide lg:tracking-tight text-transparent">
              Frontend Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-center lg:text-justify text-sm lg:text-xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mb-5 mt-0 lg:mt-10">
          <div className="flex justify-center">
            <img
              className="w-52 lg:w-80 rounded-md shadow-lg shadow-cyan-500/80 hover:scale-105 transition-transform duration-300 ease-in-out"
              srcSet={`${profilPic} 2x`}
              src={profilPic}
              alt="profilPic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
