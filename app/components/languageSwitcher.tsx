import { useState, useEffect } from "react";

const LanguageSwitcher = ({ initialLang = "en" }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="relative inline-flex border border-white rounded-2xl overflow-hidden cursor-pointer">
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-white rounded-2xl transition-transform duration-300 ${
          lang === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>

      <span
        className={`relative px-1 w-1/2 text-center ${
          lang === "fr" ? "text-black" : "text-white"
        }`}
        onClick={() => setLang("fr")}
      >
        FR
      </span>
      <span
        className={`relative px-1 w-1/2 text-center ${
          lang === "en" ? "text-black" : "text-white"
        }`}
        onClick={() => setLang("en")}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;
