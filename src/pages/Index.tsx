import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PetitionForm } from "@/components/PetitionForm";
import { 
  Sprout, 
  Globe, 
  Leaf, 
  Factory, 
  Users, 
  Target,
  Zap,
  Building2,
  CloudRain,
  Trees,
  Share2,
  Mail,
  Calendar
} from "lucide-react";
import { differenceInDays } from "date-fns";
import heroImage from "@/assets/hero-hemp-earth.jpg";

const Index = () => {
  const [signatureCount, setSignatureCount] = useState(12538);
  const targetDate = new Date('2026-04-21');
  const daysRemaining = differenceInDays(targetDate, new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setSignatureCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPetition = () => {
    document.getElementById('petition')?.scrollIntoView({ behavior: 'smooth' });
  };

  const shareOnSocial = (platform: string) => {
    const url = window.location.href;
    const text = "Join me in signing the global petition for World Hemp Day! 🌿";
    
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`
    };
    
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent-foreground font-medium">April 21, 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in-up text-balance">
            World Hemp Day — April 21, 2026
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
            A global call to restore balance between people, planet, and prosperity — through one extraordinary plant.
          </p>
          
          <div className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto space-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p>For 10,000 years, hemp sustained humanity.</p>
            <p>Then we forgot its power.</p>
            <p>Now, as our planet faces its greatest challenge, hemp returns as a natural climate ally — capturing carbon, healing soil, and creating sustainable livelihoods.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              onClick={scrollToPetition}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth text-lg px-8 py-6"
            >
              Sign the Global Petition
            </Button>
            <Button 
              onClick={() => document.getElementById('why-hemp')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="bg-transparent border-white/50 text-white hover:bg-white/20 hover:border-white transition-smooth text-lg px-8 py-6"
            >
              Learn How Hemp Helps
            </Button>
          </div>
          
          <div className="mt-12 animate-float">
            <Sprout className="mx-auto h-12 w-12 text-accent" />
          </div>
        </div>
      </section>

      {/* Petition Section */}
      <section id="petition" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                What We Ask — Sign the Petition
              </h2>
              
              <div className="inline-block mb-8 px-8 py-4 bg-accent/20 rounded-full border-2 border-accent shadow-glow animate-scale-in">
                <p className="text-3xl md:text-4xl font-bold text-accent animate-pulse">
                  {signatureCount.toLocaleString()}
                </p>
                <p className="text-sm md:text-base text-accent/80 font-medium mt-1">
                  people have already signed
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                We call on UN Member States to sponsor a General Assembly resolution declaring <strong className="text-foreground">April 21 as World Hemp Day</strong> to accelerate hemp research, harmonize regulation, and unlock its climate and socio-economic benefits.
              </p>
              
              <div className="text-left max-w-3xl mx-auto mb-6 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-base text-muted-foreground mb-3">
                  <strong className="text-foreground">To:</strong> Ambassadors & Permanent Missions of UN Member States
                </p>
                <p className="text-base text-muted-foreground">
                  We urge your government to sponsor and support a UN General Assembly Resolution declaring April 21 as World Hemp Day, recognizing industrial hemp as a nature-based solution to climate change and a driver of sustainable livelihoods and industry.
                </p>
              </div>
              
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-3">
                <strong className="text-foreground">Why April 21?</strong> It sits before Earth Day (April 22) to shift the global conversation toward solutions and regenerative industry.
              </p>
              
              <p className="text-lg font-medium text-foreground max-w-3xl mx-auto mb-4">
                Every signature is a seed — plant yours today.
              </p>
              
              <p className="text-xs text-muted-foreground/60 max-w-3xl mx-auto">
                Your information is secure and never shared.
              </p>
            </div>
            
            <PetitionForm />
            
            <div className="mt-12 text-center animate-fade-in">
              <div className="inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border-2 border-accent/30 shadow-glow">
                <Calendar className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-1">
                    {daysRemaining}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    days until World Hemp Day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hemp Section */}
      <section id="why-hemp" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 animate-fade-in">
            How Hemp Heals the Planet
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Hemp is one of nature's most powerful tools for climate recovery and green innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CloudRain,
                title: "Captures Carbon",
                description: "One hectare absorbs 8–15 tons of CO₂ per harvest — more than a forest.",
                delay: "0s"
              },
              {
                icon: Trees,
                title: "Restores Soil",
                description: "Deep roots clean, aerate, and regenerate degraded land.",
                delay: "0.1s"
              },
              {
                icon: Leaf,
                title: "Saves Water",
                description: "Needs minimal irrigation and no pesticides.",
                delay: "0.2s"
              },
              {
                icon: Building2,
                title: "Replaces Plastics & Concrete",
                description: "Hemp becomes biodegradable packaging and carbon-negative building material.",
                delay: "0.3s"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-glow transition-smooth animate-scale-in border-border/50"
                style={{ animationDelay: item.delay }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDGs Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 animate-fade-in">
            Hemp Supports All 17 UN Sustainable Development Goals
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { number: 1, title: "No Poverty", description: "Creates green jobs and new rural industries." },
              { number: 2, title: "Zero Hunger", description: "Hemp seeds are a complete plant protein." },
              { number: 3, title: "Good Health & Well-being", description: "Supports nutrition and wellness." },
              { number: 4, title: "Quality Education", description: "Drives sustainability research and green curricula." },
              { number: 5, title: "Gender Equality", description: "Empowers women in farming and entrepreneurship." },
              { number: 6, title: "Clean Water", description: "Uses 75% less water than cotton; no harmful runoff." },
              { number: 7, title: "Clean Energy", description: "Converts into biofuels and sustainable aviation fuel." },
              { number: 8, title: "Decent Work & Growth", description: "Builds new green economies." },
              { number: 9, title: "Industry & Innovation", description: "Enables bioplastics and carbon-smart materials." },
              { number: 10, title: "Reduced Inequalities", description: "Accessible to small and developing farmers." },
              { number: 11, title: "Sustainable Cities", description: "Hempcrete = carbon-negative construction." },
              { number: 12, title: "Responsible Consumption", description: "Fully biodegradable and recyclable." },
              { number: 13, title: "Climate Action", description: "World's most efficient CO₂-capturing crop." },
              { number: 14, title: "Life Below Water", description: "Prevents pollution through low-input farming." },
              { number: 15, title: "Life on Land", description: "Restores soil health and biodiversity." },
              { number: 16, title: "Peace & Institutions", description: "Encourages transparent, sustainable policies." },
              { number: 17, title: "Partnerships for Goals", description: "Bridges science, farmers, and global collaboration." }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-glow transition-smooth animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-accent">{item.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs font-semibold text-foreground leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-fade-in">
            From Ancient Roots to Modern Climate Solution
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "8000 BCE", text: "First cultivated crop in Asia", icon: Sprout },
                { year: "1619 CE", text: "Hemp mandated by law in early America", icon: Leaf },
                { year: "1937", text: "Banned under Marijuana Tax Act", icon: Target },
                { year: "2018", text: "Legal revival and green economy boom", icon: Factory },
                { year: "2026", text: "Proposed UN recognition — World Hemp Day", icon: Globe }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-6 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-2xl font-bold text-accent">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-full">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
              Grow Prosperity, Not Pollution
            </h2>
            
            <div className="space-y-6 text-xl text-muted-foreground">
              <p className="font-display text-2xl text-foreground italic">
                World Hemp Day is more than a date — it's a declaration that sustainability is achievable through unity, science, and soil.
              </p>
              <p className="font-display text-2xl text-foreground italic">
                By celebrating hemp, we honor ancient wisdom and ignite modern innovation.
              </p>
              <p className="font-display text-2xl text-foreground italic">
                Let's make this a day the world grows together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Your Voice Matters
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Help us show the United Nations that the world is ready.<br />
              Every signature brings us closer to a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToPetition}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth text-lg px-8"
              >
                Sign the Petition
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 transition-smooth text-lg px-8"
                onClick={() => {}}
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share the Movement 🌍
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => shareOnSocial('twitter')}
                className="hover:text-accent transition-smooth"
              >
                𝕏 Twitter
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => shareOnSocial('linkedin')}
                className="hover:text-accent transition-smooth"
              >
                LinkedIn
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => shareOnSocial('whatsapp')}
                className="hover:text-accent transition-smooth"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-display font-bold">World Hemp Day Initiative 2026</h3>
            
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <a href="mailto:info@worldhempday.org" className="flex items-center gap-2 hover:text-accent transition-smooth">
                <Mail className="h-5 w-5" />
                info@worldhempday.org
              </a>
            </div>
            
            <p className="text-sm text-primary-foreground/80">
              A non-political global citizens' movement supporting the UN Sustainable Development Goals.
            </p>
            
            <p className="text-xs text-primary-foreground/60">
              © 2026 World Hemp Day Initiative
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
