import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { DownloadPage } from "./pages/Download";
import { About } from "./pages/About";
import { FAQPage } from "./pages/FAQ";
import { ChangelogPage } from "./pages/Changelog";
import { Categories } from "./pages/Categories";
import { CategoryPage } from "./pages/Category";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="download" element={<DownloadPage />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="updates" element={<Navigate to="/changelog" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}