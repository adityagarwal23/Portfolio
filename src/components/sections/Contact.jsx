import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-white text-lg mb-4">
            Feel free to reach out to me at{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              adityagarwal05@gmail.com
            </a>
          </p>
          <a
            href="../Resume_Aditya_Agarwal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:bg-blue-600"
          >
            View My Resume
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
