import { MapPinIcon, TargetIcon, FlagIcon, WrenchIcon, CubeIcon, StarIcon, BoxIcon, OrbitIcon } from '../Home/Icons'
import SlideShell from './SlideShell'
import { ZoomableImage } from './CaseLightbox'
import NextRoomCards from './NextRoomCards'
import heroImg from '../../assets/sarang-case/hero.jpg'
import researchImg from '../../assets/sarang-case/research.jpg'
import analyseImg from '../../assets/sarang-case/analyse.jpg'
import commentsImg from '../../assets/sarang-case/comments.jpg'
import personaImg from '../../assets/sarang-case/persona.jpg'
import storyboardImg from '../../assets/sarang-case/storyboard.jpg'
import info1Img from '../../assets/sarang-case/info1.jpg'
import info2Img from '../../assets/sarang-case/info2.jpg'
import flowImg from '../../assets/sarang-case/flow.jpg'
import lofiImg from '../../assets/sarang-case/lofi.jpg'
import colorsImg from '../../assets/sarang-case/colors.jpg'
import design1Img from '../../assets/sarang-case/design1.jpg'
import design2Img from '../../assets/sarang-case/design2.jpg'
import statementImg from '../../assets/sarang-case/statement.jpg'

const CASE_TAG = 'SARANG CASE STUDY'
const FOOTER_LABEL = '사랑 — Love, a Korean food delivery experience'
const TOTAL = 10

function SarangSlideShell(props) {
  return <SlideShell tag={CASE_TAG} footerLabel={FOOTER_LABEL} total={TOTAL} {...props} />
}

const HERO_TAGS = [
  '2023',
  'Mobile App',
  'Figma',
  'Photoshop',
  'Market research',
  'Lo-fi wireframes',
  'Hi-fi UI',
]

export function HeroSlide() {
  return (
    <SarangSlideShell index="01" name="HERO" roundedSide="left">
      <div className="mh-case-hero">
        <div className="mh-case-hero__text">
          <span className="mh-case-hero__meta">mobile ux/ui case study</span>
          <h1 className="mh-case-hero__title">사랑 - Love</h1>
          <p className="mh-case-hero__tagline">
            사랑 - Love is a Korean food delivery app concept focused on helping hungry users
            browse, choose, customize, and order with less friction.
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
            alt="사랑 - Love food delivery app preview"
            className="mh-case-hero__image"
          />
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function OverviewSlide() {
  return (
    <SarangSlideShell index="02" name="OVERVIEW">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <p className="mh-case-overview__text">
            The challenge was to simplify the food ordering process while maintaining a visually
            rich interface capable of handling large amounts of restaurant, menu, and delivery
            information. Through user-centered design, clear navigation patterns, and a scalable
            design system, the product delivers a seamless experience from food discovery to
            doorstep delivery.
          </p>
        </div>

        <div className="mh-case-strategy-cards">
          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <MapPinIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">The Reason</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              Online food delivery has already grown significantly over the past few years,
              however this market has matured due to the overall level of funding and technology
              penetration. There is another key catalyst — increasing convenience and transparency
              for both end users and merchants. Since we are planning to develop an on-demand food
              delivery app, it was important to create a custom mobile app because this market has
              been booming over the past few years.
            </p>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <TargetIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Target Audience</h3>
            </div>
            <p className="mh-case-strategy-card__intro">
              The target audience for this app includes busy professionals, students, and
              families who are looking for a convenient and time-saving way to order food. They
              are tech-savvy individuals who rely heavily on their smartphones for daily tasks and
              are comfortable using mobile apps for ordering food.
            </p>
          </div>
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function GoalsSlide() {
  return (
    <SarangSlideShell index="03" name="GOALS & SCOPE">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Project Brief — goals, constraints & assumptions.</h2>
        </div>

        <div className="mh-case-strategy-cards">
          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <FlagIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Project Goals</h3>
            </div>
            <ul className="mh-case-bullets">
              <li>Create a user-friendly, intuitive interface to browse and select food from local restaurants.</li>
              <li>Implement a seamless ordering and payment process with smooth, secure transactions.</li>
              <li>Integrate real-time tracking so users can follow their delivery status and location.</li>
              <li>Provide a rating and review system for feedback on the delivery experience.</li>
              <li>Establish partnerships with local restaurants for a wide variety of food options.</li>
            </ul>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <WrenchIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Project Constraints</h3>
            </div>
            <ul className="mh-case-bullets">
              <li>Must be compatible with both iOS and Android devices.</li>
              <li>Must adhere to local food safety regulations and guidelines.</li>
              <li>Must handle a high volume of concurrent users and orders.</li>
              <li>Must have a secure, reliable payment gateway for transactions.</li>
              <li>Must have responsive customer support to handle inquiries and complaints.</li>
            </ul>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <CubeIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Project Assumptions</h3>
            </div>
            <ul className="mh-case-bullets">
              <li>Users have access to a stable internet connection for using the app.</li>
              <li>Users are willing to pay a delivery fee for doorstep convenience.</li>
              <li>Partnered restaurants can handle the increased demand for orders.</li>
              <li>Users are comfortable providing personal and payment information.</li>
              <li>Users find value in the rating and review system and participate actively.</li>
            </ul>
          </div>
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function DeliverySlide() {
  return (
    <SarangSlideShell index="04" name="SUCCESS & DELIVERY">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Project Brief — success criteria, deliverables & phases.</h2>
        </div>

        <div className="mh-case-strategy-cards">
          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <StarIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Success Criteria</h3>
            </div>
            <ul className="mh-case-bullets">
              <li>Achieve a minimum 4-star average rating on the app stores.</li>
              <li>Maintain a customer satisfaction rate of at least 90%.</li>
              <li>Process and deliver 95% of orders within the estimated time.</li>
              <li>Increase partnered restaurants by 20% within the first year.</li>
              <li>Generate $50,000 in monthly revenue by the end of year one.</li>
            </ul>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <BoxIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Deliverables</h3>
            </div>
            <ul className="mh-case-bullets">
              <li>Wireframes and mockups of the app interface.</li>
              <li>Functional prototype of the app with basic features.</li>
              <li>Fully developed and tested app for iOS and Android.</li>
              <li>Documentation and user guide for usage and administration.</li>
              <li>Marketing materials and promotional strategies for launch.</li>
            </ul>
          </div>

          <div className="mh-case-strategy-card">
            <div className="mh-case-strategy-card__head">
              <span className="mh-case-strategy-card__icon">
                <OrbitIcon size={14} />
              </span>
              <h3 className="mh-case-strategy-card__title">Project Phases</h3>
            </div>
            <ul className="mh-case-bullets">
              <li>Discovery: market research, competitor analysis, user research.</li>
              <li>Design: UI/UX design, wireframing, and prototyping.</li>
              <li>Development: front-end, back-end, third-party API integration.</li>
              <li>Testing: functional testing, usability testing, bug fixing.</li>
              <li>Deployment: app store submission, server setup and configuration.</li>
            </ul>
          </div>
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function ResearchSlide() {
  return (
    <SarangSlideShell index="05" name="RESEARCH">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">Market research.</h2>
          <ul className="mh-case-bullets mh-case-bullets--on-dark">
            <li>
              It may appear to be a cost, but creating a delivery app is actually a viable
              investment — the advantages of on-demand delivery apps far outweigh the
              disadvantages.
            </li>
            <li>
              People are not going to restaurants because they want to save time. They need faster
              delivery with anticipated delivery times, and a food delivery app can solve that.
            </li>
            <li>
              Customers can leverage appealing deals with only a few taps on their phones, making
              it easier to order from preferred restaurants.
            </li>
          </ul>
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Research findings</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={researchImg} alt="사랑 - Love market research findings" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Market analysis</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={analyseImg} alt="사랑 - Love market analysis" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">User comments research</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={commentsImg} alt="사랑 - Love user comments research" />
            </div>
          </div>
        </div>
      </div>
    </SarangSlideShell>
  )
}

const PROCESS_GALLERY = [
  {
    src: personaImg,
    caption: 'Primary persona',
    alt: '사랑 - Love primary persona',
  },
  {
    src: storyboardImg,
    caption: 'Storyboard',
    alt: '사랑 - Love storyboard',
  },
  {
    src: info1Img,
    caption: 'Information architecture map',
    alt: '사랑 - Love information architecture map',
  },
  {
    src: info2Img,
    caption: 'Information architecture details',
    alt: '사랑 - Love information architecture details',
  },
  {
    src: flowImg,
    caption: 'Ordering user flow',
    alt: '사랑 - Love ordering user flow',
  },
]

export function ProcessSlide() {
  return (
    <SarangSlideShell index="06" name="PROCESS">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <p className="mh-case-overview__text">
            Based on the research insights, I developed a primary persona demonstrating our target
            users, their goals and pain points — then structured the information architecture and
            mapped the complete ordering user flow from discovery to payment.
          </p>
        </div>

        <div className="mh-case-gallery">
          {PROCESS_GALLERY.map((item) => (
            <div className="mh-case-gallery__item" key={item.src}>
              <span className="mh-case-gallery__caption">{item.caption}</span>
              <div className="mh-case-gallery__image-wrap">
                <ZoomableImage src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function WireframesSlide() {
  return (
    <SarangSlideShell index="07" name="WIREFRAMES">
      <div className="mh-case-wireframes">
        <div className="mh-case-wireframes__text">
          <h2 className="mh-case-wireframes__title">Low-Fi Wireframes</h2>
          <p className="mh-case-wireframes__p">
            After establishing the flow diagram, I began sketching the low fidelity wireframes of
            the primary user flow with pen and paper. Due to limited space, only a few of the
            digital lo-fi wireframes are shown here — designed with Android users in mind, in line
            with the Material Design guidelines.
          </p>
        </div>
        <div className="mh-case-wireframes__image-wrap">
          <ZoomableImage src={lofiImg} alt="사랑 - Love low fidelity wireframes" />
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function HighFidelitySlide() {
  return (
    <SarangSlideShell index="08" name="HI-FI UI">
      <div className="mh-case-cards-section">
        <div className="mh-case-cards-section__header">
          <h2 className="mh-case-overview__title">High-Fidelity Mockups</h2>
          <p className="mh-case-overview__text">
            After finishing the wireframes, I moved on to the primary screens. To maintain
            consistency, I created a UI Style Guide with an HSL color model for precise color
            selection and a typography scale to keep the hierarchy consistent throughout.
          </p>
        </div>

        <div className="mh-case-gallery">
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Color palette & UI style guide</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={colorsImg} alt="사랑 - Love color palette and UI style guide" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Design solution — screen set one</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={design1Img} alt="사랑 - Love design solution screen set one" />
            </div>
          </div>
          <div className="mh-case-gallery__item">
            <span className="mh-case-gallery__caption">Design solution — screen set two</span>
            <div className="mh-case-gallery__image-wrap">
              <ZoomableImage src={design2Img} alt="사랑 - Love design solution screen set two" />
            </div>
          </div>
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function StatementSlide() {
  return (
    <SarangSlideShell index="09" name="STATEMENT">
      <div className="mh-case-statement">
        <div className="mh-case-statement__col">
          <p className="mh-case-statement__p">
            The final direction makes 사랑 - Love feel warm, direct, and easy to order from, with a
            mobile system that keeps food and action close together.
          </p>
        </div>
        <div className="mh-case-research__image-wrap">
          <ZoomableImage src={statementImg} alt="사랑 - Love food statement visual" />
        </div>
      </div>
    </SarangSlideShell>
  )
}

export function NextProjectSlide({ onNavigate }) {
  return (
    <SarangSlideShell index="10" name="NEXT PROJECT" roundedSide="right">
      <NextRoomCards exclude="Sarang" onNavigate={onNavigate} />
    </SarangSlideShell>
  )
}
