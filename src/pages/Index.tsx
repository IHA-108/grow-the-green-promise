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
  Mail
} from "lucide-react";
import heroImage from "@/assets/hero-hemp-earth.jpg";

const Index = () => {
  const [signatureCount, setSignatureCount] = useState(12538);

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
            World Hemp Day
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
            A Global Call for Climate Action Through Nature's Most Sustainable Crop
          </p>
          
          <Button 
            onClick={scrollToPetition}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth text-lg px-8 py-6 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            👉 Sign the Global Petition
          </Button>
          
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
                📝 Sign the Global Petition
              </h2>
              
              <div className="inline-block mb-8 px-6 py-3 bg-accent/10 rounded-full border border-accent/30">
                <p className="text-2xl font-semibold text-accent">
                  {signatureCount.toLocaleString()} people have already signed
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                We, global citizens, farmers, researchers, and innovators, urge the United Nations to declare 
                <strong className="text-foreground"> April 21st as World Hemp Day</strong> — a symbol of sustainability, 
                innovation, and climate action.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This resolution calls for recognition of industrial hemp as a nature-based solution contributing 
                directly to the UN Sustainable Development Goals (SDGs).
              </p>
            </div>
            
            <PetitionForm />
          </div>
        </div>
      </section>

      {/* Why Hemp Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-fade-in">
            🌿 Why Hemp? The Climate Champion Crop
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CloudRain,
                title: "CO₂ Champion",
                description: "Absorbs 8–15 tons of CO₂ per hectare – more than forests.",
                delay: "0s"
              },
              {
                icon: Zap,
                title: "Rapid Growth",
                description: "Grows in 100 days, restoring soil and reducing pesticide use.",
                delay: "0.1s"
              },
              {
                icon: Factory,
                title: "25,000+ Products",
                description: "Transforms into eco-products – textiles, paper, bioplastics, and clean fuel.",
                delay: "0.2s"
              },
              {
                icon: Users,
                title: "Economic Revival",
                description: "Revives rural economies through sustainable green jobs.",
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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-fade-in">
            ⚙️ Aligned with the UN Sustainable Development Goals
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: Target, number: 2, color: "text-yellow-600" },
                { icon: Zap, number: 7, color: "text-yellow-500" },
                { icon: Building2, number: 11, color: "text-orange-500" },
                { icon: Globe, number: 13, color: "text-green-600" },
                { icon: Trees, number: 15, color: "text-green-700" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`p-4 bg-accent/10 rounded-full ${item.color}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">SDG {item.number}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  title: "SDG 2 – Zero Hunger", 
                  description: "Hemp seeds = plant-based superfood rich in protein and omega fatty acids",
                  delay: "0s"
                },
                { 
                  title: "SDG 7 – Clean Energy", 
                  description: "Biofuel & sustainable aviation fuel from hemp biomass",
                  delay: "0.1s"
                },
                { 
                  title: "SDG 11 – Sustainable Cities", 
                  description: "Carbon-negative hempcrete for green construction",
                  delay: "0.2s"
                },
                { 
                  title: "SDG 13 – Climate Action", 
                  description: "Top CO₂ absorber crop fighting climate change",
                  delay: "0.3s"
                },
                { 
                  title: "SDG 15 – Life on Land", 
                  description: "Soil restoration and biodiversity enhancement",
                  delay: "0.4s"
                }
              ].map((item, index) => (
                <Card key={index} className="shadow-soft animate-fade-in" style={{ animationDelay: item.delay }}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-fade-in">
            🕰 From Ancient Crop to Modern Climate Solution
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "8000 BCE", text: "First cultivated crop in Asia", icon: Sprout },
                { year: "1619 CE", text: "Hemp mandated by law in early America", icon: Leaf },
                { year: "1937", text: "Banned under Marijuana Tax Act", icon: Target },
                { year: "2018", text: "Legal revival and green economy boom", icon: Factory },
                { year: "2026", text: "Call for World Hemp Day at the United Nations", icon: Globe }
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
              💚 A Vision Rooted in Sustainability
            </h2>
            
            <div className="space-y-6 text-xl text-muted-foreground">
              <p className="font-display text-2xl text-foreground italic">
                A world that grows prosperity, not pollution.
              </p>
              <p className="font-display text-2xl text-foreground italic">
                A day that honors innovation grounded in nature.
              </p>
              <p className="font-display text-2xl text-foreground italic">
                A reminder that the solutions to our climate crisis are ancient — and growing again.
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
              📢 Your Voice Matters
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
                👉 Sign the Petition Now
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 transition-smooth text-lg px-8"
                onClick={() => {}}
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share This Movement
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
              In partnership with global hemp advocates and sustainability researchers.
            </p>
            
            <p className="text-xs text-primary-foreground/60">
              © 2026 World Hemp Day Initiative. Building a sustainable future, one signature at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
