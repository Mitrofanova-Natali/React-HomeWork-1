import './App.css';
import IntroSection from "./components/IntroSection/IntroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import IPhoneSection from "./components/IPhoneSection/IPhoneSection";
import PartnerSection from "./components/PartnerSection/PartnerSection";
import FooterSection from "./components/FooterSection/FooterSection";
import SectionMail from "./components/SectionMail/SectionMail";
import SignatureSection from "./components/SignatureSection/SignatureSection"

function App() {
    return (
        <div className="App">
            <IntroSection/>
            <FeaturesSection/>
            <IPhoneSection/>
            <PartnerSection/>
            <SectionMail/>
            <FooterSection/>
            <SignatureSection/>
        </div>
    );
}

export default App;


