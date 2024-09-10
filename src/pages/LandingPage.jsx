import companies from "../data/companies.json";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import faq from "../data/faq.json";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col justify-center items-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get{" "}
            <img
              src="/logo.png"
              alt="hirrd logo"
              className="h-12 md:h-24 lg:h-32"
            />
          </span>
        </h1>

        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listing or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        {/*Button */}
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/postjob">
          <Button variant="destructive" size="xl">
            Post Jobs
          </Button>
        </Link>
      </div>
      {/*Crousel */}

      <Carousel
        plugins={[emblaCarouselAutoplay({ delay: 2000 })]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-10 lg:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm-h-19 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      {/*Banner Image */}
      <img src="/banner.jpeg" alt="Banner" className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*Cards */}

        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search apply for jobs, track applications and more...
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Post Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications and get best candidates
          </CardContent>
        </Card>
      </section>
      {/*Accordian */}

      <Accordion type="single" collapsible>
        {faq.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
};

export default LandingPage;
