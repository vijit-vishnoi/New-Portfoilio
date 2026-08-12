import { motion } from "motion/react";
import { Trophy, Users, Award, Target } from "lucide-react";
import { Card } from "@/app/components/ui/card";

export function AchievementsSection() {
  const achievements = [
    {
      icon: Users,
      title: "Adobe India Hackathon 2025",
      description: "Spearheaded a 3-person engineering team",
      detail: "Advanced past 50,000+ teams to reach the Semifinals, leading technical architecture discussions",
      color: "blue"
    },
    {
      icon: Trophy,
      title: "Inter-IIIT Sports Meet 2025",
      description: "First Place Victory",
      detail: "Led team as Captain, mentoring 14 peers and securing first place among 20 teams",
      color: "orange"
    },
    {
      icon: Award,
      title: "Leadership Progression",
      description: "Vice-Captain → Captain",
      detail: "Earned promotion through consistent performance, mentoring peers and driving practice sessions",
      color: "purple"
    },
    {
      icon: Target,
      title: "Competitive Programming",
      description: "CodeChef 3-Star • Codeforces Pupil • LeetCode 500+",
      detail: "Demonstrated strong algorithmic expertise, logical aptitude, and problem-solving consistency across multiple platforms",
      color: "green"
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; hoverBorder: string }> = {
    blue: { bg: "bg-blue-950/30", text: "text-blue-400", hoverBorder: "hover:border-blue-500" },
    orange: { bg: "bg-orange-950/30", text: "text-orange-400", hoverBorder: "hover:border-orange-500" },
    purple: { bg: "bg-purple-950/30", text: "text-purple-400", hoverBorder: "hover:border-purple-500" },
    green: { bg: "bg-green-950/30", text: "text-green-400", hoverBorder: "hover:border-green-500" }
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Achievements & Leadership</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-6 border-gray-800 bg-gray-900/50 ${colorMap[achievement.color].hoverBorder} transition-all duration-300 h-full`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${colorMap[achievement.color].bg} flex-shrink-0`}>
                    <achievement.icon className={`h-6 w-6 ${colorMap[achievement.color].text}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${colorMap[achievement.color].text}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 font-semibold text-sm mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="p-6 border-gray-800 bg-gradient-to-r from-blue-950/30 to-purple-950/30 hover:border-purple-500 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Beyond Code</h3>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Leadership, mentorship, and competitive excellence demonstrate well-rounded capabilities beyond technical skills.
                From guiding hackathon teams to leading sports victories, these experiences showcase discipline, strategic thinking, and team collaboration—essential qualities for building scalable systems in collaborative engineering environments.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
