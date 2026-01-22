import { motion } from "motion/react";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vishnoivijit@gmail.com",
      href: "mailto:vishnoivijit@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8209287464",
      href: "tel:+918209287464",
      color: "green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ranchi, Jharkhand, India",
      href: null,
      color: "purple"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vijit-vishnoi",
      username: "vijit-vishnoi"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vijit-vishnoi",
      username: "vijit-vishnoi"
    }
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-blue-950/30", text: "text-blue-400" },
    green: { bg: "bg-green-950/30", text: "text-green-400" },
    purple: { bg: "bg-purple-950/30", text: "text-purple-400" }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Let's Build Something Great</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Looking for backend engineers who understand distributed systems, scalability, and performance optimization?
            Let's connect and discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 border-gray-800 bg-gray-900/50 h-full">
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${colorMap[item.color].bg} flex-shrink-0`}>
                      <item.icon className={`h-5 w-5 ${colorMap[item.color].text}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-300">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect on Social</h4>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-950/50 border border-gray-800 hover:border-blue-700 transition-all duration-300 group"
                    >
                      <link.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <div>
                        <div className="text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition-colors">
                          {link.label}
                        </div>
                        <div className="text-xs text-gray-500">{link.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-8 border-gray-800 bg-gradient-to-br from-blue-950/30 to-purple-950/30 h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="inline-flex p-4 rounded-full bg-blue-600/10 mb-4">
                  <Send className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-200 mb-3">
                  Ready to Build Scalable Systems?
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm actively seeking full-time backend/full-stack engineering opportunities where I can contribute to building robust, scalable systems.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a href="mailto:vishnoivijit@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send an Email
                  </a>
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Available for roles starting <span className="text-gray-300 font-semibold">May 2027</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Ideal Roles</h4>
                <div className="flex flex-wrap gap-2">
                  {["Backend Engineer", "Full-Stack Developer", "Systems Engineer", "API Developer"].map((role, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-gray-950/50 border border-gray-700 text-gray-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Education Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6 border-gray-800 bg-gray-900/50 text-center">
            <div className="text-gray-400">
              <span className="text-gray-300 font-semibold">BTech in Computer Science & Engineering</span> at{" "}
              <span className="text-blue-400 font-semibold">Indian Institute of Information Technology, Ranchi</span>
              <br />
              <span className="text-sm">CGPA: 8.4/10 | Expected Graduation: May 2027</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
