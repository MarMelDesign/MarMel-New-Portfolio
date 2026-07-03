import mascotOriginal from '../../assets/playground/mascot/original.png'
import mascotBeanie from '../../assets/playground/mascot/beanie.png'
import mascotDesigner from '../../assets/playground/mascot/designer.png'
import mascotExplorer from '../../assets/playground/mascot/explorer.png'
import mascotCoffee from '../../assets/playground/mascot/coffee.png'
import mascotCreativeDirector from '../../assets/playground/mascot/creative-director.png'

export const LOGO_STYLES = [
  { id: 'bold', label: 'Bold' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'wordmark', label: 'Wordmark' },
  { id: 'italic', label: 'Italic' },
  { id: 'rounded', label: 'Rounded' },
  { id: 'monogram', label: 'Monogram' },
]

export const COLORS = [
  { id: 'burgundy', label: 'Deep Burgundy', hex: '#5c0f1c' },
  { id: 'orange', label: 'Orange', hex: '#e8813a' },
  { id: 'black', label: 'Black', hex: '#181818' },
  { id: 'yellow', label: 'Yellow', hex: '#f2c14e' },
  { id: 'blue', label: 'Blue', hex: '#3b6fb5' },
  { id: 'green', label: 'Green', hex: '#4a9d6a' },
  { id: 'purple', label: 'Purple', hex: '#8258c8' },
  { id: 'pink', label: 'Pink', hex: '#e07aa3' },
]

export const TYPOGRAPHY = [
  {
    id: 'boldSans',
    label: 'Bold Sans',
    note: 'Confident and modern',
    fontFamily: 'var(--font-body)',
    fontWeight: 900,
  },
  {
    id: 'elegantSerif',
    label: 'Elegant Serif',
    note: 'Editorial and refined',
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: 600,
    fontStyle: 'italic',
  },
  {
    id: 'rounded',
    label: 'Rounded',
    note: 'Friendly and soft',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    letterSpacing: '-0.03em',
  },
  {
    id: 'display',
    label: 'Display',
    note: 'Loud and expressive',
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
  },
  {
    id: 'modern',
    label: 'Modern',
    note: 'Clean and geometric',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
]

export const ICONS = [
  { id: 'spark', label: 'Spark', boardCaption: 'Spark mark' },
  { id: 'circle', label: 'Circle', boardCaption: 'Circle mark' },
  { id: 'leaf', label: 'Leaf', boardCaption: 'Leaf mark' },
  { id: 'star', label: 'Star', boardCaption: 'Star mark' },
  { id: 'box', label: 'Box', boardCaption: 'Box mark' },
  { id: 'flower', label: 'Flower', boardCaption: 'Flower mark' },
  { id: 'wave', label: 'Wave', boardCaption: 'Wave mark' },
  { id: 'orbit', label: 'Orbit', boardCaption: 'Orbit mark' },
  { id: 'cube', label: 'Cube', boardCaption: 'Cube mark' },
  { id: 'flag', label: 'Flag', boardCaption: 'Flag mark' },
  { id: 'grid', label: 'Grid', boardCaption: 'Grid mark' },
  { id: 'pin', label: 'Pin', boardCaption: 'Pin mark' },
  { id: 'heart', label: 'Heart', boardCaption: 'Heart mark' },
  { id: 'layout', label: 'Layout', boardCaption: 'Layout mark' },
]

export const MASCOTS = [
  {
    id: 'originalHoodie',
    label: 'Original',
    tint: '#5c0f1c',
    image: mascotOriginal,
    fit: 'contain',
    focus: 'center 15%',
  },
  { id: 'beanie', label: 'Beanie', tint: '#4a0b16', image: mascotBeanie, fit: 'contain', focus: 'center 15%' },
  { id: 'designer', label: 'Designer', tint: '#3b6fb5', image: mascotDesigner, fit: 'cover', focus: 'center 30%' },
  { id: 'explorer', label: 'Explorer', tint: '#4a9d6a', image: mascotExplorer, fit: 'contain', focus: 'center 20%' },
  { id: 'coffee', label: 'Coffee', tint: '#e86a5c', image: mascotCoffee, fit: 'contain', focus: 'center 15%' },
  {
    id: 'creativeDirector',
    label: 'Creative Director',
    tint: '#8258c8',
    image: mascotCreativeDirector,
    fit: 'cover',
    focus: 'center 20%',
  },
]

export const INITIAL_STATE = {
  logoStyle: 'bold',
  color: 'burgundy',
  typography: 'boldSans',
  icon: 'spark',
  mascot: 'originalHoodie',
  name: 'YOUR NAME',
  description: 'Every visitor leaves a small message behind.\nYours will become part of Marmel Space.',
}
