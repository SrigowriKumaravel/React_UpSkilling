import React from "react";
import HomePage from "./pages/HomePage";
import ElectronicsPage from "./pages/ElectronicsPage";
import BooksPage from "./pages/BooksPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ✅ define routes with createBrowserRouter
const route = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/electronics", element: <ElectronicsPage /> },
  { path: "/books", element: <BooksPage /> },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
