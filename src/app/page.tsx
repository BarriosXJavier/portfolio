import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="py-8 lg:py-12">
        <div className="container px-4 py-8 md:py-10 space-y-8 lg:space-y-12">
          <div className="grid items-start gap-4 lg:gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center space-x-4 space-y-4">
              <Image
                alt="Profile"
                height={300}
                width={300}
                src="/linkedin.jpg"
                style={{
                  backgroundColor: "rgb(24, 45, 120)",
                  borderRadius: "50%"
                }}
              />
              <div className="space-y-1 flex flex-col">
                <h1 className="text-3xl font-bold mx-auto">David Muriithi</h1>
                <p className="text-gray-200 dark:text-gray-400">Frontend Developer</p>
              </div>
            </div>
            <div className="space-y-8 md:col-start-2 md:col-span-2 lg:space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl text-gray-300 font-bold">About Me</h2>
                <p className="text-gray-100 dark:text-gray-400 flex flex-col space-y-4">
                  Web wizard with a flair for React and Tailwind CSS. I breathe life into designs making them responsive, authentic and stunning. When not coding, catch me outdoors getting inspiration for the next project.<br />
                  <span className="text-center text-[#28e6a0]">#ReactJS #TailwindCSS #FrontendDev</span>
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="grid gap-4 sm:gap-6">
                  <div className="grid gap-1">
                    <Link href="https://github.com/BarriosXJavier/lyra" target="_blank"><h3 className="text-xl text-[#28e6a0] semi-bold">Lyra</h3></Link>
                    <p className="text-gray-100 dark:text-gray-400">
                      Lyra is an in-browser productivity tool that helps you manage and focus on your tasks without leaving your browser.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Skills</h2>
                <div className="">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 p-4  shadow-lg shadow-purple-500/50 animate-glow">
                    <span className="p-4 text-white">HTML</span>
                    <span className="p-4 text-white">CSS</span>
                    <span className="p-4 text-white">JavaScript</span>
                    <span className="p-4 text-white">Next.js</span>
                    <span className="p-4 text-white">TailwindCSS</span>
                  </div>
                </div>

              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Contact</h2>
                <div className="grid grid-cols-1 gap-4 max-sm:flex max-sm:flex-col md:gap-6">
                  <div className="space-y-2">
                    <Label className="text-lg" htmlFor="name">
                      Name
                    </Label>
                    <Input id="name" placeholder="Enter your name" required className="border-2 border-gray-500 rounded-lg"/>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-lg" htmlFor="email">
                      Email
                    </Label>
                    <Input id="email" placeholder="example@gmail.com" required className="border-2 border-gray-500 rounded-lg"/>
                  </div>
                  <div className="space-y-2 col-start-1 col-span-2">
                    <Label className="text-lg" htmlFor="message">
                      Message
                    </Label>
                    <Textarea className="min-h-[100px] resize-y border-2 border-gray-500 rounded-lg" id="message" placeholder="Enter your message" required />
                  </div>
                </div>
                <div className="flex justify-end pt-4 border-t border-t-[#28e6a0] dark:border-gray-800">
                  <Button className="m-2 px-4 py-2 border border-[#28e6a0] rounded-[5px]">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
