import { useState } from "react";
import About from "./Body/About";
import Contact from "./Body/Contact";
import Feed from "./Body/Feed";
import Projects from "./Body/Projects";

const Content = ({ isChangeLanguaje }) => {
  const [activeTab, setActiveTab] = useState("About");

  const renderTab = () => {
    switch (activeTab) {
      case "About":
        return <About isChangeLanguaje={isChangeLanguaje} />;
      case "Feed":
        return <Feed isChangeLanguaje={isChangeLanguaje} />;
      case "Projects":
        return <Projects isChangeLanguaje={isChangeLanguaje} />;
      case "Contact":
        return <Contact isChangeLanguaje={isChangeLanguaje} />;
      default:
        return <About />;
    }
  };

  return (
    <main className="sm:w-[620px] m-auto">
      <div className="mx-8">
        <ul className="flex justify-between items-center font-medium">
          <li
            className={`cursor-pointer p-4 ${
              activeTab == "About"
                ? "bg-dark-blue/20 underline decoration-pink-500 decoration-2"
                : ""
            }`}
            onClick={() => setActiveTab("About")}
          >
            About
          </li>
          <li
            className={`cursor-pointer p-4 ${
              activeTab == "Feed"
                ? "bg-dark-blue/20 underline decoration-pink-500 decoration-2"
                : ""
            }`}
            onClick={() => setActiveTab("Feed")}
          >
            Feed
          </li>
          <li
            className={`cursor-pointer p-4 ${
              activeTab == "Projects"
                ? "bg-dark-blue/20 underline decoration-pink-500 decoration-2"
                : ""
            }`}
            onClick={() => setActiveTab("Projects")}
          >
            Projects
          </li>
          <li
            className={`cursor-pointer p-4 ${
              activeTab == "Contact"
                ? "bg-dark-blue/20 underline decoration-pink-500 decoration-2"
                : ""
            }`}
            onClick={() => setActiveTab("Contact")}
          >
            Contact
          </li>
        </ul>
      </div>
      {renderTab()}
    </main>
  );
};

export default Content;
