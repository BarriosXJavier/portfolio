"use client";

import { CodeBlock, dracula } from "react-code-blocks";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // from shadcn
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const code = `
<div className="min-h-screen relative w-full overflow-hidden bg-gradient-to-br from-stone-900 to-stone-800 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
  <Boxes />
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-30 text-center max-w-4xl mx-auto"
  >
    <TextGenerateEffect words={title} className="text-4xl font-semibold text-purple-300" />
    <TextGenerateEffect words={text} className="text-lg text-purple-200" />
  </motion.div>
  <ChevronDown size={48} className="text-purple-500 absolute bottom-6" />
</div>
`;

const CurrentProject = () => {
  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <TypewriterEffectSmooth
        words={[{ text: "Current project: Groove furniture" }]}
        className="text-purple"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hidden md:block p-4 bg-gray-900 text-white rounded-lg shadow-md max-h-[500px] overflow-auto">
          <CodeBlock
            text={code}
            language="jsx"
            showLineNumbers={true}
            theme={dracula}
          />
        </div>

        {/* Website Preview with image */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md flex flex-col justify-between">
          <Image
            src="/groove.png"
            alt="Groove V1 Website Preview"
            className="rounded-md w-full h-full object-cover"
            height={400} // Add appropriate height
            width={600}  // Add appropriate width
          />
          <div className="flex justify-center space-x-4 mt-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="w-8 h-8"
              height={32} // Add appropriate height
              width={32}  // Add appropriate width
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
              className="w-8 h-8"
              height={32} // Add appropriate height
              width={32}  // Add appropriate width
            />
            <Image
              src="/clerk.avif"
              alt="Clerk"
              className="w-8 h-8"
              height={32} // Add appropriate height
              width={32}  // Add appropriate width
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              className="w-8 h-8"
              height={32} // Add appropriate height
              width={32}  // Add appropriate width
            />
          </div>
          <div>
            <p className="mt-4 text-center text-medium text-gray-700 dark:text-gray-300">
              Groove furniture is a platform where users can create, rate, and
              explore furniture listings.
            </p>
          </div>
          <Button className="mt-4 w-full">
            <Link href="https://groove-v1.vercel.app/" target="_blank">
              Visit Live Site
            </Link>
          </Button>
        </div>
      </div>

      {/* Remove the duplicate preview for small screens */}
    </section>
  );
};

export default CurrentProject;
