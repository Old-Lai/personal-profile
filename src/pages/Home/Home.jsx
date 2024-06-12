import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        This is temporary text
      </h1>
      <Button variant="secondary" onClick={()=>console.log("clicked")}>This is a test</Button>
      <Button className="bg-transparent hover:bg-blue-700"><Linkedin className=" text-primary"/></Button>
    </div>
  );
}
