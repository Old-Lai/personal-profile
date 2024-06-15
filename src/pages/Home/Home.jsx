import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Github = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 100 100">
    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
  </svg>
)

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        This is temporary text
      </h1>
      <Button variant="secondary" onClick={() => console.log("clicked")}>
        This is a test
      </Button>
      <div className="flex items-center justify-between mt-2">
        <Button size="sm" className="bg-transparent hover:shadow hover:bg-blue-500 rounded p-2 flex items-center justify-center group transition duration-300 hover:scale-110 w-10 h-10">
          <Linkedin className="text-primary group-hover:text-white fill-current w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </Button>
        <Button size="sm" className="bg-transparen w-10 h-10 hover:bg-gray-100 hover:shadow text-primary rounded p-2 border-r-50 flex items-center justify-center content-center group transition duration-300 hover:scale-110">
          <Github className="fill-current group-hover:text-gray-900 w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
        </Button>
      </div>
      
    </div>
  );
}
