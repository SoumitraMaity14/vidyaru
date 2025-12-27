import { Banner } from "../Body/Section/Banner";
import EducationalResources from "./Section/EducationaResources";
import { Profiles } from "./Section/Profile";
import RecommendedSubjects from "./Section/RecommendedSubjects";
import { Testimonials } from "./Section/Testimonial";

export const Body = () => {
  return (
    <div className='font-sans-serif'>
      <Banner />
     <RecommendedSubjects/>
      <Profiles/>
      
      <EducationalResources/>
      <Testimonials/>
    </div>
  )
}
