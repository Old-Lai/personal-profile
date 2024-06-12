import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

const Root = () => {
  
  return (
    <div id="react-root" className=" bg-background min-h-lvh flex flex-col items-center">
      <header>
        <ModeToggle />
        <p>head</p>
      </header>
      <main className=" flex-1 items-center content-center">
        <Outlet context={{}} />
      </main>
      <footer>
        <p>foot</p>
      </footer>
    </div>
  );
};

export default Root;