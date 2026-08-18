import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExecutiveSummary from './components/ExecutiveSummary'
import BrandPositioning from './components/BrandPositioning'
import ContentPillars from './components/ContentPillars'
import MetricsGrid from './components/MetricsGrid'
import ContentSeries from './components/ContentSeries'
import PlatformStrategy from './components/PlatformStrategy'
import Roadmap from './components/Roadmap'
import BudgetAllocation from './components/BudgetAllocation'
import KPIDashboard from './components/KPIDashboard'
import GrowthFunnel from './components/GrowthFunnel'
import WhatsAppProtocol from './components/WhatsAppProtocol'
import ContentCalendar from './components/ContentCalendar'
import SuccessTimeline from './components/SuccessTimeline'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-dark">
      <Navbar />
      <Hero />
      <ExecutiveSummary />
      <BrandPositioning />
      <ContentPillars />
      <MetricsGrid />
      <ContentSeries />
      <PlatformStrategy />
      <Roadmap />
      <BudgetAllocation />
      <KPIDashboard />
      <ContentCalendar />
      <GrowthFunnel />
      <WhatsAppProtocol />
      <SuccessTimeline />
      <Footer />
    </div>
  )
}
