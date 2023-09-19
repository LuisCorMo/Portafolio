import { textEn, textEs } from "../../utils/texto";

const About = ({ isChangeLanguaje }) => {
  return (
    <section className="mx-4 mt-4 p-8 text-gray-900 dark:text-gray-200 bg-white darkTheme">
      <div>
        <h1 className="text-lg font-bold">
          {isChangeLanguaje ? textEn.about[0] : textEs.about[0]} 👋
        </h1>
        <p className="p-1 mt-2 font-medium">
          {isChangeLanguaje ? textEn.about[1] : textEs.about[1]}
        </p>
      </div>
    </section>
  );
};
export default About;
