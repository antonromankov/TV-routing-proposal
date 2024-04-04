import { Route, Outlet, Routes } from 'react-router-dom'

import { Gallery, PNGImages, GalleryPNGItem, JPEGImages, GalleryJPEGItem } from './Gallery'
import { Pages, Page } from './Pages'

export const Router = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Outlet />} />

      <Route path="pages">
        <Route index element={<Pages />} />
        <Route path=":id" element={<Page />} />
      </Route>

      <Route path="gallery">
        <Route index element={<Gallery />} />

        <Route path="png">
          <Route index element={<PNGImages />} />
          <Route path=":id" element={<GalleryPNGItem />} />
        </Route>

        <Route path="jpeg">
          <Route index element={<JPEGImages />} />
          <Route path=":id" element={<GalleryJPEGItem />} />
        </Route>
      </Route>
    </Route>
  </Routes>
)
