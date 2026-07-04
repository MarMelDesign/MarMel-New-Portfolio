import Button from '../Home/Button'
import { ExternalLinkIcon } from '../Home/Icons'
import SlideShell from './SlideShell'
import { ZoomableImage } from './CaseLightbox'
import NextRoomCards from './NextRoomCards'
import heroImg from '../../assets/vaultwin-case/herovaultwin.jpg'
import logoImg from '../../assets/vaultwin-case/logo.jpg'
import branding1Img from '../../assets/vaultwin-case/branding1.jpg'
import branding2Img from '../../assets/vaultwin-case/branding2.jpg'
import branding3Img from '../../assets/vaultwin-case/branding3.jpg'
import branding4Img from '../../assets/vaultwin-case/branding4.jpg'
import branding5Img from '../../assets/vaultwin-case/branding5.jpg'
import wireframeImg from '../../assets/vaultwin-case/wireframe.jpg'
import design1Img from '../../assets/vaultwin-case/design1.jpg'
import design2Img from '../../assets/vaultwin-case/design2.jpg'
import design3Img from '../../assets/vaultwin-case/design3.jpg'
import design4Img from '../../assets/vaultwin-case/design4.jpg'
import design5Img from '../../assets/vaultwin-case/design5.jpg'
import awardImg from '../../assets/vaultwin-case/award.jpg'

const CASE_TAG = 'VAULTWIN CASE STUDY'
const FOOTER_LABEL = 'Vaultwin — a non-loss lottery, made trustworthy'
const TOTAL = 11

function VaultwinSlideShell(props) {
  return <SlideShell tag={CASE_TAG} footerLabel={FOOTER_LABEL} total={TOTAL} {...props} />
}

const HERO_TAGS = ['2023', 'UX/UI', 'Figma', 'Illustrator', 'Branding', 'Logo']

export function HeroSlide() {
  return (
    <VaultwinSlideShell index="01" name="HERO" roundedSide="left">
      <div className="mh-case-hero">
        <div className="mh-case-hero__text">
          <span className="mh-case-hero__meta">ux/ui case study</span>
          <h1 className="mh-case-hero__title">VAULTWIN</h1>
          <p className="mh-case-hero__tagline">
            A non-loss lottery experience where your entries are always returned, giving you the
            potential to win big.
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
            alt="Vaultwin hero presentation"
            className="mh-case-hero__image"
          />
        </div>
      </div>
    </VaultwinSlideShell>
  )
}

export function OverviewSlide() {
  return (
    <VaultwinSlideShell index="02" name="OVERVIEW">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">A transparent, trustworthy Web3 lottery.</h2>
        <p className="mh-case-overview__text">
          VaultWin is a blockchain-based platform that reimagines the traditional lottery
          experience through transparency, trust, and risk-conscious participation. Built on
          decentralized infrastructure, the platform combines Web3 technology with an intuitive,
          user-friendly interface to make complex blockchain interactions feel approachable and
          engaging. Instead of relying on opaque systems and uncertainty, VaultWin introduces a
          more transparent ecosystem where users can participate with confidence, track activity
          in real time, and understand exactly how the platform works.
        </p>
      </div>
    </VaultwinSlideShell>
  )
}

export function RoleSlide() {
  return (
    <VaultwinSlideShell index="03" name="MY ROLE">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">End-to-end product, brand & visual designer.</h2>
        <p className="mh-case-overview__text">
          For Vaultwin, I led the entire creative and product design process from concept to final
          execution. I was responsible for creating the complete visual identity, including logo
          design, brand system, typography, color direction, and custom illustrations. On the
          product side, I designed the full user experience and interface architecture, developing
          user flows, wireframes, information hierarchy, and responsive web design solutions
          tailored for a blockchain identity platform.
        </p>
        <ul className="mh-case-bullets mh-case-bullets--on-dark">
          <li>Brand Strategy & Visual Identity</li>
          <li>Logo Design & Brand Guidelines</li>
          <li>Custom Illustrations & Graphic Design</li>
          <li>UX Research & User Flow Design</li>
          <li>Information Architecture</li>
          <li>Wireframing & Prototyping</li>
          <li>UI Design System Creation</li>
          <li>Responsive Web Design</li>
          <li>Design Documentation & Handoff</li>
        </ul>
      </div>
    </VaultwinSlideShell>
  )
}

export function ProblemSlide() {
  return (
    <VaultwinSlideShell index="04" name="PROBLEM">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">Bridging blockchain and everyday users.</h2>
        <p className="mh-case-overview__text">
          As blockchain ecosystems continue to grow, users face increasing challenges when
          managing their digital identities across multiple platforms and services. Existing
          solutions often feel overly technical, fragmented, and inaccessible to mainstream users.
          The lack of trust, clarity, and intuitive user experiences creates barriers to adoption.
          Vaultwin was created to bridge the gap between advanced blockchain technology and
          user-friendly digital experiences.
        </p>
        <ul className="mh-case-bullets mh-case-bullets--on-dark">
          <li>Create a trustworthy and recognizable brand identity for a blockchain-based platform.</li>
          <li>Simplify complex blockchain identity management through intuitive UX design.</li>
          <li>Build a clear information architecture that helps users control their digital presence.</li>
          <li>Increase user confidence through transparent, consistent visual communication.</li>
          <li>Design a scalable design system for future platform growth and features.</li>
          <li>Deliver a modern, premium experience for both crypto-native and mainstream audiences.</li>
        </ul>
      </div>
    </VaultwinSlideShell>
  )
}

export function SolutionsSlide() {
  return (
    <VaultwinSlideShell index="05" name="SOLUTIONS">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Five solutions, one trustworthy system.</h2>
        </div>

        <div className="mh-case-goals-grid">
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Solution 01 — Human-Centered UX</span>
            <p className="mh-case-goal-card__text">
              Complex blockchain processes were translated into simple, guided user flows that
              reduce friction for users of all experience levels.
            </p>
          </div>
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Solution 02 — Unified Visual Ecosystem</span>
            <p className="mh-case-goal-card__text">
              A complete brand identity — logo, typography, color palette, and custom
              illustrations — creating a cohesive experience across all touchpoints.
            </p>
          </div>
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Solution 03 — Trust Through Design</span>
            <p className="mh-case-goal-card__text">
              Clear hierarchy, structured layouts, and transparent interaction patterns reinforce
              credibility for identity-related actions.
            </p>
          </div>
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Solution 04 — Scalable Design System</span>
            <p className="mh-case-goal-card__text">
              A flexible design framework ensures consistency, maintainability, and future
              scalability as the platform evolves.
            </p>
          </div>
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Solution 05 — Modern Web3 Experience</span>
            <p className="mh-case-goal-card__text">
              Clean aesthetics and intuitive interactions transform a technical blockchain product
              into an accessible, engaging experience.
            </p>
          </div>
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Vaultwin logo system</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={logoImg} alt="Vaultwin logo system" />
            </div>
          </div>
        </div>
      </div>
    </VaultwinSlideShell>
  )
}

export function BrandProcessSlide() {
  return (
    <VaultwinSlideShell index="06" name="BRAND PROCESS">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Discovery & brand strategy.</h2>
          <p className="mh-case-overview__text">
            The project began with exploring the current blockchain identity landscape and
            identifying common usability challenges — understanding trust barriers, onboarding
            friction, and identity verification flows. Before designing the product, a strong
            visual foundation was established: a brand that feels secure, innovative, and
            trustworthy while remaining approachable to non-technical users.
          </p>
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Branding exploration 1</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={branding1Img} alt="Vaultwin branding exploration 1" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Branding exploration 2</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={branding2Img} alt="Vaultwin branding exploration 2" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Branding exploration 3</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={branding3Img} alt="Vaultwin branding exploration 3" />
            </div>
          </div>
        </div>
      </div>
    </VaultwinSlideShell>
  )
}

export function IllustrationSlide() {
  return (
    <VaultwinSlideShell index="07" name="ILLUSTRATION">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Illustration System</h2>
          <p className="mh-case-overview__text">
            Custom illustrations were created to support the brand identity and simplify
            communication of complex blockchain concepts through approachable visual storytelling.
          </p>
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Illustration system</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={branding4Img} alt="Vaultwin illustration system" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Illustration system details</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={branding5Img} alt="Vaultwin illustration system details" />
            </div>
          </div>
        </div>
      </div>
    </VaultwinSlideShell>
  )
}

export function WireframesSlide() {
  return (
    <VaultwinSlideShell index="08" name="WIREFRAMING">
      <div className="mh-case-wireframes">
        <div className="mh-case-wireframes__text">
          <h2 className="mh-case-wireframes__title">Wireframing</h2>
          <p className="mh-case-wireframes__p">
            Low-fidelity wireframes were created to establish layout structure, content hierarchy,
            and user interaction patterns before moving into visual design.
          </p>
        </div>
        <div className="mh-case-wireframes__image-wrap">
          <ZoomableImage src={wireframeImg} alt="Vaultwin low-fidelity wireframes" />
        </div>
      </div>
    </VaultwinSlideShell>
  )
}

export function HighFidelitySlide() {
  return (
    <VaultwinSlideShell index="09" name="HI-FI UI">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">High-Fidelity UI Design</h2>
          <p className="mh-case-overview__text">
            The wireframes evolved into polished interfaces with a strong focus on clarity,
            accessibility, visual hierarchy, and modern Web3 aesthetics.
          </p>
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">High-fidelity UI — screen one</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={design1Img} alt="Vaultwin high-fidelity UI design 1" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">High-fidelity UI — screen two</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={design2Img} alt="Vaultwin high-fidelity UI design 2" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">High-fidelity UI — screen three</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={design3Img} alt="Vaultwin high-fidelity UI design 3" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">High-fidelity UI — screen four</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={design4Img} alt="Vaultwin high-fidelity UI design 4" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">High-fidelity UI — screen five</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={design5Img} alt="Vaultwin high-fidelity UI design 5" />
            </div>
          </div>
        </div>
      </div>
    </VaultwinSlideShell>
  )
}

export function StatementSlide() {
  return (
    <VaultwinSlideShell index="10" name="STATEMENT">
      <div className="mh-case-statement">
        <div className="mh-case-statement__col">
          <p className="mh-case-statement__p">
            The final product successfully combines blockchain technology with a user-centered
            design approach, making participation simple, transparent, and enjoyable for both
            experienced crypto users and newcomers.
          </p>
          <p className="mh-case-statement__p">
            🏆 The project and its design were recognized with the Best Bahamut Game Award,
            highlighting both the product vision and the quality of the overall user experience.
          </p>
          <Button
            variant="primary"
            className="mh-case-statement__cta"
            showArrow={false}
            href="https://www.facebook.com/Vaultwin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon size={16} />
            <span style={{ marginLeft: 8 }}>Vaultwin</span>
          </Button>
        </div>
        <div className="mh-case-research__image-wrap">
          <ZoomableImage src={awardImg} alt="Vaultwin Best Bahamut Game Award recognition" />
        </div>
      </div>
    </VaultwinSlideShell>
  )
}

export function NextProjectSlide({ onNavigate }) {
  return (
    <VaultwinSlideShell index="11" name="NEXT PROJECT" roundedSide="right">
      <NextRoomCards exclude="Vaultwin" onNavigate={onNavigate} />
    </VaultwinSlideShell>
  )
}
