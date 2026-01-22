import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

export function HeroSection() {
  const techStack = [
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "RabbitMQ",
    "Docker",
    "AWS",
    "Microservices"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Vijit Vishnoi
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Backend & Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Building scalable distributed systems and high-performance APIs.
            Specialized in microservices architecture, database optimization, and backend engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            <a href="https://github.com/vijit-vishnoi" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            <a href="https://linkedin.com/in/vijit-vishnoi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex gap-6 justify-center text-sm text-gray-500"
        >
          <a href="https://www.codechef.com/users/allain_21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center gap-1">
            CodeChef <ExternalLink className="h-3 w-3" />
          </a>
          <a href="https://codeforces.com/profile/vishnoi.21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center gap-1">
            Codeforces <ExternalLink className="h-3 w-3" />
          </a>
          <a href="https://leetcode.com/u/Shane_21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center gap-1">
            LeetCode <ExternalLink className="h-3 w-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
