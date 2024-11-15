import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div
      id="react-root"
      className="flex min-h-lvh flex-col items-center bg-background"
    >
      <header className=" absolute top-0 left-0 w-lvw max-w-full">
        <ModeToggle />
      </header>
      <main className="w-full flex-1 content-center items-center">
        <Outlet context={{}} />
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Root;
