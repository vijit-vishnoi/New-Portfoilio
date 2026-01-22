import { motion } from "motion/react";
import { Database, Server, Cloud, Code, Zap } from "lucide-react";
import { Card } from "@/app/components/ui/card";

export function AboutSection() {
  const highlights = [
    {
      icon: Server,
      title: "Distributed Systems",
      description: "Microservices architecture with RabbitMQ and API Gateway"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "40% faster queries through indexing and query optimization"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Cloudflare R2 for scalable infrastructure"
    },
    {
      icon: Code,
      title: "API Development",
      description: "20+ RESTful APIs with JWT auth and rate limiting"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "35% reduction in server load through optimization"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-4">
              Computer Science undergraduate at <span className="text-blue-400 font-semibold">IIIT Ranchi</span> (CGPA: 8.4) with a passion for building robust backend systems and scalable architectures.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              I specialize in <span className="text-purple-400 font-semibold">distributed systems design</span>, focusing on microservices, message queues, and high-performance APIs. My work emphasizes system reliability, database optimization, and architectural patterns that scale.
            </p>
            <p className="text-lg text-gray-300">
              With <span className="text-green-400 font-semibold">400+ competitive programming problems</span> solved and being a <span className="text-green-400 font-semibold">Pupil at Codeforces</span>, I bring strong algorithmic thinking and problem-solving skills to every system I design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-4 border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 hover:border-blue-700"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
