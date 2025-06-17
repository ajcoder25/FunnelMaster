"use client";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-12 px-4 bg-[#020203] border-t border-[#28244a]/70">
      <h2
        style={{
          fontFamily: 'Cal Sans, sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          color: 'rgb(224,224,224)',
          fontSize: '36px',
          lineHeight: '54px',
        }}
        className="mb-2 text-center"
      >
        Questions? Reach Out
      </h2>
      <p className="text-base mb-6 text-[#e0e0e0] text-center">
        You can contact us at <a href="mailto:ajcoder25@gmail.com" className="text-yellow-300 underline">ajcoder25@gmail.com</a> for any questions.
      </p>
      <a
        href="mailto:ajcoder25@gmail.com"
        className="group mb-6 px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold shadow-lg border-none outline-none transition-transform transform hover:scale-105 focus:ring-2 focus:ring-purple-400 text-center inline-block"
        role="button"
        tabIndex={0}
        aria-label="Email Us"
      >
        EMAIL US
      </a>
      <div className="flex gap-4 mt-2">
        <a href="https://x.com/ajcoder25" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          {/* X (Twitter) SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#e0e0e0] hover:text-[#6d5dfc] transition-colors">
            <path d="M17.53 6.47a.75.75 0 0 1 1.06 1.06l-4.72 4.72 4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72-4.72-4.72A.75.75 0 0 1 7.81 5.41l4.72 4.72 4.72-4.72a.75.75 0 0 1 1.06 1.06z" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/ajay-kumar-yadav-a6b424263/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {/* LinkedIn SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#e0e0e0] hover:text-[#6d5dfc] transition-colors">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.83-1.54 3.03 0 3.59 1.99 3.59 4.58v5.6z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
