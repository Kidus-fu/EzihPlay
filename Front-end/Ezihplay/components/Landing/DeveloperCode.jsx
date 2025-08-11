import PDF from "../../public/Ezihplay presentation.pdf"

const DeveloperCode = () => {
  return (
    <section className="px-4 py-20 w-full flex justify-center bg-gray-200 ">
      <div className="bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:shadow-xl rounded-lg overflow-hidden shadow-lg">
        
        {/* Left: Image */}
        <div className="lg:w-1/2">
          <div
            className="h-80 lg:h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
            }}
          ></div>
        </div>

        {/* Right: Content */}
        <div className="py-10 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 className="text-3xl font-bold text-white">
            Open-Source Project by{" "}
            <span className="text-orange-500">Our Developer Team</span>
          </h2>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            This project is a collaborative effort by our talented developers, designed to make coding more accessible, 
            efficient, and enjoyable. With modern tools like React, Django, and TailwindCSS, we’ve built an innovative 
            platform that helps developers share, contribute, and grow together.
          </p>

          <p className="mt-3 text-gray-400 text-sm">
            Explore the source code, contribute to features, or fork the repo to make your own version.
          </p>

          {/* GitHub Link */}
          <div className="mt-8 gap-2">
            <a
              href="https://github.com/Kidus-fu/EzihPlay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 font-semibold rounded shadow-lg transition"
            >
              View on GitHub
            </a>
            <a
              href={PDF}
              download={'Ezihplay presentation.pdf'}
              rel="noopener noreferrer"
              
              className="cursor-pointer bg-orange-500 ms-2 hover:bg-orange-600 text-black px-6 py-3 font-semibold rounded shadow-lg transition"
            >
              Download Pdf 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCode;
