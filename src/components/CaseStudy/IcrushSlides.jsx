import Button from '../Home/Button'
import { GridIcon, TargetIcon, WrenchIcon, ExternalLinkIcon } from '../Home/Icons'
import SlideShell from './SlideShell'
import { ZoomableImage } from './CaseLightbox'
import NextRoomCards from './NextRoomCards'
import heroImg from '../../assets/icrush/hero.jpg'
import problemImg from '../../assets/icrush/problem.jpg'
import analysisImg from '../../assets/icrush/analysis.jpg'
import processLogoImg from '../../assets/icrush/process-logo.png'
import processImg from '../../assets/icrush/process.jpg'
import wireframeImg from '../../assets/icrush/wireframe.jpg'
import designOneImg from '../../assets/icrush/design-one.jpg'
import designTwoImg from '../../assets/icrush/design-two.jpg'
import responsiveImg from '../../assets/icrush/responsive.jpg'

const CASE_TAG = 'ICRUSH CASE STUDY'
const FOOTER_LABEL = 'iCrush — A playful platform for anonymous admiration'

function IcrushSlideShell(props) {
  return <SlideShell tag={CASE_TAG} footerLabel={FOOTER_LABEL} {...props} />
}

const HERO_TAGS = ['2025', 'Figma', 'User Flow Design', 'Branding & Logo Design', 'Illustrator']

export function HeroSlide() {
  return (
    <IcrushSlideShell index="01" name="HERO" roundedSide="left">
      <div className="mh-case-hero">
        <div className="mh-case-hero__text">
          <span className="mh-case-hero__meta">UX/UI + brand identity</span>
          <h1 className="mh-case-hero__title">ICRUSH</h1>
          <p className="mh-case-hero__tagline">A playful platform for anonymous admiration</p>
          <div className="mh-case-hero__tags">
            {HERO_TAGS.map((tag) => (
              <span key={tag} className="mh-case-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mh-case-hero__image-wrap">
          <ZoomableImage
            src={heroImg}
            alt="iCrush app interface preview"
            className="mh-case-hero__image"
          />
        </div>
      </div>
    </IcrushSlideShell>
  )
}

export function OverviewSlide() {
  return (
    <IcrushSlideShell index="02" name="OVERVIEW">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">Overview</h2>
        <p className="mh-case-overview__text">
          iCrush is a concept digital platform built around a simple but emotionally loaded idea:
          having a crush without pressure, exposure, or obligation. This is not a redesign. This
          project was created from scratch, from the idea and naming to logo, UX logic, and UI
          system. The goal was to design a space where curiosity, playfulness, and emotional
          safety coexist.
        </p>
      </div>
    </IcrushSlideShell>
  )
}

export function ChallengeSlide() {
  return (
    <IcrushSlideShell index="03" name="CHALLENGE">
      <div className="mh-case-challenge">
        <div className="mh-case-challenge__context">
          <span className="mh-case-label">PRODUCT CONTEXT</span>
          <p className="mh-case-challenge__p">
            iCrush is an interactive gaming platform where users participate in comparative
            matches (Battles) and tournaments (Tournaments), shaping rankings through quick
            choices between two options.
          </p>
          <p className="mh-case-challenge__p">
            The product targets a 14+ audience interested in gaming mechanics and the Web3
            ecosystem. The platform includes FTN integration and digital asset elements.
          </p>
          <div className="mh-case-challenge__image-wrap">
            <ZoomableImage
              src={problemImg}
              alt="iCrush battle matchup screen"
              className="mh-case-challenge__image"
            />
          </div>
        </div>

        <div className="mh-case-strategy-cards">
          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <TargetIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Business Goal</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              At the development stage, the primary goals of the project were:
            </p>
            <ul className="mh-case-bullets">
              <li>Create an engaging, viral gaming experience</li>
              <li>Build a Web3-oriented audience</li>
              <li>Establish the foundation for a future FTN ecosystem</li>
            </ul>
            <p className="mh-case-strategy-card__closing">
              Monetization was not a priority at the initial stage. The focus was on engagement
              and gameplay experience.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <GridIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Problem Statement</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              During the redesign phase, the product faced several challenges:
            </p>
            <ul className="mh-case-bullets">
              <li>The game mechanics were not intuitive enough</li>
              <li>The interface structure overloaded users</li>
              <li>There was no clear visual hierarchy</li>
              <li>Web3 elements were not seamlessly integrated into gameplay</li>
            </ul>
            <p className="mh-case-strategy-card__closing">
              This reduced engagement and complicated the first user experience.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <WrenchIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">UX Goals</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              As part of the redesign, the following objectives were set:
            </p>
            <ul className="mh-case-bullets">
              <li>Simplify the onboarding process</li>
              <li>Make Battles and Tournaments visually distinguishable</li>
              <li>Create a UI system suitable for both Web and Mobile</li>
              <li>Enhance the emotional impact of the interface</li>
              <li>Integrate FTN elements without overloading the UX</li>
            </ul>
          </div>
        </div>
      </div>
    </IcrushSlideShell>
  )
}

const COMPETITORS = [
  'Ranker — list-based crowd voting',
  'BracketFights — tournament brackets and matchups',
  'TierMaker — tier lists and drag-and-drop rankings',
  'TierMaker Live — live voting during events',
  'Playbuzz (Hot or Not) — casual quiz-style comparisons',
]

export function ResearchSlide() {
  return (
    <IcrushSlideShell index="04" name="RESEARCH">
      <div className="mh-case-research">
        <div className="mh-case-research__text">
          <h2 className="mh-case-research__title">Competitive analysis</h2>

          <div className="mh-case-research__block">
            <span className="mh-case-label">MARKET OVERVIEW</span>
            <p className="mh-case-research__p">
              The market is dominated by voting platforms, ranking lists, and tournament-based
              comparisons. Most solutions focus on content consumption rather than player
              experience.
            </p>
            <p className="mh-case-research__p">
              iCrush positions itself at the intersection of game mechanics, social comparison,
              and Web3 interaction.
            </p>
          </div>

          <div className="mh-case-research__block">
            <span className="mh-case-label">KEY COMPETITORS</span>
            <div className="mh-case-research__competitors">
              {COMPETITORS.map((item) => (
                <div key={item} className="mh-case-competitor-row">
                  <span className="mh-case-dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mh-case-callout">
            <span className="mh-case-label">MARKET INSIGHT</span>
            <p className="mh-case-callout__text">
              Most competitor platforms are built around content consumption, not interactive
              participation.
            </p>
          </div>
        </div>

        <div className="mh-case-research__image-wrap">
          <ZoomableImage
            src={analysisImg}
            alt="Competitive analysis board"
            className="mh-case-research__image"
          />
        </div>
      </div>
    </IcrushSlideShell>
  )
}

export function ProcessSlide() {
  return (
    <IcrushSlideShell index="05" name="PROCESS">
      <div className="mh-case-process">
        <div className="mh-case-process__card">
          <ZoomableImage
            src={processLogoImg}
            alt="iCrush logo exploration"
            className="mh-case-process__logo"
          />
          <div className="mh-case-process__step">
            <span className="mh-case-process__step-index">01</span>
            <p className="mh-case-process__step-text">
              The project started with building a strong visual foundation. Before designing the
              product itself, I focused on creating a recognizable brand identity that would
              reflect the playful, social, and Web3-oriented nature of iCrush.
            </p>
          </div>
          <div className="mh-case-process__step">
            <span className="mh-case-process__step-index">02</span>
            <p className="mh-case-process__step-text">
              Before moving into interface design, I mapped the key user journeys and platform
              structure. This stage focused on understanding how users discover profiles, interact
              with matches, navigate features, and complete core actions with minimal friction.
            </p>
          </div>
        </div>
        <div className="mh-case-process__image-wrap">
          <ZoomableImage
            src={processImg}
            alt="User flow and site map diagrams"
            className="mh-case-process__image"
          />
        </div>
      </div>
    </IcrushSlideShell>
  )
}

export function WireframesSlide() {
  return (
    <IcrushSlideShell index="06" name="WIREFRAMES">
      <div className="mh-case-wireframes">
        <div className="mh-case-wireframes__text">
          <h2 className="mh-case-wireframes__title">Wireframing Stage</h2>
          <p className="mh-case-wireframes__p">
            Before moving into visual design, I started by creating low-fidelity wireframes to
            define the core structure of the iCrush platform.
          </p>
          <p className="mh-case-wireframes__p">
            At this stage, the focus was on layout, content hierarchy, and user flow — without
            colors, imagery, or visual styling. This allowed me to concentrate on how users
            interact with the product, how sections relate to each other, and how key actions are
            positioned across the page.
          </p>
          <p className="mh-case-wireframes__p">
            Working in wireframes helped validate the logic of the interface early and set a clear
            foundation for the visual direction that followed.
          </p>
        </div>
        <div className="mh-case-wireframes__image-wrap">
          <ZoomableImage src={wireframeImg} alt="Low-fidelity wireframes of the iCrush mobile app" />
        </div>
      </div>
    </IcrushSlideShell>
  )
}

export function UIShowcaseSlide() {
  return (
    <IcrushSlideShell index="07" name="UI SHOWCASE">
      <div className="mh-case-ui-showcase">
        <div className="mh-case-ui-showcase__text">
          <h2 className="mh-case-ui-showcase__title">High-Fidelity UI Design</h2>
          <p className="mh-case-ui-showcase__p">
            The approved wireframes evolved into polished interfaces that combined the brand
            identity with a clean and intuitive user experience.
          </p>
          <p className="mh-case-ui-showcase__p">
            Special attention was given to visual hierarchy, readability, and creating an engaging
            social experience.
          </p>
        </div>
        <div className="mh-case-ui-showcase__images">
          <div className="mh-case-ui-showcase__image-wrap">
            <ZoomableImage src={designOneImg} alt="High-fidelity iCrush interface, screen one" />
          </div>
          <div className="mh-case-ui-showcase__image-wrap">
            <ZoomableImage src={designTwoImg} alt="High-fidelity iCrush interface, screen two" />
          </div>
        </div>
      </div>
    </IcrushSlideShell>
  )
}

export function ResponsiveSlide() {
  return (
    <IcrushSlideShell index="08" name="RESPONSIVE">
      <div className="mh-case-responsive">
        <div className="mh-case-responsive__text">
          <h2 className="mh-case-responsive__title">Responsive Design</h2>
          <p className="mh-case-responsive__p">
            The platform was optimized across multiple screen sizes to provide a seamless
            experience on desktop, tablet, and mobile devices.
          </p>
          <p className="mh-case-responsive__p">
            Layouts, components, and interactions were adapted while maintaining visual
            consistency throughout the ecosystem.
          </p>
        </div>
        <div className="mh-case-responsive__image-wrap">
          <ZoomableImage src={responsiveImg} alt="iCrush interface across desktop, tablet and mobile" />
        </div>
      </div>
    </IcrushSlideShell>
  )
}

export function StatementSlide() {
  return (
    <IcrushSlideShell index="09" name="STATEMENT">
      <div className="mh-case-statement">
        <div className="mh-case-statement__col">
          <p className="mh-case-statement__p">
            iCrush is a Web3 social platform designed to create meaningful digital connections
            through a playful, engaging, and community-driven experience.
          </p>
          <p className="mh-case-statement__p">
            The challenge was to build a product that feels approachable and emotionally engaging
            while introducing users to blockchain-powered interactions. Many Web3 products
            prioritize technology over usability, creating unnecessary complexity and barriers for
            adoption.
          </p>
          <p className="mh-case-statement__p">
            To address this, I focused on creating a strong and memorable brand identity first,
            followed by a user-centered experience that simplifies interactions and makes the
            platform feel intuitive from the very first screen.
          </p>
        </div>
        <div className="mh-case-statement__col">
          <p className="mh-case-statement__p">
            As the sole designer on the project, I was responsible for the complete creative and
            product design process, including logo design, visual identity, UX strategy, user
            flows, wireframing, design systems, interface design, illustrations, and responsive
            experiences.
          </p>
          <p className="mh-case-statement__p">
            The result is a cohesive digital ecosystem that combines branding, product design, and
            modern Web3 aesthetics into an engaging social experience that feels both accessible
            and visually distinctive.
          </p>
          <Button
            variant="primary"
            className="mh-case-statement__cta"
            showArrow={false}
            href="https://icrush.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon size={16} />
            <span style={{ marginLeft: 8 }}>Live Website</span>
          </Button>
        </div>
      </div>
    </IcrushSlideShell>
  )
}

export function NextProjectSlide({ onNavigate }) {
  return (
    <IcrushSlideShell index="10" name="NEXT PROJECT" roundedSide="right">
      <NextRoomCards exclude="iCrush" onNavigate={onNavigate} />
    </IcrushSlideShell>
  )
}
