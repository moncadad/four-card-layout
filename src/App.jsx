import "./App.sass";
import BasicCard from "./components/BasicCard";

function App() {
  const cardData = [
    {
      id: 1,
      color: "cyan",
      title: "Supervisor",
      text: "Monitors activity to indentify project roadblocks",
      icon: "supervisor",
      alt: "Maginifier",
    },
    {
      id: 2,
      color: "red",
      title: "Team Builder",
      text: "Scans out talent network to create the optimal team for your project",
      icon: "team-builder",
    },
    {
      id: 3,
      color: "orange",
      title: "Karma",
      text: "Regularly evaluates our talents to ensure quality",
      icon: "karma",
    },
    {
      id: 4,
      color: "blue",
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      icon: "calculator",
    },
  ];

  function setComponent(num) {
    return (
      <BasicCard
        id={cardData[num].id}
        color={cardData[num].color}
        title={cardData[num].title}
        text={cardData[num].text}
        icon={cardData[num].icon}
      />
    );
  }

  return (
    <>
      <article className="article">
        <header className="header">
          <h1 className="header__title">Reliable, efficient delivery</h1>
          <h2 className="header__subtitle">Powered by Technology</h2>
          <p className="header__text">
            Our Artificial intelligence powerd tools use millions of project
            data points to ensure that your project is successfull.
          </p>
        </header>
        <section className="cards">
          <div className="col">{setComponent(0)}</div>
          <div className="col">
            {setComponent(1)}
            {setComponent(2)}
          </div>
          <div className="col">{setComponent(3)}</div>
        </section>
      </article>
    </>
  );
}

export default App;
