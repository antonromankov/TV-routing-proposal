import { PagesTemplate, PageTemplate } from './Templates'

const links = [
  { to: 'png', label: 'PNG images' },
  { to: 'jpeg', label: 'JPEG images' }
]

const pngLinks = [
  { to: '1', label: 'PNG 1' },
  { to: '2', label: 'PNG 2' },
  { to: '3', label: 'PNG 3' }
]

const jpegLinks = [
  { to: '1', label: 'JPEG 1' },
  { to: '2', label: 'JPEG 2' },
  { to: '3', label: 'JPEG 3' }
]

export const Gallery = () => <PagesTemplate prevPage="/" header="Gallery" links={links} />
export const PNGImages = () => <PagesTemplate prevPage="/gallery" header="PNG images" links={pngLinks} />
export const JPEGImages = () => <PagesTemplate prevPage="/gallery" header="JPEG images" links={jpegLinks} />
export const GalleryPNGItem = () => <PageTemplate prevPage="/gallery/png" headerPrefix="PNG" />
export const GalleryJPEGItem = () => <PageTemplate prevPage="/gallery/jpeg" headerPrefix="JPEG" />
