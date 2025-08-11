import Footer from "../../components/Footer";
import DeveloperCode from "../../components/Landing/DeveloperCode";
import DeveloperTeam from "../../components/Landing/DeveloperTeam";
import TechStack from "../../components/Landing/DeveloperTechStack";
import LandingNavBar from "../../components/Landing/landingNavcer";


const DevelopersPage = () => {
    return (
        <>
        <div className="">
            <LandingNavBar />
        </div>
        <div className="bg-black">
            <TechStack />
        </div>
        <div className="bg-black">
            <DeveloperTeam />
        </div>
        <div className="">
            <DeveloperCode />
        </div>
        <Footer />
        </>
    )
}

export default DevelopersPage;