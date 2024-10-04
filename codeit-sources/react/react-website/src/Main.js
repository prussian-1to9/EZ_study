import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@components/App";
import HomePage from "@pages/HomePage";
import CoursePage from "@pages/CoursePage";
import CourseListPage from "@pages/CourseListPage";
import WishlistPage from "@pages/WishlistPage";
import QuestionListPage from "@pages/QuestionListPage";
import QuestionPage from "@pages/QuestionPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses">
            <Route index element={<CourseListPage />} />
            <Route path="react-frontend-development" element={<CoursePage />} />
          </Route>
          <Route
            path="/courses/react-frontend-development"
            element={<CoursePage />}
          />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/questions">
            <Route index element={<QuestionListPage />} />
            <Route path=":questionId" element={<QuestionPage />} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
