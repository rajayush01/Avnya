const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-5">
        <p className="text-sm sm:text-base">
          &copy; 2024 AVNYA Smart Builds. All rights reserved.
        </p>
        <p className="mt-2 text-sm sm:text-base">www.avnyasmartbuilds.in</p>
      </div>
      <div className="border-t border-gray-400 mx-4 sm:mx-8 lg:mx-96"></div>
      <div className="pb-4 text-center text-gray-400 mt-5">
        <p className="text-sm md:text-lg flex items-center justify-center">
          Built with ❤️ by{" "}
          <a
            href="https://elite8digital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center ml-1"
          >
            Elite8 Digital
            <img
              src="/elite8digital-nav.png"
              alt="Elite8 Digital Logo"
              className="h-10 md:h-12 ml-2"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
