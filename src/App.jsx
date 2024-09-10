import "./App.css";
import AppLayout from "./layout/AppLayout";
import JobListings from "./pages/JobListings";
import JobPage from "./pages/JobPage";
import LandingPage from "./pages/LandingPage";
import MyJobs from "./pages/MyJobs";
import Onboarding from "./pages/Onboarding";
import PageNotFound from "./pages/PageNotFound";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListings />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
      {
        path: "/postjob",
        element: <PostJob />,
      },
      {
        path: "/savedjob",
        element: <SavedJob />,
      },
      {
        path: "/myjobs",
        element: <MyJobs />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
