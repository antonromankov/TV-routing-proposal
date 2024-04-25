import { Route, Routes, Navigate } from 'react-router-dom'

import { Gallery, PNGImages, GalleryPNGItem, JPEGImages, GalleryJPEGItem } from './Gallery'
import { Pages, Page } from './Pages'
import { FirstLayout, SecondLayout } from './layouts'
import { Page404 } from './Page404'
import { SettingsPageId, SettingsPages } from './Templates'

export const Router = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Navigate to="/app" />} />
      <Route path="app" element={<FirstLayout />}>
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

      <Route path="settings" element={<SecondLayout />}>
        <Route path="pages" element={<SettingsPages />} />
        <Route path="pages/:id" element={<SettingsPageId />} />
      </Route>
    </Route>

    <Route path="*" element={<Page404 />} />
  </Routes>
)
