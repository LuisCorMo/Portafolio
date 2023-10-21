import { textEn, textEs } from "../../utils/texto";

const Projects = ({ isChangeLanguaje }) => {
  return (
    <section className="bg-white mx-4 mt-4 p-4 text-gray-900 dark:text-gray-200 darkTheme sm:p-4">
      <div>
        <p className="font-semibold">
          {isChangeLanguaje ? textEn.pj : textEs.pj}
        </p>
      </div>
      <section className="grid justify-center items-center mt-4 text-justify gap-6 sm:grid-cols-2">
        <a target="_blank" href="https://weathe-app-react-pj2.netlify.app/" className="hover:bg-gray-200/80 dark:hover:bg-dark-bg/50 px-1 rounded-lg">
          <img
            className="rounded-lg h-[200px] w-[310px] sm:h-[170px]"
            src="/images/pj1.jpeg"
            alt=""
          />
          <h5 className="font-semibold">WeatherApp</h5>
          <p>React / Js / tailwind</p>
        </a>

        <a target="_blank" href="https://stately-kangaroo-87c0c3.netlify.app/" className="hover:bg-gray-200/80 dark:hover:bg-dark-bg/50 px-1 rounded-lg">
          <img
            className="rounded-lg h-[200px] w-[310px] sm:h-[170px]"
            src="/images/pj2.jpeg"
            alt=""
          />
          <h5 className="font-semibold">Rick & Morty App</h5>
          <p>React / Js / tailwind</p>
        </a>

        <a
          target="_blank"
          href="https://charming-genie-be5844.netlify.app/" className="hover:bg-gray-200/80 dark:hover:bg-dark-bg/50 px-1 rounded-lg"
        >
          <img
            className="rounded-lg h-[200px] w-[310px] sm:h-[170px]"
            src="/images/pj3.jpeg"
            alt=""
          />
          <h5 className="font-semibold">Pokedex App</h5>
          <p>React / Js / tailwind</p>
        </a>

        <a target="_blank" href="" className="hover:bg-gray-200/80 dark:hover:bg-dark-bg/50 px-1 rounded-lg">
          <img className="rounded-lg h-[200px] w-[310px] sm:h-[170px]" src="/images/proximamente.jpg" alt="" />
          <h5 className="font-semibold">H.P Quizz App</h5>
          <p>React / Js / tailwind</p>
        </a>
      </section>
    </section>
  );
};
export default Projects;
