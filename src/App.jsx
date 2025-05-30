import { Route, Routes } from "react-router-dom";

import Global from "./Global";
import {
  AboutusPage,
  BlogPage,
  ContactusPage,
  HomePage,
  LoginPage,
  NotFound,
  ProductPage,
  ProfilePage,
  SupportPage,
} from "./pages";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <>
      <Global />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutusPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="Blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactusPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
