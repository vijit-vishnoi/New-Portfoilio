import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C", "C++", "JavaScript", "Python"],
      color: "blue"
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express", "REST APIs", "Socket.IO", "JWT", "Sequelize", "Mongoose"],
      color: "purple"
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Indexing", "Query Optimization"],
      color: "green"
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "AWS", "Cloudflare R2", "Git", "Linux"],
      color: "orange"
    },
    {
      category: "Systems & Architecture",
      skills: ["Microservices", "RabbitMQ", "API Gateway", "Rate Limiting", "Distributed Systems"],
      color: "red"
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
      color: "cyan"
    },
    {
      category: "Core CS",
      skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
      color: "pink"
    }
  ];

  const colorMap: Record<string, string> = {
    blue: "border-blue-700 bg-blue-950/30 text-blue-300",
    purple: "border-purple-700 bg-purple-950/30 text-purple-300",
    green: "border-green-700 bg-green-950/30 text-green-300",
    orange: "border-orange-700 bg-orange-950/30 text-orange-300",
    red: "border-red-700 bg-red-950/30 text-red-300",
    cyan: "border-cyan-700 bg-cyan-950/30 text-cyan-300",
    pink: "border-pink-700 bg-pink-950/30 text-pink-300"
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">{item.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`px-3 py-1 ${colorMap[item.color]}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
