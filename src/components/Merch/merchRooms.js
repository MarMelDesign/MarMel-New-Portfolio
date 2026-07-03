import showroomEntrance from '../../assets/merch/showroom-entrance.png'
import vinylFigures from '../../assets/merch/vinyl-figures.png'
import characterOutfits from '../../assets/merch/character-outfits.png'
import creativeDesk from '../../assets/merch/creative-desk.png'
import collectorBox from '../../assets/merch/collector-box.png'
import createYourMascot from '../../assets/merch/create-your-mascot.png'

export const ROOMS = [
  {
    tag: 'ROOM 01 — ENTRANCE',
    lines: [
      { text: 'Welcome to the', accent: false },
      { text: 'Marmel Collection.', accent: true },
    ],
    subtitle: 'Every collectible tells a story. Step inside and walk through the rooms of the Marmel universe.',
    image: showroomEntrance,
    alt: 'A shelf displaying the Marmel merch collection: a boxed vinyl figure, hoodie, mug, laptop, sketchbook and notebook',
    fit: 'cover',
    cta: null,
  },
  {
    tag: 'ROOM 02 — VINYL FIGURES',
    lines: [
      { text: 'Collectible', accent: false },
      { text: 'Vinyl', accent: true },
      { text: 'Figures.', accent: true },
    ],
    subtitle:
      'Create a mascot that truly belongs to your brand.\nNot just a character, but a collectible identity that can live as premium vinyl figures, digital experiences, packaging and merchandise.',
    image: vinylFigures,
    alt: 'A retail display box of Marmel Collectible Vinyl Figures showing six designs: Beanie, Focus Mode, Explorer, Coffee Break, Energy and Skater',
    fit: 'cover',
    cta: null,
  },
  {
    tag: 'ROOM 03 — CHARACTER OUTFITS',
    lines: [
      { text: 'Choose', accent: false },
      { text: 'Your', accent: true },
      { text: 'Style.', accent: true },
    ],
    subtitle:
      'Every brand tells a different story.\nChoose the personality, outfit and visual style that best represents yours — from clean and minimal to bold, playful or collectible.',
    image: characterOutfits,
    alt: 'Six Marmel figures in a row wearing different colored hoodie outfits: burgundy, black, cream, navy, green and pink',
    fit: 'cover',
    cta: null,
  },
  {
    tag: 'ROOM 04 — CREATIVE DESK',
    lines: [
      { text: 'Where', accent: false },
      { text: 'Ideas', accent: true },
      { text: 'Begin.', accent: true },
    ],
    subtitle:
      'Every character is carefully crafted from the ground up.\nResearch, sketches, personality, expressions and branding all come together to create a mascot that feels truly original.',
    image: creativeDesk,
    alt: 'A creative desk with a laptop showing character designs, an open sketchbook full of Marmel concept drawings, a tablet, and pencils',
    fit: 'cover',
    cta: null,
  },
  {
    tag: 'ROOM 05 — COLLECTOR BOX',
    lines: [
      { text: 'Unbox', accent: false },
      { text: 'the', accent: false },
      { text: 'Magic.', accent: true },
    ],
    subtitle:
      'Picture your team, your clients or even yourself opening a beautifully crafted collector box featuring your own brand mascot.\nA premium experience designed to turn your brand into something people can truly hold, remember and share.',
    image: collectorBox,
    alt: 'An open Marmel Collector Box showing a numbered limited-edition vinyl figure, certificate card, and collectible art cards',
    fit: 'cover',
    cta: null,
  },
  {
    tag: 'ROOM 06 — CREATE YOUR MASCOT',
    lines: [
      { text: 'Ready for', accent: false },
      { text: 'Your Own', accent: true },
      { text: 'Mascot?', accent: true },
    ],
    subtitle:
      'Whether you’re building a startup, launching a product or refreshing an existing identity, your mascot can become the character people instantly recognize and remember.',
    image: createYourMascot,
    alt: 'A row of custom collectible mascot figures in different styles displayed on pedestals',
    fit: 'cover',
    cta: { label: 'Start Your Mascot', action: 'mailto' },
  },
]
