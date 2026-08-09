import { Eye, LayoutGrid, Zap } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { comingSoon } from '../../assets';
import { socialLinks } from '../../config/socialLinks';

const DermaTone = () => {
  const features = [
    {
      icon: Eye,
      title: '10 skin tone categories',
      description: 'Integrates Monk Skin Tone classification and deep-skin context annotations instead of a binary light/dark split.',
    },
    {
      icon: LayoutGrid,
      title: '6+ interactive components',
      description: 'Image upload workflows, results dashboard, glossary search, and fuzzy-match autocomplete.',
    },
    {
      icon: Zap,
      title: 'Sub-second response',
      description: 'Real-time analysis workflow with UI response times under one second.',
    },
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="DermaTone"
        subtitle="Where everyone can feel seen — inclusive AI for dermatology."
        githubUrl={socialLinks.repositories.projectTwo}
        features={features}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "DermaTone addresses a documented bias in dermatology AI: most skin-condition detection models are trained predominantly on lighter skin tones, which leads to worse diagnostic accuracy for darker skin.",
            "Built during HookEmHacks, DermaTone integrates Monk Skin Tone (MST 1–10) classification and deep-skin context annotations to close that gap, enabling condition detection across the full spectrum of skin tones rather than a narrow slice of it.",
            "I designed and built the frontend experience — image upload flows, a results dashboard, glossary search, and fuzzy-match autocomplete — all tuned for real-time use.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            'Integrated MST 1–10 classification and deep-skin context annotations to improve detection accuracy for underrepresented skin tones',
            'Built 6+ interactive frontend components: image upload, results dashboard, glossary search, fuzzy-match autocomplete',
            'Enabled real-time analysis workflows with sub-second UI response times',
            'Supports analysis across 10 distinct skin tone categories',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={['React', 'FastAPI', 'Swift']} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default DermaTone;
