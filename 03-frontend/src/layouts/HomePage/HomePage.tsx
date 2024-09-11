import { Carousel } from "./components/Carousel";
import { ExplorTopBooks } from "./components/ExplorTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
  return (
    <>
      <ExplorTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};
