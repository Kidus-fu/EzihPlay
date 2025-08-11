import AboutUS from "../../components/AboutUs";
import FeedbackComponent from "../../components/feedback";
import Footer from "../../components/Footer";
import LandingHero1 from "../../components/Landing/LandingHero1";
import LandingNavBar from "../../components/Landing/landingNavcer";




const LandingPage = () => {
    return(
        <div className="min-h-screen flex flex-col overflow-y-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <div className="">
                <LandingNavBar />
            </div>
            <div className="">
                <LandingHero1 />
            </div>
            <div className="">
                <AboutUS />
            </div>
            <div className="">
                <FeedbackComponent />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;