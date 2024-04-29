import { Outlet } from "react-router-dom";
import { BackgroundScene } from "../../assets";

const Root = () => {
  
  return (
    <>
      <header>
      </header>
      <main>
        <BackgroundScene />
        <Outlet context={{}} />
      </main>
      <footer></footer>
    </>
  );
};

export default Root;