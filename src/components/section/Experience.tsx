import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const experiences = [
    {
      title: "AI Analyst",
      company: "Handshake",
      location: "Remote",
      period: "Feb 2026 - Present",
      description: [
        "Evaluated 100+ LLM-generated responses across specialized domains to improve reasoning accuracy, factual correctness, and response quality.",
        "Delivered structured analytical feedback across multiple evaluation dimensions, improving model consistency and reducing response errors.",
      ]
    },
    {
      title: "Undergraduate Research Assistant",
      company: "UT Austin Freshman Research Initiative — Autonomous Driving Stream",
      location: "Austin, TX",
      period: "Sep 2025 - Present",
      description: [
        "Programmed and tested autonomous robotic systems using ROS2 and Python, processing real-time LiDAR and camera sensor data to improve perception accuracy by 56% during autonomous navigation tasks.",
        "Collaborated with research team members to test and refine autonomous driving workflows in simulated and real-time robotics environments.",
      ]
    },
    {
      title: "CS Camp Counselor",
      company: "The University of Texas at Austin",
      location: "Austin, TX",
      period: "June 2026",
      description: [
        "Mentored and supervised 50+ middle and high school students during week-long computer science camps, fostering problem-solving skills through hands-on programming activities.",
        "Collaborated with instructors to facilitate programming labs, maintain classroom engagement, and foster problem-solving skills.",
      ]
    },
    {
      title: "AI/ML Fellow",
      company: "Break Through Tech — Cornell University",
      location: "Remote",
      period: "Mar 2026 - Present",
      description: [
        "Selected for a competitive AI/ML fellowship from a pool of 3,000+ applicants, completing intensive training in machine learning, data science, and responsible AI.",
        "Completed 40+ hours of technical training in Python, feature engineering, model evaluation, and machine learning using industry-standard tools.",
      ]
    },
    {
      title: "E-Store Shopper",
      company: "H-E-B",
      location: "Seguin, TX",
      period: "May 2024 - Present",
      description: [
        "Streamlined inventory retrieval and fulfillment processes for 1,000+ online grocery orders, earning Top Shopper recognition within the first six months through accuracy and efficiency.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;