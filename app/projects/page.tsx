"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })
  }, [])

  const projects = [
    {
      id: 1,
      title: "Tata Corporate Tower",
      description:
        "A state-of-the-art commercial complex with modern amenities and sustainable design. The 30-story tower features smart building technology, energy-efficient systems, and premium office spaces.",
      client: "Tata Group",
      status: "Completed",
      location: "Mumbai",
      year: "2022",
      category: "Commercial",
    },
    {
      id: 2,
      title: "Reliance Tech Park",
      description:
        "Multi-building technology campus with cutting-edge infrastructure and green spaces. The campus spans 15 acres and includes 5 buildings with a total built-up area of 1.2 million sq ft.",
      client: "Reliance Industries",
      status: "Completed",
      location: "Navi Mumbai",
      year: "2021",
      category: "Commercial",
    },
    {
      id: 3,
      title: "Mahindra Business Center",
      description:
        "Premium office space with contemporary design and advanced facilities. The 20-story building features a double-height lobby, sky gardens, and state-of-the-art conference facilities.",
      client: "Mahindra Group",
      status: "Completed",
      location: "Pune",
      year: "2020",
      category: "Commercial",
    },
    {
      id: 4,
      title: "Infosys Campus Extension",
      description:
        "Expansion of existing campus with sustainable architecture and smart building features. The project added 500,000 sq ft of office space with LEED Platinum certification.",
      client: "Infosys",
      status: "Completed",
      location: "Bengaluru",
      year: "2021",
      category: "Commercial",
    },
    {
      id: 5,
      title: "Adani Commercial Complex",
      description:
        "Mixed-use development featuring retail spaces, offices, and recreational areas. The complex includes a 25-story office tower, a 3-level retail podium, and underground parking for 1000 vehicles.",
      client: "Adani Group",
      status: "Completed",
      location: "Ahmedabad",
      year: "2022",
      category: "Mixed-Use",
    },
    {
      id: 6,
      title: "Birla Corporate Headquarters",
      description:
        "Iconic headquarters building with premium finishes and cutting-edge technology integration. The building features a distinctive façade, a 5-story atrium, and executive floors with panoramic views.",
      client: "Aditya Birla Group",
      status: "Completed",
      location: "Delhi",
      year: "2020",
      category: "Commercial",
    },
    {
      id: 7,
      title: "HDFC Bank Regional Office",
      description:
        "Modern banking facility with secure infrastructure and elegant design. The building includes specialized banking halls, secure vaults, and executive offices with advanced security systems.",
      client: "HDFC Bank",
      status: "Completed",
      location: "Chennai",
      year: "2021",
      category: "Commercial",
    },
    {
      id: 8,
      title: "L&T Tech Center",
      description:
        "Research and development facility with specialized laboratories and collaborative spaces. The campus includes testing facilities, prototype development areas, and innovation hubs.",
      client: "Larsen & Toubro",
      status: "Completed",
      location: "Hyderabad",
      year: "2022",
      category: "Industrial",
    },
    {
      id: 9,
      title: "Wipro Innovation Hub",
      description:
        "Cutting-edge facility designed to foster innovation and collaboration. The building features flexible workspaces, innovation labs, and client experience centers.",
      client: "Wipro",
      status: "Completed",
      location: "Pune",
      year: "2021",
      category: "Commercial",
    },
    {
      id: 10,
      title: "ITC Hospitality Complex",
      description:
        "Luxury hotel and convention center with world-class amenities. The complex includes a 300-room hotel, multiple restaurants, and a convention center that can accommodate 2000 people.",
      client: "ITC Group",
      status: "Completed",
      location: "Kolkata",
      year: "2022",
      category: "Hospitality",
    },
    {
      id: 11,
      title: "Godrej Residential Towers",
      description:
        "Premium residential development with luxury apartments and extensive amenities. The project includes 4 towers with 40 floors each, offering 2, 3, and 4 BHK apartments with panoramic views.",
      client: "Godrej Properties",
      status: "Completed",
      location: "Mumbai",
      year: "2021",
      category: "Residential",
    },
    {
      id: 12,
      title: "Bharti Airtel Data Center",
      description:
        "State-of-the-art data center with advanced cooling and power systems. The facility spans 100,000 sq ft with redundant power supplies and cutting-edge security systems.",
      client: "Bharti Airtel",
      status: "Completed",
      location: "Noida",
      year: "2022",
      category: "Infrastructure",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-muted/30 h-80 z-0"></div>
          <div className="container relative z-10">
            <div className="mb-16 text-center" data-aos="fade-up">
              <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our portfolio of completed projects that showcase our expertise, innovation, and commitment to
                excellence in construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg bg-background"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project+${project.id}`}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium">Client:</span>
                      <span className="text-sm text-primary">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group">
                      View Project Details
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
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Partner With Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're planning a commercial complex, residential development, or infrastructure project, our
                  team of experts is ready to bring your vision to life. Let's collaborate to create spaces that inspire
                  and endure.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Get in Touch
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
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </div>
              <div data-aos="fade-left">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Construction+Site"
                  alt="Construction Site"
                  width={700}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

