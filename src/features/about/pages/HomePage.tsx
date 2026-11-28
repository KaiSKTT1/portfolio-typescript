import { PROFILE_DATA } from '../data/profileData';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';

export function HomePage() {
    return (
        <div className="space-y-12">
            <HeroSection profile={PROFILE_DATA} />
            <AboutSection />
        </div>
    );
}