import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function ExperienceSection() {
  const experience = {
    company: "Coding Panda",
    role: "Full Stack Intern",
    duration: "Sep 2025 – Oct 2025",
    location: "Remote",
    achievements: [
      {
        text: "Scaled a basic compiler into a production-ready platform supporting 10+ languages",
        impact: "improving reliability and developer productivity"
      },
      {
        text: "Designed and integrated Judge0 execution APIs into backend architecture",
        impact: "introducing real-time execution with error diagnostics and precise resource tracking"
      },
      {
        text: "Streamlined test case batch storage with Cloudflare R2",
        impact: "improving backend scalability, workflow automation, and code execution reliability"
      }
    ],
    technologies: ["Node.js", "Judge0 API", "Cloudflare R2", "Docker", "AWS", "REST APIs"]
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-8 border-gray-800 bg-gray-900/50 hover:border-blue-700 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">{experience.role}</h3>
                <h4 className="text-xl text-gray-300 mb-3">{experience.company}</h4>
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <span className="font-medium">{achievement.text}</span>
                      {achievement.impact && (
                        <span className="text-gray-400"> — {achievement.impact}</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-blue-700 bg-blue-950/30 text-blue-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
