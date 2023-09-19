import { useEffect, useState } from "react";
import { textEn, textEs } from "../../utils/texto";

const Footer = ({ handleChangeLanguaje, isChangeLanguaje }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <section>
      <div className="h-[60px] w-screen bg-gray-200/50 flex justify-between items-center px-4 shadow-2xl darkTheme fixed top-0">
        <div className="flex gap-2 items-center">
          <button className="w-8 aspect-square" onClick={handleChangeLanguaje}>
            {isDarkTheme ? (
              <>
                <img src="/images/translateA.png" alt="" />
              </>
            ) : (
              <img src="/images/translateB.png" alt="" />
            )}
          </button>
          <div className="font-semibold darkTheme">
            {isChangeLanguaje ? textEn.footer : textEs.footer}
          </div>
        </div>

        <button onClick={handleChangeTheme} className="w-10 aspect-square">
          {isDarkTheme ? (
            <i className="bx bxs-moon text-xl"></i>
          ) : (
            <i className="bx bxs-sun text-xl"></i>
          )}
        </button>
      </div>
    </section>
  );
};
export default Footer;
