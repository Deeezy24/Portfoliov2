"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, } from "lucide-react";

const ProjectDetails = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);
  const dataName = decodedPathname.replace(/[-/]/g, " ").trim();

  const project = projectsData.find((item) => 
    item.title.toLowerCase() === dataName.toLowerCase()
  );

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The project you're looking for doesn't exist.
          </p>
          <Link
            href="/projects"
            className="inline-flex gap-2 items-center px-6 py-3 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="overflow-hidden relative">
        <div className="absolute inset-0" />
        <div className="relative px-6 py-16 mx-auto max-w-7xl">
        
          
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl dark:text-white">
                  {project.title}
                </h1>
              
              </div>
              
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description }
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex relative gap-2 items-center px-8 py-4 font-semibold text-white bg-sky-700 rounded-xl shadow-lg transition-all duration-200 transform group hover:shadow-xl hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  View Live Project
                </Link>
                
               
              </div>
            </div>

            {/* Project Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur transition-opacity group-hover:opacity-50" />
              <div className="relative p-4 bg-white rounded-2xl shadow-2xl dark:bg-gray-800">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                About This Project
              </h2>
              <div className="max-w-none prose prose-lg dark:prose-invert">
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.paragraph}
                </p>
              </div>
            </div>

         
          </div>

          {/* Sidebar */}
          <div className="space-y-6">


            {/* Technologies Used */}
            {project.tags && (
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-white bg-sky-700 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;