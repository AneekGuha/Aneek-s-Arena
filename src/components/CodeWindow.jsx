import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "./ui/tomorrow.css";

export default function CodeWindow({ code }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="gradient-border">
      <div className="code-window bg-[#091121] rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="window-header flex items-center gap-2 px-4 py-2 border-b border-gray-700/40 bg-[#0d1424]">
          <div className="flex gap-2">
            <div className="window-dot bg-red-500 w-3 h-3 rounded-full"></div>
            <div className="window-dot bg-yellow-500 w-3 h-3 rounded-full"></div>
            <div className="window-dot bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
          <span className="ml-3 text-sm text-gray-400 flex items-center gap-2">
            <i className="fas fa-code"></i> developer.js
          </span>
        </div>

        {/* Code Block */}
        <pre className="language-javascript overflow-x-auto px-6 py-6 text-sm sm:text-base">
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  );
}
