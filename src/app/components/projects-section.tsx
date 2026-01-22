import { motion } from "motion/react";
import { Github, ExternalLink, Server, Database, Zap, Lock, GitBranch, TrendingUp } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Airline Management System",
      subtitle: "Microservices-Based Flight Booking Backend",
      description: "A distributed backend system built with microservices architecture, supporting multiple services with robust inter-service communication and fault tolerance.",
      problem: "Traditional monolithic booking systems face scalability challenges, single points of failure, and difficulty in independent service deployment.",
      architecture: [
        "5+ independent microservices for booking, flights, search, notifications, and API gateway",
        "RabbitMQ message broker for asynchronous communication between services",
        "Centralized API Gateway with rate limiting (100 req/min per IP)",
        "JWT-based authentication and authorization across services"
      ],
      challenges: [
        {
          challenge: "Inter-service Communication",
          solution: "Implemented RabbitMQ for reliable message passing, reducing system downtime by 40%"
        },
        {
          challenge: "Rate Limiting & Security",
          solution: "Applied express-rate-limit to prevent abuse and ensure backend reliability"
        },
        {
          challenge: "Service Scalability",
          solution: "Modular architecture allows independent scaling of high-traffic services"
        }
      ],
      impact: [
        "40% reduction in system downtime through distributed architecture",
        "100% improvement in fault tolerance with isolated service failures",
        "Enhanced security with rate limiting and JWT authentication"
      ],
      technologies: ["Express", "Node.js", "MySQL", "Sequelize", "RabbitMQ", "JWT", "API Gateway"],
      github: "#",
      live: "#",
      icon: Server,
      color: "blue"
    },
    {
      title: "EduSphere",
      subtitle: "Scalable Learning Management System",
      description: "A full-featured LMS with real-time communication, role-based access control, and comprehensive REST APIs for managing students, teachers, and courses.",
      problem: "Educational institutions need secure, scalable platforms for managing users, courses, and real-time interactions without compromising performance.",
      architecture: [
        "Modular MVC architecture with clear separation of concerns",
        "Socket.IO for real-time classroom communication and notifications",
        "Role-based middleware protecting 100% of sensitive routes",
        "20+ RESTful API endpoints covering all platform features"
      ],
      challenges: [
        {
          challenge: "Role-Based Access Control",
          solution: "Implemented JWT-based authentication with middleware protecting sensitive operations"
        },
        {
          challenge: "Real-time Communication",
          solution: "Integrated Socket.IO for instant messaging and live classroom updates"
        },
        {
          challenge: "Code Maintainability",
          solution: "Designed modular architecture enabling easy feature expansion and testing"
        }
      ],
      impact: [
        "20+ production-ready APIs deployed for comprehensive platform coverage",
        "100% route protection with JWT middleware ensuring data security",
        "Scalable architecture supporting future feature additions"
      ],
      technologies: ["Express", "Node.js", "Socket.IO", "MySQL", "JWT", "Sequelize", "Tailwind CSS"],
      github: "#",
      live: "#",
      icon: Database,
      color: "purple"
    },
    {
      title: "Twitter Backend Service",
      subtitle: "High-Performance Social Media API",
      description: "A Twitter-like backend focused on database optimization and query performance, featuring user authentication, tweets, likes, and comments with significant performance improvements.",
      problem: "Social media backends require extremely fast query responses to handle high traffic volumes and provide smooth user experiences at scale.",
      architecture: [
        "Express + Node.js with MongoDB for flexible document storage",
        "Mongoose ORM with strategic indexing for optimized queries",
        "RESTful API design for user auth, tweets, likes, and comments",
        "Optimized query patterns for common social media operations"
      ],
      challenges: [
        {
          challenge: "Query Performance",
          solution: "Reduced tweet retrieval time by 40% through strategic MongoDB indexing"
        },
        {
          challenge: "Server Load",
          solution: "Optimized query logic and indexing strategies, cutting server load by 35%"
        },
        {
          challenge: "Data Relationships",
          solution: "Designed efficient Mongoose schemas handling complex user-tweet-comment relationships"
        }
      ],
      impact: [
        "40% faster tweet retrieval through strategic indexing",
        "35% reduction in overall server load via query optimization",
        "Improved scalability for handling increased user traffic"
      ],
      technologies: ["Express", "Node.js", "MongoDB", "Mongoose", "JWT", "Indexing"],
      github: "#",
      live: "#",
      icon: Zap,
      color: "green"
    }
  ];

  const iconMap: Record<string, JSX.Element> = {
    lock: <Lock className="h-5 w-5" />,
    server: <Server className="h-5 w-5" />,
    branch: <GitBranch className="h-5 w-5" />,
    trending: <TrendingUp className="h-5 w-5" />
  };

  const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
    blue: {
      border: "border-blue-700",
      bg: "bg-blue-950/30",
      text: "text-blue-400",
      badge: "border-blue-700 bg-blue-950/30 text-blue-300"
    },
    purple: {
      border: "border-purple-700",
      bg: "bg-purple-950/30",
      text: "text-purple-400",
      badge: "border-purple-700 bg-purple-950/30 text-purple-300"
    },
    green: {
      border: "border-green-700",
      bg: "bg-green-950/30",
      text: "text-green-400",
      badge: "border-green-700 bg-green-950/30 text-green-300"
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Backend-focused projects demonstrating distributed systems, performance optimization, and scalable architecture design
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-8 border-gray-800 bg-gray-900/50 hover:${colorMap[project.color].border} transition-all duration-300`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${colorMap[project.color].bg}`}>
                      <project.icon className={`h-8 w-8 ${colorMap[project.color].text}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-1 ${colorMap[project.color].text}`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-gray-700 hover:bg-gray-800"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-gray-700 hover:bg-gray-800"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{project.description}</p>

                {/* Problem Statement */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Problem Statement</h4>
                  <p className="text-gray-400 text-sm">{project.problem}</p>
                </div>

                {/* Architecture */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Architecture Overview</h4>
                  <ul className="space-y-2">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colorMap[project.color].bg} flex-shrink-0`}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Key Backend Challenges</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.challenges.map((item, i) => (
                      <Card key={i} className="p-4 border-gray-800 bg-gray-950/50">
                        <h5 className="font-semibold text-gray-300 mb-2 text-sm">{item.challenge}</h5>
                        <p className="text-xs text-gray-400">{item.solution}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Performance Impact</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.impact.map((metric, i) => (
                      <Badge key={i} variant="outline" className={`px-3 py-1 ${colorMap[project.color].badge}`}>
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-gray-700 bg-gray-800/50 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
