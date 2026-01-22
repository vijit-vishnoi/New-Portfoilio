import { motion } from "motion/react";
import { Code2, Trophy, TrendingUp, Award } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function CompetitiveProgrammingSection() {
  const stats = [
    {
      icon: Code2,
      label: "Problems Solved",
      value: "400+",
      description: "Across CodeChef, Codeforces, LeetCode",
      color: "blue"
    },
    {
      icon: Trophy,
      label: "CodeChef Rating",
      value: "1450+",
      description: "2 Star | Top 20% Globally",
      color: "orange"
    },
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "Top 20%",
      description: "Global competitive ranking",
      color: "green"
    }
  ];

  const platforms = [
    { name: "CodeChef", profile: "vijitvishnoi", rating: "2 Star" },
    { name: "Codeforces", profile: "vijitvishnoi", rating: "Pupil" },
    { name: "LeetCode", profile: "vijitvishnoi", rating: "250+ Problems Solved" }
  ];

  const skills = [
    "Data Structures & Algorithms",
    "Dynamic Programming",
    "Graph Algorithms",
    "Tree Traversals",
    "Greedy Algorithms",
    "Binary Search",
    "Sorting & Searching",
    "String Manipulation",
    "Mathematical Algorithms",
    "Bit Manipulation"
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-blue-950/30", text: "text-blue-400" },
    orange: { bg: "bg-orange-950/30", text: "text-orange-400" },
    green: { bg: "bg-green-950/30", text: "text-green-400" }
  };

  return (
    <section id="competitive-programming" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Competitive Programming</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Strong algorithmic foundation with 400+ problems solved, demonstrating data structure mastery and analytical problem-solving
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-all duration-300 text-center">
                <div className={`inline-flex p-3 rounded-lg ${colorMap[stat.color].bg} mb-4`}>
                  <stat.icon className={`h-8 w-8 ${colorMap[stat.color].text}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${colorMap[stat.color].text}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 border-gray-800 bg-gray-900/50 h-full">
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-400" />
                Competitive Platforms
              </h3>
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-950/50 border border-gray-800">
                    <div>
                      <div className="font-semibold text-gray-300">{platform.name}</div>
                      <div className="text-sm text-gray-500">@{platform.profile}</div>
                    </div>
                    <Badge variant="outline" className="border-blue-700 bg-blue-950/30 text-blue-300">
                      {platform.rating}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 border-gray-800 bg-gray-900/50 h-full">
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-green-400" />
                Algorithm Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-gray-700 bg-gray-800/50 text-gray-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="p-6 border-gray-800 bg-gradient-to-r from-blue-950/30 to-purple-950/30">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-purple-600/10">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">Consistent Growth</h4>
                <p className="text-sm text-gray-400">
                  Regular problem-solving practice demonstrates dedication to algorithmic thinking and continuous improvement.
                  Strong foundation in data structures translates directly to writing efficient backend systems and optimized database queries.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
