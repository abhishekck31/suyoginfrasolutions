"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })
  }, [])

  const services = [
    {
      id: "commercial-construction",
      title: "Commercial Construction",
      description:
        "Building state-of-the-art commercial spaces including offices, retail centers, and mixed-use developments with focus on functionality and aesthetics.",
      icon: "/placeholder.svg?height=40&width=40&text=CC",
      features: [
        "Corporate offices and headquarters",
        "Retail complexes and shopping malls",
        "Hotels and hospitality projects",
        "Educational institutions",
        "Healthcare facilities",
        "Industrial buildings and warehouses",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Commercial+Construction",
    },
    {
      id: "residential-projects",
      title: "Residential Projects",
      description:
        "Creating premium residential complexes and townships with modern amenities, thoughtful design, and sustainable features for comfortable living.",
      icon: "/placeholder.svg?height=40&width=40&text=RP",
      features: [
        "Luxury apartment complexes",
        "Gated communities and townships",
        "Villa projects and row houses",
        "Affordable housing developments",
        "Senior living communities",
        "Student housing facilities",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Residential+Projects",
    },
    {
      id: "infrastructure-development",
      title: "Infrastructure Development",
      description:
        "Developing critical infrastructure including roads, bridges, and public facilities that connect communities and drive economic growth.",
      icon: "/placeholder.svg?height=40&width=40&text=ID",
      features: [
        "Roads and highways",
        "Bridges and flyovers",
        "Water supply and sewage systems",
        "Power distribution networks",
        "Public transportation facilities",
        "Urban development projects",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Infrastructure+Development",
    },
    {
      id: "project-management",
      title: "Project Management",
      description:
        "Comprehensive project management services ensuring timely delivery within budget constraints while maintaining the highest quality standards.",
      icon: "/placeholder.svg?height=40&width=40&text=PM",
      features: [
        "End-to-end project planning and execution",
        "Budget management and cost control",
        "Schedule optimization and tracking",
        "Quality assurance and control",
        "Risk management and mitigation",
        "Stakeholder communication and reporting",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Project+Management",
    },
    {
      id: "renovation-restoration",
      title: "Renovation & Restoration",
      description:
        "Breathing new life into existing structures while preserving their character and integrity, enhancing functionality and energy efficiency.",
      icon: "/placeholder.svg?height=40&width=40&text=RR",
      features: [
        "Commercial building renovations",
        "Historic building restoration",
        "Facade improvements and upgrades",
        "Interior remodeling and space optimization",
        "Structural repairs and reinforcements",
        "Energy efficiency upgrades",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Renovation+Restoration",
    },
    {
      id: "consultancy-services",
      title: "Consultancy Services",
      description:
        "Expert consultation on construction planning, design, and execution for optimal results, helping clients make informed decisions throughout the project lifecycle.",
      icon: "/placeholder.svg?height=40&width=40&text=CS",
      features: [
        "Feasibility studies and site analysis",
        "Design review and value engineering",
        "Construction methodology planning",
        "Material selection and procurement advice",
        "Sustainability and green building consultation",
        "Building code compliance and regulatory guidance",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Consultancy+Services",
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
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive construction and infrastructure solutions tailored to meet your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => (
                <Card
                  key={service.id}
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
                    <Button
                      variant="link"
                      className="p-0 h-auto group"
                      onClick={() => document.getElementById(service.id)?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {services.map((service, index) => (
              <section
                key={service.id}
                id={service.id}
                className={`py-16 ${index % 2 === 0 ? "" : "bg-muted/30"}`}
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"}`}>
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                      Our Services
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{service.title}</h2>
                    <p className="text-muted-foreground mb-8">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="group">
                      Contact Us About This Service
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </section>
            ))}
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
                <Link href="/#contact">
                  <Button size="lg" className="group">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

