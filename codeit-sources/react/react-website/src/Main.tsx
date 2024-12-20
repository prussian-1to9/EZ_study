import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@components/App";

/* pages */
import HomePage from "@pages/HomePage";
import CoursePage from "@pages/CoursePage";
import CourseListPage from "@pages/CourseListPage";
import WishlistPage from "@pages/WishlistPage";
import QuestionListPage from "@pages/QuestionListPage";
import QuestionPage from "@pages/QuestionPage";
import NotFoundPage from "@pages/NotFoundPage";

const Main = () => {
  // Ro
  return (
    <BrowserRouter>
      {/* Routes 안에는 반드시 Route, Fragment만 들어올 수 있음 */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="/courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
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

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
