import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import { textEn, textEs } from "./utils/texto";
import Content from "./components/Content";

function App() {
  const [isChangeLanguaje, setIsChangeLanguaje] = useState(false);

  const handleChangeLanguaje = () => {
    setIsChangeLanguaje(!isChangeLanguaje);
  };

  useEffect(() => {
    isChangeLanguaje ? textEn : textEs;
  });

  return (
    <section className="bg-gray-100 dark:bg-dark-bg min-h-screen transition-colors dark:text-gray-200 m-auto">
      <Footer
        handleChangeLanguaje={handleChangeLanguaje}
        isChangeLanguaje={isChangeLanguaje}
      />
      <article className="min-w-[360px] pt-[60px]">
        <section className="flex justify-center items-center m-auto h-auto sm:w-[620px] sm:h-[300px]">
          <img
            className="sm:w-[620px] sm:h-[300px]"
            src="/images/bgportada.jpg"
            alt=""
          />
        </section>
        <section className="relative p-4 h-14 sm:w-[620px] m-auto">
          <img
            className="border-[4px] border-black w-[100px] aspect-square rounded-full absolute -top-[90%] left-4"
            src="/images/perfil1.jpeg"
            alt=""
          />
          <a
            target="_blank"
            className="bg-pink-500 p-2 px-3 absolute rounded-full top-3 right-8 text-white font-semibold"
            href="https://www.linkedin.com/in/luis-corona-morales-b58207291"
          >
            {isChangeLanguaje ? textEn.btnIn : textEs.btnIn}
            <i className="bx bxl-linkedin px-1"></i>
          </a>
        </section>
        <section className="sm:w-[620px] m-auto text-gray-900 dark:text-gray-200">
          <div className="mt-2 mx-4">
            <h1 className="text-3xl font-bold">Luis Corona</h1>
            <h6 className="font-normal">
              "{isChangeLanguaje ? textEn.phrase : textEs.phrase}"
            </h6>
            <p className="mt-4">
              {isChangeLanguaje ? textEn.summary : textEs.summary}
            </p>
          </div>
          <ul className="flex flex-row flex-wrap gap-2 m-4">
            <li className="font-semibold text-sm">
              <i className="bx bxs-briefcase-alt"></i>{" "}
              {isChangeLanguaje ? textEn.info[0] : textEs.info[0]}
            </li>
            <li className="font-semibold text-sm text-pink-500">
              <i className="bx bx-link-alt"></i> /links
            </li>
            <li className="font-semibold text-sm">
              <i className="bx bxs-cake"></i>{" "}
              {isChangeLanguaje ? textEn.info[1] : textEs.info[1]}
            </li>
            <li className="font-semibold text-sm">
              <i className="bx bx-calendar"></i>{" "}
              {isChangeLanguaje ? textEn.info[2] : textEs.info[2]}
            </li>
          </ul>
        </section>
      </article>
      <Content isChangeLanguaje={isChangeLanguaje} />
      <section className="mt-4 pb-5">
        <ul className="flex justify-center items-center gap-5 text-2xl">
          <li className="rounded-full bg-pink-500 w-[32px] aspect-square text-center">
            <a href="https://github.com/LuisCorMo/">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="rounded-full bg-pink-500 w-[32px] aspect-square text-center">
            <a href="https://www.linkedin.com/in/luis-corona-morales-b58207291">
              <i className="bx bxl-linkedin px-1"></i>
            </a>
          </li>
          <li className="rounded-full bg-pink-500 w-[32px] aspect-square text-center">
            <a
              href="mailto:luiscormo.96@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-envelope"></i>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default App;
