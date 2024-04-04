import { PagesTemplate, PageTemplate } from './Templates'

const links = [
  { to: '1', label: 'Page 1' },
  { to: '2', label: 'Page 2' },
  { to: '3', label: 'Page 3' }
]

export const Pages = () => <PagesTemplate prevPage="/" header="Pages" links={links} />
export const Page = () => <PageTemplate prevPage="/pages" headerPrefix="Page" />
