import { useState } from "react";
import About from "./Body/About";
import Contact from "./Body/Contact";
import Feed from "./Body/Feed";
import Projects from "./Body/Projects";

const Content = () => {
  const [activeTab, setActiveTab] = useState("About");

  const renderTab = () => {
    switch (activeTab) {
      case "About":
        return <About />;
      case "Feed":
        return <Feed />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <main className="sm:w-[620px] m-auto">
      <div className="mx-8">
        <ul className="flex justify-between items-center">
          <li className="cursor-pointer" onClick={() => setActiveTab("About")}>
            About
          </li>
          <li className="cursor-pointer" onClick={() => setActiveTab("Feed")}>
            Feed
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setActiveTab("Projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer"
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
