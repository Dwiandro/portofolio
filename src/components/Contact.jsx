import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="mb-5 text-lg">
          Im always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <p className="mb-5 text-lg">
          You can reach me at{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-cyan-300 hover:text-cyan-500"
          >
            {CONTACT.email}
          </a>
          .
        </p>
        <p className="mb-5 text-lg">
          Or find me on{" "}
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-500"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-500"
          >
            Github
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
