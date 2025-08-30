import TextMarquee from "@/components/marquee";
import Testimonials from "@/components/testimonial";
import SiteLayout from "@/layouts/site";
import { HeroHome, Why } from "@/views/site/home";

export default function Home() {
  return (
    <SiteLayout>
      <div className="">
        <HeroHome />
        <Why />
        <TextMarquee direction="right" />
        <Testimonials />
      </div>
    </SiteLayout>
  );
}
