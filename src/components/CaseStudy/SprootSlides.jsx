import Button from '../Home/Button'
import { WaveIcon, GridIcon, TargetIcon, OrbitIcon, BoltIcon, LayoutIcon, ExternalLinkIcon } from '../Home/Icons'
import SlideShell from './SlideShell'
import { ZoomableImage } from './CaseLightbox'
import NextRoomCards from './NextRoomCards'
import heroImg from '../../assets/sproot/hero.jpg'
import sketchingImg from '../../assets/sproot/sketching.jpg'
import designSystemImg from '../../assets/sproot/design-system.jpg'
import dashboardImg from '../../assets/sproot/dashboard.jpg'
import interfaceOneImg from '../../assets/sproot/interface-one.jpg'
import interfaceTwoImg from '../../assets/sproot/interface-two.jpg'
import statementImg from '../../assets/sproot/statement.jpg'

const CASE_TAG = 'SPROOT CASE STUDY'
const FOOTER_LABEL = 'Sproot — Media intelligence, structured and calm'
const TOTAL = 9

function SprootSlideShell(props) {
  return <SlideShell tag={CASE_TAG} footerLabel={FOOTER_LABEL} total={TOTAL} {...props} />
}

const HERO_TAGS = ['2025', 'Web & Mobile', 'Figma', 'Photoshop']

export function HeroSlide() {
  return (
    <SprootSlideShell index="01" name="HERO" roundedSide="left">
      <div className="mh-case-hero">
        <div className="mh-case-hero__text">
          <span className="mh-case-hero__meta">ux/ui case study</span>
          <h1 className="mh-case-hero__title">SPROOT</h1>
          <p className="mh-case-hero__tagline">
            Sproot is a digital platform for monitoring, analyzing, and structuring media
            content. The product helps companies, analysts, and PR specialists track mentions,
            analyze information trends, and make data-driven decisions rather than relying on
            intuition.
          </p>
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
            alt="SPROOT case study hero screen"
            className="mh-case-hero__image"
          />
        </div>
      </div>
    </SprootSlideShell>
  )
}

export function OverviewSlide() {
  return (
    <SprootSlideShell index="02" name="OVERVIEW">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">From noise to meaningful signals.</h2>
          <p className="mh-case-overview__text">
            The project focuses on transforming chaotic media streams into a structured,
            manageable system with clear and intuitive visual analytics, helping users quickly
            identify trends, monitor brand presence, and make informed decisions with confidence.
          </p>
        </div>

        <div className="mh-case-strategy-cards">
          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <WaveIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Signal</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Help users understand what needs attention first.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <GridIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Structure</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Group metrics, sources, and reports into predictable modules.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <TargetIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Confidence</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Make monitoring insights feel trustworthy and easy to act on.
            </p>
          </div>
        </div>
      </div>
    </SprootSlideShell>
  )
}

export function RoleSlide() {
  return (
    <SprootSlideShell index="03" name="MY ROLE">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">
          Led the complete redesign of the SPROOT ecosystem.
        </h2>
        <p className="mh-case-overview__text">
          I was responsible for the end-to-end redesign of SPROOT, covering both UX and UI. The
          work included researching the existing brand, building a refreshed visual direction,
          designing a scalable UI kit, creating product-specific illustrations, and producing
          supporting marketing and presentation materials.
        </p>
        <ul className="mh-case-bullets mh-case-bullets--on-dark">
          <li>Conducted UX research and redesigned key user flows across the platform.</li>
          <li>Created a new UI kit and visual system aligned with the SPROOT brand.</li>
          <li>Designed the complete interface for web and mobile experiences.</li>
          <li>Created custom illustrations and visual assets specifically for SPROOT.</li>
          <li>Produced social media visuals, presentations, and supporting visual effects.</li>
        </ul>
      </div>
    </SprootSlideShell>
  )
}

export function ProblemSlide() {
  return (
    <SprootSlideShell index="04" name="PROBLEM">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Three core challenges shaped the redesign.</h2>
          <p className="mh-case-overview__text">
            Research revealed recurring issues in how organizations collect, monitor, and
            interpret media information. These challenges became the foundation of the redesign
            process.
          </p>
        </div>

        <div className="mh-case-strategy-cards">
          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <OrbitIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Fragmented Media Intelligence</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Organizations struggle with scattered information across hundreds of media outlets,
              social platforms, and news portals. Data exists, but it is fragmented, unstructured,
              and difficult to interpret as a whole.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <BoltIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Reactive, Not Proactive</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Most companies respond to media events only after they escalate. Without real-time
              tracking and trend visibility, strategic decisions are often delayed.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <LayoutIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Complex Data Interpretation</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Raw data alone does not create insight. Complex analytical tools can overwhelm
              users, making interpretation slower and reducing decision-making efficiency.
            </p>
          </div>
        </div>
      </div>
    </SprootSlideShell>
  )
}

export function SolutionsSlide() {
  return (
    <SprootSlideShell index="05" name="SOLUTIONS">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">
            Three solutions addressed the core product challenges.
          </h2>
        </div>

        <div className="mh-case-strategy-cards">
          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">1</span>
              <h3 className="mh-case-strategy-card__title">Centralized intelligence</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Sproot centralizes multi-source media data into a unified intelligence system.
              Through structured dashboards, smart filtering, and visual analytics, the platform
              transforms fragmented information into a coherent, decision-ready overview.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">2</span>
              <h3 className="mh-case-strategy-card__title">Continuous monitoring</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Sproot enables continuous monitoring with dynamic trend visualization and automated
              alerts. Users can detect spikes, shifts in narrative, and emerging patterns early,
              allowing proactive, data-driven action rather than reactive response.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">3</span>
              <h3 className="mh-case-strategy-card__title">Clean, minimal interface</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              The platform applies a clean, minimal interface with clear hierarchy and contextual
              visualizations. By reducing cognitive load and presenting only actionable metrics,
              Sproot turns complex datasets into intuitive intelligence.
            </p>
          </div>
        </div>
      </div>
    </SprootSlideShell>
  )
}

const GALLERY_ITEMS = [
  { src: sketchingImg, caption: 'Sketching the concept', alt: 'SPROOT sketching process' },
  {
    src: designSystemImg,
    caption: 'Design system & screens',
    alt: 'SPROOT design system and screens',
  },
  { src: dashboardImg, caption: 'Dashboard breakdown', alt: 'SPROOT dashboard breakdown' },
  {
    src: interfaceOneImg,
    caption: 'Interface view',
    alt: 'SPROOT additional interface view',
  },
  {
    src: interfaceTwoImg,
    caption: 'Product screen',
    alt: 'SPROOT additional product screen',
  },
]

export function ProcessSlide() {
  return (
    <SprootSlideShell index="06" name="PROCESS">
      <div className="mh-case-gallery">
        {GALLERY_ITEMS.map((item) => (
          <div className="mh-case-gallery__item" key={item.src}>
            <span className="mh-case-gallery__caption">{item.caption}</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={item.src} alt={item.alt} />
            </div>
          </div>
        ))}
      </div>
    </SprootSlideShell>
  )
}

export function PrototypeSlide() {
  return (
    <SprootSlideShell index="07" name="PROTOTYPE">
      <div className="mh-case-prototype">
        <p className="mh-case-prototype__intro">
          An interactive prototype was used to validate flows and hand off detailed interaction
          behavior before development.
        </p>
        <div className="mh-case-prototype__frame">
          <iframe
            src="https://marvelapp.com/prototype/g9jeedd?emb=1&iosapp=false&frameless=false"
            title="SPROOT interactive prototype"
            allowTransparency="true"
          />
        </div>
      </div>
    </SprootSlideShell>
  )
}

export function StatementSlide() {
  return (
    <SprootSlideShell index="08" name="STATEMENT">
      <div className="mh-case-statement">
        <div className="mh-case-statement__col">
          <p className="mh-case-statement__p">
            The final direction positions Sproot as a clear, structured intelligence workspace:
            calm enough for daily monitoring, but strong enough to support fast decisions when
            media signals become urgent.
          </p>
          <Button
            variant="primary"
            className="mh-case-statement__cta"
            showArrow={false}
            href="https://www.sproot.am"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon size={16} />
            <span style={{ marginLeft: 8 }}>Live Website</span>
          </Button>
        </div>
        <div className="mh-case-research__image-wrap">
          <ZoomableImage src={statementImg} alt="SPROOT brand statement visual" />
        </div>
      </div>
    </SprootSlideShell>
  )
}

export function NextProjectSlide({ onNavigate }) {
  return (
    <SprootSlideShell index="09" name="NEXT PROJECT" roundedSide="right">
      <NextRoomCards exclude="Sproot" onNavigate={onNavigate} />
    </SprootSlideShell>
  )
}
