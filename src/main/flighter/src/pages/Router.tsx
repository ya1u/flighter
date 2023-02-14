import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "./Main";
import MyPage from "./MyPage";
import Login from "../components/Login";
import NotFound from "../errors/NotFound";
import Footer from "../components/Footer";
import styled from "styled-components";
import Search from "./Search";

const BodyWrap = styled.div`
  height: auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 250px;
`;

const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage/*" element={<MyPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search/*" element={<Search />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BodyWrap>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;