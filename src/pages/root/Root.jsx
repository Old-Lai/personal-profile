import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Github from "@/assets/Github-icon";

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
        <div className="mt-2 flex items-center justify-between">
          <Button
            name="linkedin"
            size="sm"
            className="group flex h-10 w-10 items-center justify-center rounded bg-transparent p-2 transition duration-300 hover:scale-110 hover:bg-blue-500 shadow"
            onClick={(e) => handelClick(e)}
          >
            <Linkedin className="h-6 w-6 fill-current text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
          </Button>
          <Button
            name="github"
            size="sm"
            className="bg-transparen border-r-50 group flex h-10 w-10 content-center items-center justify-center rounded p-2 text-primary transition duration-300 hover:scale-110 hover:bg-gray-100 shadow"
            onClick={(e) => handelClick(e)}
          >
            <Github className="h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-110 group-hover:text-gray-900" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Root;
