const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between gap-5 px-6 bg-[#08091b]">
      {/* Left side - Terms & Privacy */}
      <div className="flex items-center gap-3 text-gray-400 text-sm">
        <a href="/terms" className="hover:text-white transition-colors">
          Terms & Conditions
        </a>
        <span className="text-gray-600">|</span>
        <a href="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
      </div>

      {/* Center - Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/aneekguha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-[#000000] transition-all hover:scale-110"
        >
          <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5 invert" />
        </a>

        <a
          href="https://x.com/aneekguha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1DA1F2] transition-all hover:scale-110"
        >
          <img src="/assets/linkedin.svg" alt="Twitter" className="w-5 h-5 invert" />
        </a>

        <a
          href="https://instagram.com/why_always.aneee/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E4405F] transition-all hover:scale-110"
        >
          <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5 invert" />
        </a>
      </div>

      {/* Right side - Copyright */}
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Aneek Kumar Guha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
