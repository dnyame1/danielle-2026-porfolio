import { Trophy, LayoutGrid, TrendingUp } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { decodedIcon } from '../../assets';

const Decoded = () => {
  const features = [
    {
      icon: Trophy,
      title: '2nd place at FidHacks 2026',
      description: 'Competed against teams from universities across the country at Fidelity\'s intercollegiate hackathon.',
    },
    {
      icon: LayoutGrid,
      title: '5 core product features',
      description: 'Offer letter analyzer, total comp comparison tool, 401(k) simulator, mentor matching, and a financial education roadmap.',
    },
    {
      icon: TrendingUp,
      title: 'Real financial impact',
      description: 'Built to help early-career professionals make informed decisions about compensation — the fine print nobody explains.',
    },
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={decodedIcon}
        title="Decoded"
        subtitle="Your first paycheck, decoded — 2nd place at Fidelity FidHacks 2026."
        githubUrl="https://github.com/VedaKolipakula/decoded"
        features={features}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "Decoded was built at FidHacks 2026 — Fidelity's intercollegiate hackathon — to solve a real problem: most people get their first offer letter or paycheck and have no idea what they're actually looking at. Taxes, benefits, 401(k) matching, equity — it's all fine print that nobody taught you to read.",
            "The platform lets early-career professionals upload an offer letter or pay stub and translates the jargon into plain English, showing what the package is actually worth over time. It's not just a calculator — it's a full financial literacy tool built around the moments that matter most when you're starting out.",
            "Our team earned 2nd place out of all competing teams, building and shipping a functional product within the hackathon window.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            'Earned 2nd place at Fidelity FidHacks 2026, competing against teams from universities nationwide',
            'Developed a financial wellness platform as part of a cross-functional team, collaborating across technical and product responsibilities',
            'Delivered 5 core product features: offer letter analyzer, total compensation comparison tool, compound-growth 401(k) simulator, mentor matching system, and interactive financial education roadmap with gated progression',
            'Turned an initial concept into a functional solution within a fast-paced hackathon environment, prioritizing user needs and coordinating feature development',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={['React', 'TypeScript', 'Vite', 'HTML', 'CSS']} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Decoded;
