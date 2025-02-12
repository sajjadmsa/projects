const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Git"]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

