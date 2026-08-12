import { motion } from "motion/react";
import { Code2, Trophy, TrendingUp, Award, ExternalLink } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function CompetitiveProgrammingSection() {
  const stats = [
    {
      icon: Code2,
      label: "LeetCode",
      value: "500+",
      description: "Problems Solved | @Shane_21",
      link: "https://leetcode.com/u/Shane_21/",
      color: "blue"
    },
    {
      icon: Trophy,
      label: "CodeChef",
      value: "1600+",
      description: "3 Star | @allain_21",
      link: "https://www.codechef.com/users/allain_21",
      color: "orange"
    },
    {
      icon: TrendingUp,
      label: "Codeforces",
      value: "Pupil",
      description: "Global Ranking | @vishnoi.21",
      link: "https://codeforces.com/profile/vishnoi.21",
      color: "green"
    }
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
    "Bit Manipulation",
    "Two Pointers",
    "Sliding Window",
    "Backtracking",
    "Divide and Conquer",
    "Topological Sort",
    "Shortest Path (Dijkstra)",
    "Disjoint Set (Union-Find)",
    "Trie",
    "Segment Trees"
  ];

  const colorMap: Record<string, { bg: string; text: string; hoverBorder: string }> = {
    blue: { bg: "bg-blue-950/30", text: "text-blue-400", hoverBorder: "hover:border-blue-500" },
    orange: { bg: "bg-orange-950/30", text: "text-orange-400", hoverBorder: "hover:border-orange-500" },
    green: { bg: "bg-green-950/30", text: "text-green-400", hoverBorder: "hover:border-green-500" }
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
              <a href={stat.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className={`p-6 border-gray-800 bg-gray-900/50 ${colorMap[stat.color].hoverBorder} transition-all duration-300 h-full flex flex-col justify-between`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colorMap[stat.color].bg}`}>
                        <stat.icon className={`h-6 w-6 ${colorMap[stat.color].text}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-200">{stat.label}</h3>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-600 hover:text-gray-400 transition-colors" />
                  </div>
                  <div>
                    <div className={`text-4xl font-extrabold mb-2 ${colorMap[stat.color].text}`}>
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{stat.description}</p>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mb-12">

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 border-gray-800 bg-gray-900/50 h-full hover:border-green-700 transition-all duration-300">
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
          <Card className="p-6 border-gray-800 bg-gradient-to-r from-blue-950/30 to-purple-950/30 hover:border-purple-700 transition-all duration-300">
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
