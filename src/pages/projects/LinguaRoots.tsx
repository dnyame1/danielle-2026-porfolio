import { Smartphone, Gamepad2, MessageSquare } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { linguarootsIcon } from '../../assets';

const LinguaRoots = () => {
  const features = [
    {
      icon: Smartphone,
      title: '8 screens in 30 days',
      description: 'Built a production-ready iOS app in SwiftUI across 8 screens in under a month, from personalized onboarding to AI conversation practice.',
    },
    {
      icon: Gamepad2,
      title: 'Full gamification system',
      description: 'XP tracking, level progression, daily streaks, and an in-app shop across 4 structured Twi language units.',
    },
    {
      icon: MessageSquare,
      title: 'AI conversation feature',
      description: 'REST API-powered AI conversation for real-time Twi practice — moving beyond passive vocabulary into active dialogue.',
    },
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={linguarootsIcon}
        title="LinguaRoots"
        subtitle="A heritage language learning iOS app for the Ghanaian diaspora — starting with Twi."
        githubUrl="https://github.com/dnyame1/linguaroots"
        features={features}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "Most language apps are built for tourists. LinguaRoots is built for something different: people trying to reconnect with a language their family already speaks, where the gap is generational, not academic.",
            "The project centers on Twi, the language of the Akan people of Ghana, and is designed around the way language is actually transmitted at home — through rhythm, repetition, and oral tradition — rather than a standard vocabulary-drilling format.",
            "Built in Swift and SwiftUI across 8 screens in under 30 days, with a full gamification system, personalized onboarding, and an embedded AI conversation feature powered by REST APIs.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            'Built a production-ready iOS heritage language learning app in SwiftUI across 8 screens in under 30 days',
            'Engineered a full gamification system — XP tracking, level progression, daily streaks, and an in-app shop — across 4 structured Twi language units to drive learner retention and daily engagement',
            'Integrated REST APIs to power an AI conversation feature for real-time Twi practice, enabling users to move beyond passive vocabulary drilling into active dialogue',
            'Features personalized onboarding survey, interactive flashcard notecards, and end-of-lesson quizzes',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={['Swift', 'SwiftUI', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs']} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default LinguaRoots;
