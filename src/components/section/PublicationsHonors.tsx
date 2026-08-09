import { ExternalLink, Award, BookOpen } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const PublicationsHonors = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const honors = [
    {
      title: "University of Texas at Austin University Honors",
      issuer: "University of Texas at Austin",
      date: "May 2026",
      description: "Received University Honors for earning a semester GPA of 3.5 or above, recognizing outstanding academic achievement at UT Austin.",
    },
    {
      title: "Dijkstra Scholar",
      issuer: "UT Austin Computer Science Department",
      date: "May 2025",
      description: "Selected as 1 of 3 recipients of the UT Austin Dijkstra Scholarship, awarded by the Computer Science Department for academic excellence and leadership potential.",
    },
    {
      title: "University of Texas at Austin Impact Scholar",
      issuer: "University of Texas at Austin",
      date: "March 2025",
      description: "Selected as 1 of 3 recipients of the UT Austin Impact Scholarship in recognition of academic excellence, leadership, and commitment to community impact. $80,000 scholarship.",
    },
    {
      title: "2nd Place — Fidelity FidHacks 2026",
      issuer: "Fidelity Investments",
      date: "July 2026",
      description: "Earned 2nd place at Fidelity's intercollegiate hackathon with Decoded, a financial wellness platform helping early-career professionals navigate offer letters and compensation.",
    },
    {
      title: "Distinguished Young Women Contestant",
      issuer: "SequinToday",
      date: "March 2024",
      description: "Selected as a Distinguished Young Women contestant, competing for scholarships including awards to Texas Lutheran University.",
    },
  ];

  const publications = [
    {
      title: "AI is changing how Texas universities teach computer science as job market slows",
      outlet: "The Texas Tribune",
      date: "April 21, 2026",
      url: "https://www.texastribune.org",
      description: "Featured in coverage of how AI is reshaping computer science education at Texas universities as the tech job market evolves.",
    },
    {
      title: "Seguin, Navarro students earn scholarship for community impact",
      outlet: "Seguin Gazette",
      date: "March 20, 2025",
      url: null,
      description: "Honored as one of three recipients of the prestigious University of Texas Impact Scholarship, awarded for demonstrated leadership and meaningful contributions to school and community.",
    },
    {
      title: "Distinguished Young Women contest set for Sunday at the Texas Theatre",
      outlet: "SequinToday",
      date: "March 15, 2024",
      url: null,
      description: "Featured as a contestant in the Distinguished Young Women competition, showcasing skills and community involvement.",
    },
  ];

  const cardStyle = {
    background: isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
    borderRadius: '16px',
    padding: '20px 24px',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  };

  const sectionLabelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: themeColors.colors.pink[500],
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const titleStyle = {
    fontSize: '15px',
    fontWeight: 600,
    color: isDarkMode ? '#ffffff' : '#1B1714',
    marginBottom: '4px',
    lineHeight: 1.4,
  };

  const metaStyle = {
    fontSize: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    color: themeColors.colors.pink[400],
    marginBottom: '8px',
  };

  const descStyle = {
    fontSize: '13.5px',
    lineHeight: 1.7,
    color: isDarkMode ? 'rgba(255,255,255,0.55)' : 'rgba(75,67,60,0.85)',
    margin: 0,
  };

  return (
    <section
      id="publications-honors"
      className="py-16 relative"
      style={{
        background: themeColors.background.sections?.experience || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">

        {/* Honors & Awards */}
        <div style={{ marginBottom: '56px' }}>
          <p style={sectionLabelStyle}>
            <Award size={14} />
            Honors &amp; Awards
          </p>
          {honors.map((item, i) => (
            <div key={i} style={cardStyle}>
              <div style={titleStyle}>{item.title}</div>
              <div style={metaStyle}>{item.issuer} · {item.date}</div>
              <p style={descStyle}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div>
          <p style={sectionLabelStyle}>
            <BookOpen size={14} />
            Publications &amp; Press
          </p>
          {publications.map((item, i) => (
            <div key={i} style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <div style={titleStyle}>{item.title}</div>
                  <div style={metaStyle}>{item.outlet} · {item.date}</div>
                  <p style={descStyle}>{item.description}</p>
                </div>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: themeColors.colors.pink[400],
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PublicationsHonors;
