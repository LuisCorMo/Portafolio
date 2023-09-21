const Links = ({ isShowModal, handleClickOnModal }) => {
  const handleClickOutside = (event) => {
    event.stopPropagation();
    handleClickOnModal();
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`fixed bg-black/50 top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
        isShowModal ? "visible" : "invisible"
      }`}
      onClick={handleClickOutside}
    >
      <section
        className="bg-gray-100 p-8 grid gap-4 rounded-lg dark:bg-dark-bg relative"
        onClick={handleClickInside}
      >
        <button
          className="absolute top-1 right-2 text-2xl"
          onClick={handleClickOnModal}
        >
          <i className="bx bx-x"></i>
        </button>
        <h2 className="text-2xl text-center">Links</h2>
        <ul className="text-xl text-gray-100 grid gap-4">
          <li className="rounded-full bg-pink-500">
            <a
              href="https://github.com/LuisCorMo/"
              className="flex gap-4 items-center px-[60px]"
            >
              <i className="bx bxl-github text-2xl"></i>
              Github
            </a>
          </li>
          <li className="rounded-full bg-pink-500">
            <a
              href="https://www.linkedin.com/in/luis-corona-morales-b58207291"
              className="flex gap-4 items-center px-[60px]"
            >
              <i className="bx bxl-linkedin text-2xl"></i>
              LinkedIn
            </a>
          </li>
          <li className="rounded-full bg-pink-500">
            <a
              href="mailto:luiscormo.96@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center px-[60px]"
            >
              <i className="bx bx-envelope text-2xl"></i>
              Email
            </a>
          </li>
          <li className="rounded-full bg-pink-500">
            <a
              href="/docs/CV_LuisCorona_Front-End.pdf"
              target="_blank"
              className="flex gap-4 items-center px-[60px]"
            >
              <i className="bx bxs-file-pdf text-2xl"></i>
              CV
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Links;
