import { useState } from "react";
import About from "./About";
import { textEn, textEs } from "../../utils/texto";

const Feed = ({ isChangeLanguaje }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="mx-4 mt-4 bg-white p-2 text-gray-900 dark:text-gray-200 darkTheme">
      <article className="grid grid-cols-[auto_1fr] gap-1 rounded-lg p-4 hover:bg-gray-200/80 dark:hover:bg-dark-bg/50">
        <div className="text-end">
          <i className="bx bxs-pin text-sm"></i>
        </div>
        <div>
          <p className="text-gray-500/60 text-sm mx-2">
            {isChangeLanguaje ? textEn.feed[0] : textEs.feed[0]}
          </p>
        </div>
        <div>
          <img
            className="w-[40px] aspect-square rounded-full"
            src="/images/perfil1.jpeg"
            alt=""
          />
        </div>
        <div className="grid gap-y-1">
          <div className="flex gap-x-1 text-sm mx-2">
            <h6 className="font-medium">Luis Corona</h6>
            <span className="text-gray-500">•</span>
            <time className="text-gray-500">7 Feb 2023</time>
          </div>
          <span className="text-sm mx-4 font-medium">
            {isChangeLanguaje ? textEn.feed[1] : textEs.feed[1]}
          </span>
          <div
            className={`overflow-hidden ${
              isExpanded ? "" : "line-clamp-3 max-h-[120px]"
            }`}
          >
            <About isChangeLanguaje={isChangeLanguaje} />
          </div>
          <button
            type="button"
            onClick={handleReadMoreClick}
            className="text-pink-500"
          >
            {isExpanded ? "Leer menos" : "Leer más ..."}
          </button>
        </div>
      </article>
      <div className="bg-gray-200 w-full h-[1px]"></div>
      <article className="grid grid-cols-[auto_1fr] gap-1 rounded-lg p-4 hover:bg-gray-200/80 dark:hover:bg-dark-bg/50">
        <div>
          <img
            className="w-[40px] aspect-square rounded-full"
            src="/images/perfil1.jpeg"
            alt=""
          />
        </div>
        <div className="grid gap-y-1">
          <div className="flex gap-x-1 text-sm mx-2">
            <h6 className="font-medium">Luis Corona</h6>
            <span className="text-gray-500">•</span>
            <time className="text-gray-500">15 Oct 2023</time>
          </div>
          <span className="text-sm mx-4 font-medium">
            {isChangeLanguaje ? textEn.feed[2] : textEs.feed[2]} 👨‍💻
          </span>
          <div className="m-4">
            <a
              target="_blank"
              href="https://charming-genie-be5844.netlify.app/pokedex"
            >
              <img className="rounded-lg" src="/images/pj3.jpeg" alt="" />
              <h5 className="font-semibold mt-2">Pokedex App</h5>
              <p>React / Js / tailwind</p>
            </a>
          </div>
        </div>
      </article>
      <div className="bg-gray-200 w-full h-[1px]"></div>
      <article className="grid grid-cols-[auto_1fr] gap-1 rounded-lg p-4 hover:bg-gray-200/80 dark:hover:bg-dark-bg/50">
        <div>
          <img
            className="w-[40px] aspect-square rounded-full"
            src="/images/perfil1.jpeg"
            alt=""
          />
        </div>
        <div className="grid gap-y-1">
          <div className="flex gap-x-1 text-sm mx-2">
            <h6 className="font-medium">Luis Corona</h6>
            <span className="text-gray-500">•</span>
            <time className="text-gray-500">13 Sep 2023</time>
          </div>
          <span className="text-sm mx-4 font-medium">
            {isChangeLanguaje ? textEn.feed[3] : textEs.feed[3]} 🤓
          </span>
          <div className="m-4">
            <section>
              <img
                className="rounded-lg"
                src="/images/certificado.jpeg"
                alt=""
              />
            </section>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Feed;
