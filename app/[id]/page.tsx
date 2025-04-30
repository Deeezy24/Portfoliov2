"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProjectDetails = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname); // Decode the pathname
  const DataName = decodedPathname.replace(/[-/]/g, " ").trim();


  const project = projectsData.find((item) => item.title === DataName);

  return (
    <div className="flex flex-wrap gap-6 justify-center mx-10 mb-10">
      {project && (
        <React.Fragment>
          <div className="flex-basis-1 flex justify-end ">
              <Image
                className="max-w-sm lg:max-w-2xl p-6 rounded-lg "
                src={project.imageUrl}
                alt={project.title}
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-medium capitalize mb-8 text-center lg:text-start">
                {DataName}
              </h1>
              <p className="relative max-w-5xl text-md lg:text-lg text-justify">
                {project.paragraph}
              </p>

              <Link
                href={project.projectUrl}
                target="blank"
                className="relative w-full my-6 sm:w-auto inline-flex items-center justify-center p-0.5 mb-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative w-full sm:w-auto text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
                  Redirect to Website
                </span>
              </Link>
            </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProjectDetails;
