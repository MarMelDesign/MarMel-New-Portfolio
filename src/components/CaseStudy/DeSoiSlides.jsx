import Button from '../Home/Button'
import { PlayIcon, InstagramIcon, ExternalLinkIcon } from '../Home/Icons'
import SlideShell from './SlideShell'
import { ZoomableImage } from './CaseLightbox'
import NextRoomCards from './NextRoomCards'
import heroImg from '../../assets/desoi-case/hero.jpg'
import process1Img from '../../assets/desoi-case/process1.jpg'
import process2Img from '../../assets/desoi-case/process2.jpg'
import process3Img from '../../assets/desoi-case/process3.jpg'
import flowImg from '../../assets/desoi-case/flow.jpg'
import process4Img from '../../assets/desoi-case/process4.jpg'

const CASE_TAG = 'DE SOI CASE STUDY'
const FOOTER_LABEL = 'De Soi — botanical apéritif, e-commerce ritual'
const TOTAL = 13

function DeSoiSlideShell(props) {
  return <SlideShell tag={CASE_TAG} footerLabel={FOOTER_LABEL} total={TOTAL} {...props} />
}

const HERO_TAGS = ['2023', 'Figma', 'UX Solutions']

export function HeroSlide() {
  return (
    <DeSoiSlideShell index="01" name="HERO" roundedSide="left">
      <div className="mh-case-hero">
        <div className="mh-case-hero__text">
          <span className="mh-case-hero__meta">ux/ui case study · ecommerce ritual</span>
          <h1 className="mh-case-hero__title">DE SOI</h1>
          <p className="mh-case-hero__tagline">
            De Soi — non-alcoholic apéritif brand with adaptogens and botanical ingredients.
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
            alt="De Soi non-alcoholic aperitif hero, photos by Dana Boulos and Jennelle Fong"
            className="mh-case-hero__image"
          />
        </div>
      </div>
    </DeSoiSlideShell>
  )
}

export function RoleSlide() {
  return (
    <DeSoiSlideShell index="02" name="MY ROLE">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">Designing within the De Soi ecosystem.</h2>
        <p className="mh-case-overview__text">
          As a Product Designer, I was responsible for designing and expanding key e-commerce
          experiences within the existing De Soi design system. My work focused on creating new
          PDP sections and designing the Subscription Popup Flow while ensuring full consistency
          with the established visual language, UX patterns, and brand guidelines.
        </p>
        <ul className="mh-case-bullets mh-case-bullets--on-dark">
          <li>Designed new Product Detail Page (PDP) sections.</li>
          <li>Designed the Subscription Popup Flow.</li>
          <li>Applied and extended the existing design system.</li>
          <li>Maintained consistency across typography, spacing, and component behavior.</li>
          <li>Optimized user experience for subscription conversion.</li>
          <li>Created responsive layouts for desktop and mobile.</li>
          <li>Collaborated within established brand and product guidelines.</li>
        </ul>
      </div>
    </DeSoiSlideShell>
  )
}

export function ProjectBriefSlide() {
  return (
    <DeSoiSlideShell index="03" name="PROJECT BRIEF">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Balancing storytelling and conversion.</h2>
          <p className="mh-case-overview__text">
            De Soi already had a well-established visual identity, design language, and
            e-commerce ecosystem. Rather than redesigning the experience from scratch, my role was
            to seamlessly integrate new content modules into the existing Product Detail Page
            while preserving the premium feel of the brand — ensuring every new section felt
            native and supported both storytelling and purchase intent.
          </p>
        </div>

        <div className="mh-case-goals-grid">
          {[
            'Support product discovery',
            'Reinforce brand value',
            'Highlight ingredients and benefits',
            'Improve content readability',
            'Maintain visual consistency',
            'Encourage purchase without disrupting the premium experience',
          ].map((text) => (
            <div className="mh-case-goal-card" key={text}>
              <p className="mh-case-goal-card__text">{text}</p>
            </div>
          ))}
        </div>

        <a
          className="mh-case-link-card"
          href="https://www.inc.com/magazine/202404/kevin-j-ryan/de-soi-co-founders-katy-perry-morgan-mclachlan-on-their-entrepreneurial-alchemy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mh-case-link-card__icon">
            <PlayIcon size={16} />
          </span>
          <span className="mh-case-link-card__body">
            <span className="mh-case-link-card__eyebrow">Inc. Magazine · Apr 8, 2024</span>
            <span className="mh-case-link-card__title">
              De Soi Co-Founders on Their Entrepreneurial Alchemy
            </span>
            <span className="mh-case-link-card__desc">
              A feature on Katy Perry and Morgan McLachlan, the origin of De Soi, and how the
              brand blends restraint, ritual, botanicals, and non-alcoholic beverage culture.
            </span>
          </span>
        </a>
      </div>
    </DeSoiSlideShell>
  )
}

export function DesignGoalsSlide() {
  return (
    <DeSoiSlideShell index="04" name="DESIGN GOALS">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Four goals guided the new PDP modules.</h2>
        </div>

        <div className="mh-case-goals-grid">
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Goal 01</span>
            <p className="mh-case-goal-card__text">
              Improve product storytelling through structured content sections.
            </p>
          </div>
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Goal 02</span>
            <p className="mh-case-goal-card__text">
              Present ingredient and benefit information in a clear, digestible format.
            </p>
          </div>
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Goal 03</span>
            <p className="mh-case-goal-card__text">
              Maintain consistency with the existing De Soi design system and visual language.
            </p>
          </div>
          <div className="mh-case-goal-card">
            <span className="mh-case-goal-card__label">Goal 04</span>
            <p className="mh-case-goal-card__text">
              Create scalable components that could be reused across multiple products.
            </p>
          </div>
        </div>
      </div>
    </DeSoiSlideShell>
  )
}

export function DesignApproachSlide() {
  return (
    <DeSoiSlideShell index="05" name="DESIGN APPROACH">
      <div className="mh-case-research">
        <div className="mh-case-research__text">
          <h2 className="mh-case-research__title">Design Approach</h2>
          <p className="mh-case-research__p">
            The design process focused on understanding the existing system before introducing
            new elements. Every section was built using established typography, spacing, color,
            and component patterns to ensure visual continuity throughout the shopping journey.
          </p>
          <div className="mh-case-research__block">
            <span className="mh-case-label">SPECIAL ATTENTION WAS GIVEN TO</span>
            <ul className="mh-case-bullets mh-case-bullets--on-dark">
              <li>Content hierarchy</li>
              <li>Information architecture</li>
              <li>Visual rhythm</li>
              <li>Mobile responsiveness</li>
              <li>Component scalability</li>
            </ul>
          </div>
        </div>
        <div className="mh-case-research__image-wrap">
          <ZoomableImage src={process1Img} alt="De Soi design process screens" />
        </div>
      </div>
    </DeSoiSlideShell>
  )
}

export function StorytellingSlide() {
  return (
    <DeSoiSlideShell index="06" name="PDP STORYTELLING">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">Product storytelling & ingredient presentation.</h2>
        <p className="mh-case-overview__text">
          Designed content blocks that communicate the product's personality, ingredients, and
          experience without overwhelming the user. The layout emphasizes readability while
          maintaining the editorial and premium aesthetic of the De Soi brand.
        </p>
        <p className="mh-case-overview__text">
          Created structured modules that help users quickly understand key botanical ingredients,
          functional benefits, flavor profile, and product characteristics — presented through
          clear visual hierarchy and digestible content groupings.
        </p>
        <ul className="mh-case-bullets mh-case-bullets--on-dark">
          <li>Key botanical ingredients</li>
          <li>Functional benefits</li>
          <li>Flavor profile</li>
          <li>Product characteristics</li>
        </ul>
      </div>
    </DeSoiSlideShell>
  )
}

export function VisualConsistencySlide() {
  return (
    <DeSoiSlideShell index="07" name="VISUAL CONSISTENCY">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Visual Consistency</h2>
          <p className="mh-case-overview__text">
            All new modules were developed within the constraints of the existing design system —
            ensuring consistent spacing, unified typography, reusable components, and scalable
            implementation across future PDPs.
          </p>
        </div>
        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">PDP section design screens</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={process2Img} alt="De Soi PDP section design screens" />
            </div>
          </div>
        </div>
      </div>
    </DeSoiSlideShell>
  )
}

export function ResponsiveOutcomeSlide() {
  return (
    <DeSoiSlideShell index="08" name="RESPONSIVE & OUTCOME">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Responsive Experience & Outcome</h2>
          <p className="mh-case-overview__text">
            Each section was adapted for both desktop and mobile, preserving content hierarchy and
            readability while maintaining the premium visual tone across screen sizes. The final
            PDP additions seamlessly integrated into the existing De Soi ecosystem — a scalable
            set of design-system-driven modules that strengthen the connection between brand
            narrative and product conversion.
          </p>
        </div>
        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Responsive PDP section designs</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={process3Img} alt="De Soi responsive PDP section designs" />
            </div>
          </div>
        </div>
      </div>
    </DeSoiSlideShell>
  )
}

export function RetentionOverviewSlide() {
  return (
    <DeSoiSlideShell index="09" name="RETENTION FLOW">
      <div className="mh-case-overview">
        <h2 className="mh-case-overview__title">A cancellation flow built for retention.</h2>
        <p className="mh-case-overview__text">
          To reduce subscription cancellations and improve customer retention, I designed a
          multi-step cancellation flow that offers users alternative actions before fully ending
          their subscription — built within the existing De Soi design system, balancing user
          autonomy with retention opportunities.
        </p>
        <p className="mh-case-overview__text">
          Subscription cancellations directly impact recurring revenue. The goal was a
          cancellation experience that:
        </p>
        <ul className="mh-case-bullets mh-case-bullets--on-dark">
          <li>Respects the user's decision</li>
          <li>Reduces unnecessary churn</li>
          <li>Offers flexible alternatives</li>
          <li>Maintains a premium brand experience</li>
          <li>Keeps the flow simple and intuitive</li>
        </ul>
      </div>
    </DeSoiSlideShell>
  )
}

export function RetentionAlternativesSlide() {
  return (
    <DeSoiSlideShell index="10" name="ALTERNATIVES">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">
            Alternative actions before cancellation.
          </h2>
        </div>

        <div className="mh-case-goals-grid">
          {[
            ['Pause Subscription', 'Temporarily skip upcoming shipments.'],
            ['Change Delivery Frequency', 'Adjust shipment intervals based on consumption habits.'],
            ['Change Products', 'Switch to a different product selection.'],
            ['Change Flavor', 'Explore alternative flavor preferences.'],
            ['Change Format', 'Move between available packaging formats.'],
            ['Provide Cancellation Feedback', 'Help the business understand cancellation reasons.'],
          ].map(([label, text]) => (
            <div className="mh-case-goal-card" key={label}>
              <span className="mh-case-goal-card__label">{label}</span>
              <p className="mh-case-goal-card__text">{text}</p>
            </div>
          ))}
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Subscription retention flow screens</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={flowImg} alt="De Soi subscription retention flow screens" />
            </div>
          </div>
        </div>
      </div>
    </DeSoiSlideShell>
  )
}

export function ConsiderationsImpactSlide() {
  return (
    <DeSoiSlideShell index="11" name="IMPACT">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Design considerations & business impact.</h2>
        </div>

        <div className="mh-case-goals-grid">
          {[
            ['Reduce Friction', 'The experience needed to feel helpful rather than persuasive.'],
            ['Preserve User Control', 'Users can continue with cancellation at any stage.'],
            [
              'Encourage Retention Naturally',
              'Alternative actions are presented as solutions, not obstacles.',
            ],
            [
              'Maintain Brand Consistency',
              'Every modal follows the existing typography, spacing, color palette, and interaction patterns.',
            ],
          ].map(([label, text]) => (
            <div className="mh-case-goal-card" key={label}>
              <span className="mh-case-goal-card__label">{label}</span>
              <p className="mh-case-goal-card__text">{text}</p>
            </div>
          ))}
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Subscription retention modal designs</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={process4Img} alt="De Soi subscription retention modal designs" />
            </div>
          </div>
        </div>

        <ul className="mh-case-bullets mh-case-bullets--on-dark">
          <li>Reduce subscription churn</li>
          <li>Increase customer lifetime value</li>
          <li>Improve user satisfaction</li>
          <li>Gather valuable customer feedback</li>
        </ul>
      </div>
    </DeSoiSlideShell>
  )
}

export function FinalThoughtsSlide() {
  return (
    <DeSoiSlideShell index="12" name="FINAL THOUGHTS">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">De Soi is one of those projects that reminds me why I love design.</h2>
          <p className="mh-case-overview__text">
            Being able to contribute to a brand with such a strong identity, thoughtful
            storytelling, and attention to detail was both inspiring and rewarding. This experience
            strengthened my appreciation for designing within established systems, solving real
            business challenges, and creating experiences that feel effortless for users. Looking
            back, I'm genuinely grateful for the opportunity to contribute to a brand as beautiful
            and intentional as De Soi.
          </p>
        </div>

        <div className="mh-case-goals-grid">
          <a
            className="mh-case-link-card"
            href="https://www.instagram.com/drinkdesoi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mh-case-link-card__icon">
              <InstagramIcon size={16} />
            </span>
            <span className="mh-case-link-card__body">
              <span className="mh-case-link-card__eyebrow">Instagram Preview</span>
              <span className="mh-case-link-card__title">@drinkdesoi</span>
              <span className="mh-case-link-card__desc">
                Botanical aperitifs, product rituals, brand storytelling, and the visual world
                behind De Soi.
              </span>
            </span>
          </a>
        </div>

        <Button
          variant="primary"
          className="mh-case-statement__cta"
          showArrow={false}
          href="https://drinkdesoi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLinkIcon size={16} />
          <span style={{ marginLeft: 8 }}>Live Website</span>
        </Button>
      </div>
    </DeSoiSlideShell>
  )
}

export function NextProjectSlide({ onNavigate }) {
  return (
    <DeSoiSlideShell index="13" name="NEXT PROJECT" roundedSide="right">
      <NextRoomCards exclude="De Soi" onNavigate={onNavigate} />
    </DeSoiSlideShell>
  )
}
