
import { OureServicesCarouselPagenation } from "./components/shared/our-services/oure-services-carousel-pagenation";
import { TopContent } from "./components/shared/our-services/top-content";
import { Container } from "./components/shared/reuses-components/container";

const Page = () => {
  return (
    <Container>
      <TopContent className="mb-5" />
      <OureServicesCarouselPagenation/>
    </Container>
  );
};

export default Page;
