import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Vijit Vishnoi
            </h3>
            <p className="text-sm text-gray-500">Backend & Full-Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/vijit-vishnoi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-700 hover:bg-gray-800 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/vijit-vishnoi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-700 hover:bg-gray-800 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:vishnoivijit@gmail.com"
              className="p-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-700 hover:bg-gray-800 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 flex items-center gap-2 justify-center md:justify-end">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & Tailwind
            </p>
            <p className="text-xs text-gray-600 mt-1">
              © {currentYear} Vijit Vishnoi. All rights reserved.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-900">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#competitive-programming" className="hover:text-blue-400 transition-colors">CP</a>
            <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
