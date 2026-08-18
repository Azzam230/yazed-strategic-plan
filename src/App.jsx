import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExecutiveSummary from './components/ExecutiveSummary'
import ProblemSlide from './components/ProblemSlide'
import AudienceSlide from './components/AudienceSlide'
import ContentPillars from './components/ContentPillars'
import ContentTransformation from './components/ContentTransformation'
import CaseStudies from './components/CaseStudies'
import OrganicGrowth from './components/OrganicGrowth'
import VideoStrategy from './components/VideoStrategy'
import PaidAds from './components/PaidAds'
import Retargeting from './components/Retargeting'
import ContentExplorer from './components/ContentExplorer'
import WhatsAppConversion from './components/WhatsAppConversion'
import Differentiation from './components/Differentiation'
import Roadmap from './components/Roadmap'
import FinalSlide from './components/FinalSlide'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <ExecutiveSummary />
        <ProblemSlide />
        <AudienceSlide />
        <ContentPillars />
        <ContentTransformation />
        <CaseStudies />
        <OrganicGrowth />
        <VideoStrategy />
        <PaidAds />
        <Retargeting />
        <ContentExplorer />
        <WhatsAppConversion />
        <Differentiation />
        <Roadmap />
        <FinalSlide />
      </main>
      <Footer />
    </div>
  )
}
