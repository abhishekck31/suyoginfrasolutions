"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { ArrowRight, CheckCircle, ChevronRight, Clock, MapPin, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })

    // Handle hash links for smooth scrolling
    const handleHashClick = (e) => {
      const href = e.currentTarget.getAttribute("href")
      if (href?.startsWith("/#")) {
        e.preventDefault()
        const targetId = href.replace("/#", "")
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Add event listeners to all hash links
    const hashLinks = document.querySelectorAll('a[href^="/#"]')
    hashLinks.forEach((link) => {
      link.addEventListener("click", handleHashClick)
    })

    // Cleanup
    return () => {
      hashLinks.forEach((link) => {
        link.removeEventListener("click", handleHashClick)
      })
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Suyog Infra Solutions Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold">Suyog Infra Solutions</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#featured-projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svgru?height=800&width=1920"
              alt="Construction site"
              width={1920}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-start gap-4 md:max-w-[60%]">
              <div data-aos="fade-up" data-aos-delay="100">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Building Excellence, <span className="text-primary">Delivering Trust</span>
                </h1>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <p className="text-xl text-muted-foreground">
                  Premium construction and infrastructure solutions for projects that stand the test of time.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group relative overflow-hidden"
                  onClick={() => document.getElementById("featured-projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="relative z-10">Explore Our Projects</span>
                  <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div data-aos="fade-up" className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-3xl font-bold text-primary">15+</span>
                </div>
                <h3 className="text-lg font-semibold">Years of Experience</h3>
                <p className="text-muted-foreground">Delivering excellence since 2008</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-3xl font-bold text-primary">200+</span>
                </div>
                <h3 className="text-lg font-semibold">Projects Completed</h3>
                <p className="text-muted-foreground">Across residential and commercial sectors</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-3xl font-bold text-primary">150+</span>
                </div>
                <h3 className="text-lg font-semibold">Expert Team</h3>
                <p className="text-muted-foreground">Skilled professionals and engineers</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-3xl font-bold text-primary">98%</span>
                </div>
                <h3 className="text-lg font-semibold">Client Satisfaction</h3>
                <p className="text-muted-foreground">Committed to exceeding expectations</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2" data-aos="fade-right">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="About Suyog Infra"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg hidden md:block shadow-xl">
                    <p className="text-3xl font-bold text-primary-foreground">15+</p>
                    <p className="text-primary-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Building a Legacy of Trust and Innovation
                </h2>
                <p className="text-muted-foreground mb-4">
                  Suyog Infra Solutions is a premier construction company dedicated to excellence in every project. With
                  over 15 years of experience, we've established ourselves as industry leaders through our commitment to
                  quality, innovation, and client satisfaction.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our journey began in 2008 with a vision to transform the construction landscape in India. Today, we
                  stand tall as one of the most trusted names in the industry, having successfully delivered over 200
                  projects across residential, commercial, and infrastructure sectors.
                </p>
                <p className="text-muted-foreground mb-8">
                  What sets us apart is our unwavering commitment to quality, timely delivery, and customer
                  satisfaction. Our team of 150+ skilled professionals, including engineers, architects, and project
                  managers, work tirelessly to bring your vision to life.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Quality Assurance</p>
                      <p className="text-sm text-muted-foreground">ISO 9001:2015 Certified</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Expert Team</p>
                      <p className="text-sm text-muted-foreground">Highly Qualified Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Client Satisfaction</p>
                      <p className="text-sm text-muted-foreground">98% Satisfaction Rate</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Pan India Presence</p>
                      <p className="text-sm text-muted-foreground">Projects Across 25+ Cities</p>
                    </div>
                  </div>
                </div>
                <Link href="/about">
                  <Button className="w-fit group">
                    Learn More About Us
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2" data-aos="fade-right">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=CEO+Eshwar"
                  alt="CEO Eshwar"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="md:w-1/2" data-aos="fade-left">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Leadership
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Meet Our CEO</h2>
                <h3 className="text-2xl font-bold mb-4">Eshwar</h3>
                <p className="text-muted-foreground mb-4">
                  Our company is led by Eshwar, a distinguished Civil Engineering graduate from the prestigious Indian
                  Institute of Technology, Kharagpur (IIT KGP).
                </p>
                <p className="text-muted-foreground mb-4">
                  With his exceptional academic background and extensive industry experience, Eshwar brings unparalleled
                  expertise and vision to Suyog Infra Solutions. His technical knowledge, combined with strategic
                  business acumen, has been instrumental in establishing our company as a leader in the construction
                  industry.
                </p>
                <p className="text-muted-foreground mb-4">
                  Under his leadership, we have successfully completed numerous landmark projects across India, setting
                  new benchmarks for quality and innovation in construction.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Direct Line</p>
                    <p className="text-primary">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="featured-projects" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Showcasing Our Finest Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and
                excellence in construction.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md border p-1 bg-background">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground">
                  All Projects
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Tata Corporate Tower",
                  description: "A state-of-the-art commercial complex with modern amenities and sustainable design.",
                  client: "Tata Group",
                  status: "Completed",
                  location: "Mumbai",
                },
                {
                  id: 2,
                  title: "Reliance Tech Park",
                  description: "Multi-building technology campus with cutting-edge infrastructure and green spaces.",
                  client: "Reliance Industries",
                  status: "Completed",
                  location: "Navi Mumbai",
                },
                {
                  id: 3,
                  title: "Mahindra Business Center",
                  description: "Premium office space with contemporary design and advanced facilities.",
                  client: "Mahindra Group",
                  status: "Completed",
                  location: "Pune",
                },
                {
                  id: 4,
                  title: "Infosys Campus Extension",
                  description:
                    "Expansion of existing campus with sustainable architecture and smart building features.",
                  client: "Infosys",
                  status: "Completed",
                  location: "Bengaluru",
                },
                {
                  id: 5,
                  title: "Adani Commercial Complex",
                  description: "Mixed-use development featuring retail spaces, offices, and recreational areas.",
                  client: "Adani Group",
                  status: "Completed",
                  location: "Ahmedabad",
                },
                {
                  id: 6,
                  title: "Birla Corporate Headquarters",
                  description:
                    "Iconic headquarters building with premium finishes and cutting-edge technology integration.",
                  client: "Aditya Birla Group",
                  status: "Completed",
                  location: "Delhi",
                },
              ].map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Project+${project.id}`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium">Client:</span>
                      <span className="text-sm text-primary">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10" data-aos="fade-up">
              <Link href="/projects">
                <Button variant="outline" size="lg" className="group">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a wide range of construction and infrastructure services tailored to meet your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Commercial Construction",
                  description:
                    "Building state-of-the-art commercial spaces including offices, retail centers, and mixed-use developments with focus on functionality and aesthetics.",
                  icon: "/placeholder.svg?height=40&width=40&text=CC",
                },
                {
                  title: "Residential Projects",
                  description:
                    "Creating premium residential complexes and townships with modern amenities, thoughtful design, and sustainable features for comfortable living.",
                  icon: "/placeholder.svg?height=40&width=40&text=RP",
                },
                {
                  title: "Infrastructure Development",
                  description:
                    "Developing critical infrastructure including roads, bridges, and public facilities that connect communities and drive economic growth.",
                  icon: "/placeholder.svg?height=40&width=40&text=ID",
                },
                {
                  title: "Project Management",
                  description:
                    "Comprehensive project management services ensuring timely delivery within budget constraints while maintaining the highest quality standards.",
                  icon: "/placeholder.svg?height=40&width=40&text=PM",
                },
                {
                  title: "Renovation & Restoration",
                  description:
                    "Breathing new life into existing structures while preserving their character and integrity, enhancing functionality and energy efficiency.",
                  icon: "/placeholder.svg?height=40&width=40&text=RR",
                },
                {
                  title: "Consultancy Services",
                  description:
                    "Expert consultation on construction planning, design, and execution for optimal results, helping clients make informed decisions throughout the project lifecycle.",
                  icon: "/placeholder.svg?height=40&width=40&text=CS",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-none bg-muted/30 hover:bg-background"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="h-6 w-6"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button variant="link" className="p-0 h-auto group">
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10" data-aos="fade-up">
              <Button
                className="group"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section id="clients" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Our Clients
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted by Industry Leaders</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're proud to have worked with some of the most prestigious companies across India.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {["Tata Group", "Reliance", "Infosys", "Mahindra", "Adani Group", "Birla"].map((client, index) => (
                <div key={index} className="flex justify-center" data-aos="zoom-in" data-aos-delay={index * 50}>
                  <div className="h-20 w-40 bg-background rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                    <Image
                      src={`/placeholder.svg?height=60&width=120&text=${client}`}
                      alt={client}
                      width={120}
                      height={60}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our satisfied clients about their experience working with Suyog Infra Solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Sharma",
                  position: "CEO, Horizon Developers",
                  company: "Tata Group",
                  quote:
                    "Working with Suyog Infra Solutions was a seamless experience. Their attention to detail and commitment to quality is unmatched in the industry. They delivered our corporate headquarters ahead of schedule and within budget.",
                },
                {
                  name: "Priya Patel",
                  position: "Director, Urban Spaces",
                  company: "Reliance Industries",
                  quote:
                    "The team at Suyog Infra delivered our tech park project ahead of schedule without compromising on quality. Their professionalism and expertise are truly commendable. We look forward to partnering with them on future projects.",
                },
                {
                  name: "Vikram Singh",
                  position: "Project Manager",
                  company: "Mahindra Group",
                  quote:
                    "From planning to execution, Suyog Infra Solutions demonstrated exceptional skill and dedication. They turned our vision into reality with precision. Their innovative approach to problem-solving saved us both time and resources.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-background relative overflow-hidden group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10" data-aos="fade-up">
              <Link href="/testimonials">
                <Button variant="outline" className="group">
                  View All Testimonials
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div data-aos="fade-right">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get In Touch With Our Team</h2>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind or need consultation? Reach out to us and our team will get back to you
                  promptly. We're always ready to discuss how we can bring your construction vision to life.
                </p>

                <div className="space-y-6" id="contact-options">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Our Headquarters</p>
                      <p className="text-muted-foreground">
                        Rajajinagar, next to metro station above basan eye care, Bangalore
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Phone Number</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Email Address</p>
                      <p className="text-muted-foreground">info@suyoginfra.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Working Hours</p>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    size="lg"
                    className="group"
                    onClick={() => document.getElementById("contact-options")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div data-aos="fade-left" className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Rajajinagar+Office+Map"
                  alt="Office Location Map"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg max-w-md">
                    <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                    <p className="text-muted-foreground mb-4">
                      We'd love to meet you in person to discuss your project requirements.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="h-4 w-4" />
                      <span>Rajajinagar, next to metro station above basan eye care, Bangalore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative h-8 w-8 overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Suyog Infra Solutions Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Suyog Infra Solutions</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Building excellence, delivering trust. Premium construction and infrastructure solutions for projects
                that stand the test of time.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#featured-projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services#commercial-construction"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#residential-projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Residential Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#infrastructure-development"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Infrastructure Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#project-management"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#renovation-restoration"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Renovation & Restoration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#consultancy-services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Consultancy Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Rajajinagar, next to metro station above vasan eye care, Bangalore
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-muted-foreground">+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-muted-foreground">info@suyoginfra.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy;{new Date().getFullYear()} Suyog Infra Solutions. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

