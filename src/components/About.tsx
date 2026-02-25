import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:pb-24">
      <div className="my-10 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-52 lg:w-96"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex  justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify text-sm lg:text-base ">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
