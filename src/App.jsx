import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Events from "./pages/Events";
import Exhibitions from "./pages/Exhibitions";
import Nights from "./pages/Nights";
import Sponsors from "./pages/Sponsors";
import GuestLectures from "./pages/GuestLectures";
import Team from "./pages/Team";
import Workshops from "./pages/Workshops";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <div>
            <HomePage /> <About />
          </div>
        }
      />
      <Route path="events" element={<Events />} />
      <Route path="about" element={<About />} />
      <Route path="workshops" element={<Workshops />} />
      <Route path="exhibitions" element={<Exhibitions />} />
      <Route path="nights" element={<Nights />} />
      <Route path="sponsors" element={<Sponsors />} />
      <Route path="GuestLectures" element={<GuestLectures />} />
      <Route path="team" element={<Team />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
