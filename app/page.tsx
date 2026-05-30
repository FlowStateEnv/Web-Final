import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { 
  Droplets, 
  FileCheck, 
  Map, 
  BarChart3, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Shield,
  DollarSign,
  Users,
  TrendingUp,
  ShieldCheck,
  Award
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "@/components/mobile-menu"
import { Reveal } from "@/components/reveal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Flow State Environmental" width={180} height={60} className="h-14 w-auto" />
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </nav>
            
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Reveal className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              MS4 &amp; NFIP Compliance Experts
            </Reveal>
            <Reveal as="h1" delay={80} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Stormwater &amp; Floodplain<br />
              <span className="text-[#005a8c]">Compliance</span>{" "}
              <span className="text-[#276749]">Made Simple</span>
            </Reveal>
            <Reveal as="p" delay={160} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flow State Environmental helps communities meet MS4 and NFIP regulatory requirements with comprehensive compliance packages, expert training, and ongoing support. From permit applications to audit preparation, we have you covered.
            </Reveal>
            <Reveal delay={240} className="flex flex-wrap justify-center gap-4 pt-2">
              <Button size="lg" asChild className="transition-transform hover:-translate-y-0.5">
                <Link href="#contact">
                  Get Compliant Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-transform hover:-translate-y-0.5">
                <Link href="#services">View Our Services</Link>
              </Button>
            </Reveal>
            
            {/* Stats Row */}
            <Reveal delay={320} className="grid grid-cols-3 gap-8 pt-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">MS4</div>
                <div className="text-sm text-muted-foreground">Full Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">NFIP</div>
                <div className="text-sm text-muted-foreground">Audit Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Business Pitch / Value Proposition */}
      <section className="py-10 md:py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#276749]/10 text-[#276749] text-sm font-semibold">
              <Award className="h-4 w-4" />
              15+ Years of Excellence
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Expert Compliance Support.{" "}
              <span className="text-[#005a8c]">More Value.</span>{" "}
              <span className="text-[#276749]">Less Overhead.</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Building and retaining an in-house compliance team is expensive and time-consuming. We deliver enterprise-level MS4 and NFIP expertise that is more efficient, flexible, and cost-effective&mdash;without compromising on quality or accuracy.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lower Costs",
                desc: "Reduce compliance overhead compared to maintaining a full in-house team.",
                icon: DollarSign,
              },
              {
                title: "Expert Support",
                desc: "Work directly with specialists who live and breathe stormwater and floodplain regulations.",
                icon: Users,
              },
              {
                title: "Flexible & Scalable",
                desc: "Get the right level of support for your community—scale up or down with ease.",
                icon: TrendingUp,
              },
              {
                title: "Reduce Risk",
                desc: "Stay audit-ready and ahead of changing regulatory requirements year-round.",
                icon: ShieldCheck,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Card className="h-full border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Reveal className="relative flex items-center justify-center">
              <Image src="/logo.png" alt="Flow State Environmental" width={400} height={400} className="w-full max-w-md h-auto" />
            </Reveal>
            <Reveal delay={120} className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Partner in Environmental Compliance
              </h2>
              <p className="text-muted-foreground">
                Flow State Environmental specializes in helping municipalities and communities navigate the complexities of MS4 and NFIP compliance. We understand that regulatory requirements can be overwhelming, especially for newly regulated communities.
              </p>
              <p className="text-muted-foreground">
                Our comprehensive compliance packages include everything you need - from initial audits and policy gap analysis to permit applications, staff training, and annual reporting. We also offer GIS services, water monitoring solutions, and custom tools to streamline your compliance processes.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">MS4 permit compliance specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">NFIP and floodplain management experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Custom GIS mapping and data solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Real-time water monitoring systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">State and federal audit preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Grant writing and applications</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MS4 & NFIP Compliance Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Helping communities meet their stormwater and floodplain management requirements with comprehensive compliance packages and expert support.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MS4 Compliance */}
            <Card className="border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">MS4 Compliance</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete MS4 permit compliance including audits, policy gap analysis, permit applications, and all six Minimum Control Measures (MCMs). Perfect for newly regulated communities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Compliance audits
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    IDDE programs
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Annual reporting
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Audit support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* NFIP Compliance */}
            <Card className="border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">NFIP Compliance</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Full National Flood Insurance Program compliance services including staff training, ordinance review, floodplain development permitting, and FEMA/SEMA audit preparation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Staff training
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Ordinance review
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Plan review
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    CRS participation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Stormwater Management */}
            <Card className="border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Stormwater Management</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive stormwater programs including SWMP creation, SWPPP development, post-construction controls, and pollution prevention programs for municipal facilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    SWMP creation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    SWPPP review
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    BMP inventory
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Inspector training
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* GIS & Data Services */}
            <Card className="border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">GIS & Data Services</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Asset management and digital transformation services including MS4/outfall mapping, floodplain data tracking, and publicly visible interactive maps and dashboards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Asset mapping
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Data management
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Custom dashboards
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Digital transformation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Water Quality & Quantity Monitoring */}
            <Card className="border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Water Quality & Quantity Monitoring</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Water quantity and quality monitoring with real-time setups, customizable dashboards, flood analysis and modeling, and periodic maintenance training for municipal staff.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Flood modeling
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Custom alerts
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Staff training
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Additional Services */}
            <Card className="border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Additional Services</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Grant writing and applications, Tier II reporting, SPCC plan creation, process automation, and custom field and office tools tailored to your community needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Grant writing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Tier II reporting
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    SPCC plans
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    Process automation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center bg-white rounded-lg p-2">
              <Image src="/logo.png" alt="Flow State Environmental" width={140} height={48} className="h-12 w-auto" />
            </div>
            
            <nav className="flex items-center gap-6">
              <Link href="#about" className="text-background/70 hover:text-background transition-colors text-sm">
                About
              </Link>
              <Link href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                Services
              </Link>
              <Link href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="border-t border-background/20 mt-6 pt-6 text-center text-background/50 text-sm">
            <p>2026 Flow State Environmental, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
