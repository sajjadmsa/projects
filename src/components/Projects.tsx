import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. Features include product listings, shopping cart functionality, and user authentication.",
    techStack: "React, Node.js, Express, MongoDB",
    image: "/e-commerce-placeholder.svg", // Replace with an actual image or placeholder
  },
  {
    id: 2,
    title: "Task Management Application",
    description: "A task management app that helps users organize and track their tasks. Built with React, Node.js, Express, and PostgreSQL, focusing on CRUD operations and task prioritization.",
    techStack: "React, Node.js, Express, PostgreSQL",
    image: "/task-management-placeholder.svg", // Replace with an actual image or placeholder
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blog platform where users can create, edit, and delete blog posts. Developed using React for the frontend, .NET Core for the backend, and SQL Server for data storage.",
    techStack: "React, .NET Core, SQL Server",
    image: "/blog-platform-placeholder.svg", // Replace with an actual image or placeholder
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="font-semibold text-gray-800">Tech Stack:</p>
                <p className="text-gray-600">{project.techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  