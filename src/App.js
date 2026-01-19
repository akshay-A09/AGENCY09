import { Routes, Route, useLocation } from 'react-router-dom'
import React from 'react'
import './Assets/Sass/Style.scss'
import Home from './Pages/Home'
import About from './Pages/About'
import Connect from './Pages/Connect'
import WorkWithUs from './Pages/WorkWithUs'
import JoinTheTeam from './Pages/JoinTheTeam'
import Careers from './Pages/Careers'
import Testimonials from './Pages/Testimonials'
import Tech from './Pages/Solutions/Tech'
import Content from './Pages/Solutions/Content'
import Design from './Pages/Solutions/Design'
import Media from './Pages/Solutions/Media'
import Production from './Pages/Solutions/Production'
import Keyword from './Pages/Solutions/Keyword'
import CaseStudies from './Pages/Work/CaseStudies'
import OurClients from './Pages/Work/OurClients'
import Ryangroup from './Pages/Work/CaseStudy/Ryangroup'
import TataTrucks from './Pages/Work/CaseStudy/TataTrucks'
import Siyaram from './Pages/Work/CaseStudy/Siyaram'
import Groupsoft from './Pages/Work/CaseStudy/Groupsoft'
import Bitspilani from './Pages/Work/CaseStudy/Bitspilani'
import GodrejLaffaire from './Pages/Work/CaseStudy/GodrejLaffaire'
import BARCIndiaYearbook from './Pages/Work/CaseStudy/BARCIndiaYearbook'
import Tribevibe from './Pages/Work/CaseStudy/Tribevibe'
import ProductCommunicationforRelianceGeneralInsurance from './Pages/Work/CaseStudy/ProductCommunicationforRelianceGeneralInsurance'
import LakmeFashionWeek from './Pages/Work/CaseStudy/LakmeFashionWeek'
import AmericanTourister from './Pages/Work/CaseStudy/AmericanTourister'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import BlogDetail from './Pages/Blog/BlogDetail'
import Blog from './Pages/Blog/Blog'
import Error from './Pages/Error'
import StartProjectThankYou from './Pages/StartProjectThankYou'
import PartnerWithUsThankYou from './Pages/PartnerWithUsThankYou'
import GetInTouchThankYou from './Pages/PartnerWithUsThankYou'
import URLBuilder from './Pages/URLBuilder'
import Sitemap09 from './Pages/Sitemap09'
import MassiveOrganicGrowthforNaharGroupsSearchPresence from './Pages/Work/CaseStudy/MassiveOrganicGrowthforNaharGroupsSearchPresence'
import IndustryLeadingOrganicSearchResultsfromScratchforMahindraSolarize from './Pages/Work/CaseStudy/IndustryLeadingOrganicSearchResultsfromScratchforMahindraSolarize'
import DrivingWebsiteTrafficandGeneratingHighQualityLeadsforMahindraSolarize from './Pages/Work/CaseStudy/DrivingWebsiteTrafficandGeneratingHighQualityLeadsforMahindraSolarize'
import DrivingRecordBreakingLeadGenerationfortheBiggestPropertyExpooftheYearbyCredaiMchi from './Pages/Work/CaseStudy/DrivingRecordBreakingLeadGenerationfortheBiggestPropertyExpooftheYearbyCredaiMchi'
import BoostingAgentRecruitmentwithaTargetedMetaLeadGenerationCampaignforRelianceGeneralInsurance from './Pages/Work/CaseStudy/BoostingAgentRecruitmentwithaTargetedMetaLeadGenerationCampaignforRelianceGeneralInsurance'
import LuxuryMeetsPerformanceDrivingSalesAndAwarenessforZumaAcrossDigitalPlatforms from './Pages/Work/CaseStudy/LuxuryMeetsPerformanceDrivingSalesAndAwarenessforZumaAcrossDigitalPlatforms'
import StrengtheningAbflsSocialMediaPresencewithaHighImpactFollowerGrowthCampaign from './Pages/Work/CaseStudy/StrengtheningAbflsSocialMediaPresencewithaHighImpactFollowerGrowthCampaign'

import Consolidationof91PlusWebsitesandTremendousSEOGrowthforRyanGroup from './Pages/Work/CaseStudy/Consolidationof91PlusWebsitesandTremendousSEOGrowthforRyanGroup'
import EnhancingOrganicUserEngagementforSiyarams from './Pages/Work/CaseStudy/EnhancingOrganicUserEngagementforSiyarams'
import SuccessfulMobileAppDownloadCampaignforDhanvarsha from './Pages/Work/CaseStudy/SuccessfulMobileAppDownloadCampaignforDhanvarsha'
import MultichannelLeadGenCampaignforJPInfra from './Pages/Work/CaseStudy/MultichannelLeadGenCampaignforJPInfra'
import PromotingIndiasBiggestAwardFunctionforRealEstateCREDAIMCHIGoldenPillarAwards from './Pages/Work/CaseStudy/PromotingIndiasBiggestAwardFunctionforRealEstateCREDAIMCHIGoldenPillarAwards'
import LeveragingDigitaltoGenerateOnlineRegistrationsforanEventMCHIMahaPropertyExpo from './Pages/Work/CaseStudy/LeveragingDigitaltoGenerateOnlineRegistrationsforanEventMCHIMahaPropertyExpo'
import PromotingALDOsSS19andWeddingCollections from './Pages/Work/CaseStudy/PromotingALDOsSS19andWeddingCollections'
import NewYearsCampaignHitstheMarkwithSiyaramsLeveragingCelebrityPowerforMaximumImpact from './Pages/Work/CaseStudy/NewYearsCampaignHitstheMarkwithSiyaramsLeveragingCelebrityPowerforMaximumImpact'
import ChineseWoksPostLockdownRevivalInfluencerCampaignBoostsStarterSpread from './Pages/Work/CaseStudy/ChineseWoksPostLockdownRevivalInfluencerCampaignBoostsStarterSpread'
import OctarineOrganicsEnchantingMushroomMagicBoxwithInnovativePackagingDesign from './Pages/Work/CaseStudy/OctarineOrganicsEnchantingMushroomMagicBoxwithInnovativePackagingDesign'
import CodashopGetsGamersGroovingEngagingBGMIPlayerswithaUniqueRapSongandDanceContest from './Pages/Work/CaseStudy/CodashopGetsGamersGroovingEngagingBGMIPlayerswithaUniqueRapSongandDanceContest'
import Podcast from './Pages/Work/CaseStudy/Podcast'
import DigitalAds from './Pages/Work/CaseStudy/DigitalAds'
import CorporateVideos from './Pages/Work/CaseStudy/CorporateVideos'
import ProductShoot from './Pages/Work/CaseStudy/ProductShoot'
import RealEstateVideos from './Pages/Work/CaseStudy/RealEstateVideos'
import ReelsVideos from './Pages/Work/CaseStudy/ReelsVideos'
import WebSeries from './Pages/Work/CaseStudy/WebSeries'
import TeaserVideos from './Pages/Work/CaseStudy/TeaserVideos'
import CampaignVideos from './Pages/Work/CaseStudy/CampaignVideos'
import AI from './Pages/Ai'

// New Dec 2025
import RgiSharmajiVermaji from './Pages/Work/CaseStudy/RgiSharmajiVermaji'
import FreyaaWovenWithLove from './Pages/Work/CaseStudy/FreyaaWovenWithLove'
import PretxMI from './Pages/Work/CaseStudy/PretxMI'
import AdityaBirlaCapital from './Pages/Work/CaseStudy/AdityaBirlaCapital'
import GodrejLaffaireOnGroundEvent from './Pages/Work/CaseStudy/GodrejLaffaireOnGroundEvent'
import RgiBlueyChatbot from './Pages/Work/CaseStudy/RgiBlueyChatbot'
import RgiRHealthBeatMagazine from './Pages/Work/CaseStudy/RgiRHealthBeatMagazine'
import PretAManger149Campaign from './Pages/Work/CaseStudy/PretAManger149Campaign'
import PretFestivePackagingDiwali from './Pages/Work/CaseStudy/PretFestivePackagingDiwali'
import RangiloRe from './Pages/Work/CaseStudy/RangiloRe'
// New Dec 2025

// SEO
import IGCBDualCountrySEO from './Pages/Work/CaseStudy/FixingSpeedAuthorityVisibilityForIGCBDualCountrySEOSuccess'
import GroupsoftUS from './Pages/Work/CaseStudy/FromTechnicalErrorsToOrganicWinsForGroupsoftUS'
import Amazonas4U from './Pages/Work/CaseStudy/BoostingOrganicGrowthForAmazonas4UDigitalClimb'
import SiyaramSEO from './Pages/Work/CaseStudy/AcceleratingOrganicSuccessForSiyaramsSpeedAndSearchGrowth'
import ApolloEnergy from './Pages/Work/CaseStudy/FromLowVisibilityToIndustryAuthorityForApolloEnergyAnalytics'
import SiyaramGMB from './Pages/Work/CaseStudy/MakingSiyaramsStoresEasyToFindWith350PlusGMBListings'
import ReavivaHolisticHealth from './Pages/Work/CaseStudy/OrganicGrowthForReavivaHolisticHealth'
import DesigningFluidDigitalExperiencesForConnectedTVCloudTVOS from './Pages/Work/CaseStudy/DesigningFluidDigitalExperiencesForConnectedTVCloudTVOS'
import RevampingLuxeGiftCardForSpeedStyleAndEngagement from './Pages/Work/CaseStudy/RevampingLuxeGiftCardForSpeedStyleAndEngagement'
import WhereBrandMeetsPerformanceInWebflowArchitectureTvarana from './Pages/Work/CaseStudy/WhereBrandMeetsPerformanceInWebflowArchitectureTvarana'
import HighPerformanceMarketingWebsiteForAdleo from './Pages/Work/CaseStudy/HighPerformanceMarketingWebsiteForAdleo'
import DesigningAScalableContentDrivenEducationWebsiteForEduEdgeGlobal from './Pages/Work/CaseStudy/DesigningAScalableContentDrivenEducationWebsiteForEduEdgeGlobal'
import Interactive3DGameExperienceForTataMotorsAceProLaunch from './Pages/Work/CaseStudy/Interactive3DGameExperienceForTataMotorsAceProLaunch'
import BuildingTokosFirstDigitalFundraisingPlatformforSchooqlsAcrossNewZealand from './Pages/Work/CaseStudy/BuildingTokosFirstDigitalFundraisingPlatformforSchoolsAcrossNewZealand'
import TransformingDetourozintoaConversionDrivenCampervanBookingPlatform from './Pages/Work/CaseStudy/TransformingDetourozintoaConversionDrivenCampervanBookingPlatform'

// SEO 

 
function App() {
  const location = useLocation();
  return (
    <div className="App">
      
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/connect' element={<Connect />} />
          <Route exact path='/service/design' element={<Design />} />
          <Route exact path='/work-with-us' element={<WorkWithUs />} />
          <Route exact path='/join-the-team' element={<JoinTheTeam />} />
          <Route exact path='/careers' element={<Careers />} />
          <Route exact path='/testimonials' element={<Testimonials />} />
          <Route exact path='/url-builder' element={<URLBuilder />} />

          <Route exact path='/solutions/tech' element={<Tech />} />
          <Route exact path='/solutions/content' element={<Content />} />
          <Route exact path='/solutions/design' element={<Design />} />
          <Route exact path='/solutions/performance-marketing' element={<Media />} />
          <Route exact path='/solutions/production' element={<Production />} />
          <Route exact path='/solutions/keyword' element={<Keyword />} />
          <Route exact path='/work/case-studies/tata-trucks' element={<TataTrucks />} />
          <Route exact path='/work/case-studies/ryangroup' element={<Ryangroup />} />
          <Route exact path='/work/case-studies/groupsoft' element={<Groupsoft />} />
          <Route exact path='/work/case-studies/siyaram' element={<Siyaram />} />
          <Route exact path='/work/case-studies/bits-pilani' element={<Bitspilani />} />
          <Route exact path='/work/case-studies/godrej-laffaire' element={<GodrejLaffaire />} />
          <Route exact path='/work/case-studies/barc-india-yearbook' element={<BARCIndiaYearbook />} />
          <Route exact path='/work/case-studies/tribevibe' element={<Tribevibe />} />
          <Route exact path='/work/case-studies/product-communication-for-reliance-general-insurance' element={<ProductCommunicationforRelianceGeneralInsurance />} />
          <Route exact path='/work/case-studies/lakme-fashionweek' element={<LakmeFashionWeek />} />
          <Route exact path='/work/case-studies/american-tourister' element={<AmericanTourister />} />
          <Route exact path='/work/case-studies' element={<CaseStudies />} />
          <Route exact path='/work/our-clients' element={<OurClients />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/sitemap' element={<Sitemap09 />} />
          <Route exact path='*' element={<Error />} />
          <Route exact path='/blog/' element={<Blog />} />
          <Route exact path='/blog/:cat_slug' element={<Blog />} />
          <Route exact path='/blog/blog-detail' element={<BlogDetail />} />
          <Route exact path="/blog/:cat_slug/:post_id" element={<BlogDetail />} /> {/* Dynamic blog detail route */}
          <Route exact path='/work/case-studies/massive-organic-growth-for-nahar-groups-search-presence' element={<MassiveOrganicGrowthforNaharGroupsSearchPresence />} />
          <Route exact path='/work/case-studies/consolidation-of-91-plus-websites-and-tremendous-seo-growth-for-ryan-group' element={<Consolidationof91PlusWebsitesandTremendousSEOGrowthforRyanGroup />} />

          <Route exact path='/work/case-studies/industry-leading-organic-search-results-from-scratch-for-mahindra-solarize' element={<IndustryLeadingOrganicSearchResultsfromScratchforMahindraSolarize />} />
          <Route exact path='/work/case-studies/driving-website-traffic-and-generating-high-quality-leads-for-mahindra-solarize' element={<DrivingWebsiteTrafficandGeneratingHighQualityLeadsforMahindraSolarize />} />
          <Route exact path='/work/case-studies/driving-record-breaking-lead-generation-for-the-biggest-property-expo-of-the-year-by-credai-mchi' element={<DrivingRecordBreakingLeadGenerationfortheBiggestPropertyExpooftheYearbyCredaiMchi />} />
          <Route exact path='/work/case-studies/boosting-agent-recruitment-with-a-targeted-meta-lead-generation-campaign-for-reliance-general-insurance' element={<BoostingAgentRecruitmentwithaTargetedMetaLeadGenerationCampaignforRelianceGeneralInsurance />} />
          <Route exact path='/work/case-studies/luxury-meets-performance-driving-sales-and-awareness-for-zuma-across-digital-platforms' element={<LuxuryMeetsPerformanceDrivingSalesAndAwarenessforZumaAcrossDigitalPlatforms />} />

          <Route exact path='/work/case-studies/strengthening-abfls-social-media-presence-with-a-high-impact-follower-growth-campaign' element={<StrengtheningAbflsSocialMediaPresencewithaHighImpactFollowerGrowthCampaign />} />

          <Route exact path='/work/case-studies/enhancing-organic-users-engagement-for-siyarams' element={<EnhancingOrganicUserEngagementforSiyarams />} />
          <Route exact path='/work/case-studies/successful-mobile-app-download-campaign-for-dhanvarsha' element={<SuccessfulMobileAppDownloadCampaignforDhanvarsha/>} />
          <Route exact path='/work/case-studies/multi-channel-lead-gen-campaign-for-jpinfa' element={<MultichannelLeadGenCampaignforJPInfra/>} />
          <Route exact path='/work/case-studies/promoting-indias-biggest-award-function-for-real-estate-credai-mchi-golden-pillar-awards' element={<PromotingIndiasBiggestAwardFunctionforRealEstateCREDAIMCHIGoldenPillarAwards/>} />
        <Route exact path='/work/case-studies/leveraging-digital-to-generate-online-registrations-for-an-event-mchi-maha-property-expo' element={<LeveragingDigitaltoGenerateOnlineRegistrationsforanEventMCHIMahaPropertyExpo/>} />
        <Route exact path='/work/case-studies/promoting-aldos-ss19-and-wedding-collections' element={<PromotingALDOsSS19andWeddingCollections/>} />
        <Route exact path='/work/case-studies/new-years-campaign-hits-the-mark-with-siyarams-leveraging-celebrity-power-for-maximum-impact' element={<NewYearsCampaignHitstheMarkwithSiyaramsLeveragingCelebrityPowerforMaximumImpact/>} />
        <Route exact path='/work/case-studies/chinese-woks-post-lockdown-revival-influencer-campaign-boosts-starter-spread' element={<ChineseWoksPostLockdownRevivalInfluencerCampaignBoostsStarterSpread/>} />
        <Route exact path='/work/case-studies/octarine-organics-enchanting-mushroom-magic-box-with-innovative-packaging-design' element={<OctarineOrganicsEnchantingMushroomMagicBoxwithInnovativePackagingDesign/>}/>
        <Route exact path='/work/case-studies/codashop-gets-gamers-grooving-engaging-bgmi-players-with-a-unique-rap-song-and-dance-contest' element={<CodashopGetsGamersGroovingEngagingBGMIPlayerswithaUniqueRapSongandDanceContest/>}/>
        <Route exact path='/work/case-studies/podcast' element={<Podcast/>}/>
        <Route exact path='/work/case-studies/digital-ads' element={<DigitalAds/>}/>
        <Route exact path='/work/case-studies/corporate-videos' element={<CorporateVideos/>}/>
        <Route exact path='/work/case-studies/product-shoot' element={<ProductShoot/>}/>
        <Route exact path='/work/case-studies/real-estate-videos' element={<RealEstateVideos/>}/>
        <Route exact path='/work/case-studies/reel-videos' element={<ReelsVideos/>}/>
        <Route exact path='/work/case-studies/web-series' element={<WebSeries/>}/>
        <Route exact path='/work/case-studies/teaser-videos' element={<TeaserVideos/>}/>
        <Route exact path='/work/case-studies/campaign-videos' element={<CampaignVideos/>}/>

        <Route exact path='/work/case-studies/pret-x-mi' element={<PretxMI/>}/>
        <Route exact path='/work/case-studies/aditya-birla-capital' element={<AdityaBirlaCapital/>}/>
        <Route exact path='/work/case-studies/rgi-sharmaji-vermaji' element={<RgiSharmajiVermaji/>}/>
        <Route exact path='/work/case-studies/godrej-laffaire-on-ground-event' element={<GodrejLaffaireOnGroundEvent/>}/>
        <Route exact path='/work/case-studies/freyaa-woven-with-love' element={<FreyaaWovenWithLove/>}/>
        <Route exact path='/work/case-studies/rgi-bluey-chatbot' element={<RgiBlueyChatbot/>}/>
         <Route exact path='/work/case-studies/rgi-r-health-beat-magazine' element={<RgiRHealthBeatMagazine/>}/>
            <Route exact path='/work/case-studies/pret-a-manger-149-campaign' element={<PretAManger149Campaign/>}/>
          <Route exact path='/work/case-studies/pret-festive-packaging-diwali' element={<PretFestivePackagingDiwali/>}/> 
           <Route exact path='/work/case-studies/rangilo-re' element={<RangiloRe/>}/>     

       <Route exact path='/start-project-thank-you' element={<StartProjectThankYou/>}/>
       <Route exact path='/partner-with-us-thank-you' element={<PartnerWithUsThankYou/>}/>
       <Route exact path='/get-in-touch-thank-you' element={<GetInTouchThankYou/>}/>
       <Route exact path='/ai' element={<AI/>}/>

       <Route exact path="/work/case-studies/igcb-dual-country-seo-success" element={<IGCBDualCountrySEO />} />
      <Route exact path="/work/case-studies/groupsoft-us-organic-seo-recovery" element={<GroupsoftUS />} />
      <Route exact path="/work/case-studies/amazonas-4u-organic-growth" element={<Amazonas4U />} />
      <Route exact path="/work/case-studies/siyaram-website-speed-seo-growth" element={<SiyaramSEO />} />
      <Route exact path="/work/case-studies/apollo-energy-analytics-seo-authority" element={<ApolloEnergy />} />
      <Route exact path="/work/case-studies/siyaram-gmb-local-seo-management" element={<SiyaramGMB />} />
      <Route exact path="/work/case-studies/reaviva-holistic-health-seo-growth" element={<ReavivaHolisticHealth />} />
      <Route exact path="/work/case-studies/designing-fluid-digital-experiences-for-connected-tv-cloudtvos" element={<DesigningFluidDigitalExperiencesForConnectedTVCloudTVOS />} />
      <Route exact path="/work/case-studies/revamping-luxe-gift-card-for-speed-style-and-engagement" element={<RevampingLuxeGiftCardForSpeedStyleAndEngagement />} />
      <Route exact path="/work/case-studies/where-brand-meets-performance-in-webflow-architecture-tvarana" element={<WhereBrandMeetsPerformanceInWebflowArchitectureTvarana />} />
      <Route exact path="/work/case-studies/high-performance-marketing-website-for-adleo" element={<HighPerformanceMarketingWebsiteForAdleo />} />
      <Route exact path="/work/case-studies/designing-a-scalable-content-driven-education-website-for-eduedge-global" element={<DesigningAScalableContentDrivenEducationWebsiteForEduEdgeGlobal />} />
      <Route exact path="/work/case-studies/interactive-3d-game-experience-for-tata-motors-ace-pro-launch" element={<Interactive3DGameExperienceForTataMotorsAceProLaunch />} />

      
          <Route exact path='/work/case-studies/building-tokos-first-digital-fundraising-platform-for-schools-across-new-zealand' element={<BuildingTokosFirstDigitalFundraisingPlatformforSchooqlsAcrossNewZealand />} />
          <Route exact path='/work/case-studies/transforming-detouroz-into-a-conversion-driven-campervan-booking-platform' element={<TransformingDetourozintoaConversionDrivenCampervanBookingPlatform />} />
      
        </Routes>
    </div>
  );
}

export default App;