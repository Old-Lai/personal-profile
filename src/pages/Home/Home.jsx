import { Button } from "@/components/ui/button";
import { Linkedin, ChevronDown } from "lucide-react";
import Github from "@/assets/Github-icon";

export default function Home() {
  function handelClick(e) {
    console.log(e.currentTarget.name, "clicked");
    switch (e.currentTarget.name) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/henry-lai-0/", "_blank");
        break;
      case "github":
        window.open("https://github.com/Old-Lai", "_blank");
        break;
      default:
        break;
    }
  }

  return (
    <div className="min-h-full min-w-full">
      <section className="flex h-lvh w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Hey! I'm Henry
          </h1>
          <p>Checkout links to my github and linkedin below!</p>
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
        </div>
        <div className="flex flex-col">
          <ChevronDown className="animate-moveDown-fade" style={{'--moveDown-fade-delay': '-2s'}}/>
          <ChevronDown className="animate-moveDown-fade" style={{'--moveDown-fade-delay': '-1s'}}/>
          <ChevronDown className="animate-moveDown-fade"/>
        </div>
      </section>
      <section className="flex h-[600px] w-full flex-col items-center justify-center bg-secondary">
        <h2 className="scroll-m-20 text-3xl">About Me</h2>
      </section>
      <section className="flex h-[600px] w-full flex-col items-center justify-center bg-bacground">
        <h2 className="scroll-m-20 text-3xl">Portfolio | Projects</h2>
      </section>
      <section className="flex h-[600px] w-full flex-col items-center justify-center bg-secondary">
        <h2 className="scroll-m-20 text-3xl">Interactive Show Case</h2>
      </section>
      <section className="flex h-[600px] w-full flex-col items-center justify-center bg-background">
        <h2 className="scroll-m-20 text-3xl">Resume downloadable</h2>
      </section>
      <section className="flex h-[600px] w-full flex-col items-center justify-center bg-secondary">
        <h2 className="scroll-m-20 text-3xl">Contact Form</h2>
      </section>
    </div>
  );
}
