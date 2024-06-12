import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div
      id="react-root"
      className="flex min-h-lvh flex-col items-center bg-background"
    >
      <header className="flex w-full justify-start items-center">
        <ModeToggle />
      </header>
      <main className="flex-1 content-center items-center">
        <Outlet context={{}} />
      </main>
      <footer>
        <p>foot</p>
      </footer>
    </div>
  );
};

export default Root;
