import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, Flower2, Users, MapPin, 
  Sparkles, Heart, Star, Award 
} from 'lucide-react';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: '/images/hero-wedding.jpg',
    title: 'Royal Mandap',
    category: 'Wedding Decor',
    description: 'Opulent floral mandap with dramatic lighting'
  },
  {
    id: 2,
    image: '/images/haldi-better.jpg',
    title: 'Haldi Ceremony',
    category: 'Haldi Ceremony',
    description: 'Vibrant yellow florals and traditional decor'
  },
  {
    id: 3,
    image: '/images/mehndi-better.jpg',
    title: 'Mehndi Night',
    category: 'Haldi Ceremony',
    description: 'Intimate mehndi setup with elegant drapes'
  },
  {
    id: 4,
    image: '/images/sangeet.jpg',
    title: 'Sangeet Stage',
    category: 'Stage Design',
    description: 'Grand stage with crystal chandeliers'
  },
  {
    id: 5,
    image: '/images/floral-mandap.jpg',
    title: 'Floral Dreams',
    category: 'Wedding Decor',
    description: 'Lavish floral installations'
  },
  {
    id: 6,
    image: '/images/couple-photo.jpg',
    title: 'Couple Portrait',
    category: 'Couple Photoshoot',
    description: 'Romantic pre-wedding photoshoot setup'
  },
  {
    id: 7,
    image: '/images/venue.jpg',
    title: 'Venue Transformation',
    category: 'Venue Styling',
    description: 'Elegant ballroom with custom lighting'
  },
  {
    id: 8,
    image: '/images/lighting.jpg',
    title: 'Dramatic Lighting',
    category: 'Lighting Concepts',
    description: 'Cinematic light design for unforgettable nights'
  },
  {
    id: 9,
    image: '/images/destination.jpg',
    title: 'Destination Wedding',
    category: 'Destination Wedding Planning',
    description: 'Luxury beachside royal ceremony'
  }
];

const services = [
  {
    icon: Crown,
    title: "Wedding Planning",
    desc: "End-to-end luxury wedding orchestration from vision to execution.",
    image: '/images/hero-wedding.jpg'
  },
  {
    icon: Flower2,
    title: "Royal Wedding Decor",
    desc: "Bespoke floral arrangements and thematic stage designs.",
    image: '/images/floral-mandap.jpg'
  },
  {
    icon: Users,
    title: "Haldi & Mehndi Decor",
    desc: "Vibrant and intimate setups for pre-wedding rituals.",
    image: '/images/haldi-better.jpg'
  },
  {
    icon: Sparkles,
    title: "Luxury Stage Design",
    desc: "Grand stages featuring chandeliers, drapery, and custom lighting.",
    image: '/images/sangeet.jpg'
  },
  {
    icon: MapPin,
    title: "Venue Styling",
    desc: "Transforming spaces into royal palaces with exquisite detailing.",
    image: '/images/venue.jpg'
  },
  {
    icon: Star,
    title: "Lighting Design",
    desc: "Cinematic illumination creating magical atmospheres.",
    image: '/images/lighting.jpg'
  },
  {
    icon: Heart,
    title: "Couple Entry Concepts",
    desc: "Dramatic entrances and memorable first looks.",
    image: '/images/couple-photo.jpg'
  },
  {
    icon: Award,
    title: "Destination Weddings",
    desc: "Exotic locations with full-service royal planning.",
    image: '/images/destination.jpg'
  }
];

const testimonials = [
  {
    name: "Priya & Arjun Sharma",
    role: "Destination Wedding, Udaipur",
    quote: "The Royal Event transformed our dreams into a reality beyond imagination. Every detail was executed with such royal elegance.",
    image: '/images/couple-photo.jpg'
  },
  {
    name: "Meera & Vikram Patel",
    role: "Royal Wedding, Mumbai",
    quote: "Their attention to detail and creativity made our wedding the talk of the town. Truly the best in luxury event planning.",
    image: '/images/hero-wedding.jpg'
  },
  {
    name: "Anika & Rohan Kapoor",
    role: "Sangeet & Wedding, Delhi",
    quote: "From the breathtaking stage to the floral masterpieces, everything was perfect. We felt like royalty.",
    image: '/images/sangeet.jpg'
  }
];

const featuredEvents = [
  { image: '/images/hero-wedding.jpg', caption: "Royal Wedding Night at Taj Palace", location: "Udaipur" },
  { image: '/images/haldi.jpg', caption: "Elegant Haldi Celebration", location: "Jaipur" },
  { image: '/images/sangeet.jpg', caption: "Luxury Sangeet Stage", location: "Mumbai" },
  { image: '/images/floral-mandap.jpg', caption: "Floral Dream Wedding", location: "Goa" },
];

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const categories = ['All', 'Wedding Decor', 'Haldi Ceremony', 'Stage Design', 'Couple Photoshoot', 'Venue Styling', 'Lighting Concepts', 'Destination Wedding Planning'];

  const filteredPortfolio = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-[#0b0b0b] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Crown className="w-8 h-8 text-[#d4af37]" />
              <div>
                <div className="heading text-2xl tracking-[3px] font-semibold">THE ROYAL EVENT</div>
                <div className="text-[10px] text-[#d4af37] -mt-1 tracking-[2px]">EST 2012</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[2px]">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#d4af37] transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#d4af37] transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#d4af37] transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-[#d4af37] transition-colors">Experience</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#d4af37] transition-colors">Testimonials</button>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.985 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 text-sm tracking-[1px] flex items-center gap-2"
          >
            PLAN YOUR EVENT
          </motion.button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/images/hero-wedding.jpg')`,
            filter: 'brightness(0.65)'
          }}
        />
        
        {/* Dramatic overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        {/* Floating particles / light specks */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.6, 1.2, 0.6]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-1.5 border border-[#d4af37]/40 rounded-full">
              <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
              <span className="text-xs tracking-[3px] text-[#d4af37]">LUXURY WEDDING CURATORS</span>
            </div>
            
            <h1 className="heading text-[92px] md:text-[120px] leading-[0.9] tracking-[-4px] mb-6">
              WHERE DREAMS<br />BECOME ROYAL<br />CELEBRATIONS
            </h1>
            
            <p className="max-w-md mx-auto text-xl text-white/80 mb-12">
              Crafting unforgettable moments with royal elegance
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button 
              onClick={() => scrollToSection('portfolio')}
              className="group px-14 py-5 border-2 border-white hover:border-[#d4af37] text-lg tracking-[2px] flex items-center gap-3 transition-all hover:bg-white/5"
              whileHover={{ scale: 1.02 }}
            >
              VIEW PORTFOLIO
              <div className="group-hover:rotate-45 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="px-14 py-5 bg-[#d4af37] text-black text-lg tracking-[2px] flex items-center justify-center gap-3 hover:bg-white transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              PLAN YOUR EVENT
            </motion.button>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="text-[10px] tracking-[3px] mb-3 text-white/50">SCROLL TO BEGIN</div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-28 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase text-xs tracking-[3px] text-[#d4af37] mb-4">OUR STORY</div>
            <h2 className="heading text-6xl leading-none tracking-tight mb-8">
              CRAFTING<br />ROYAL LEGACIES
            </h2>
            
            <div className="text-lg text-white/80 max-w-lg leading-relaxed">
              The Royal Event is a luxury event planning company dedicated to turning dream celebrations into breathtaking realities. 
              From intimate ceremonies to grand royal weddings, we design every detail with passion, elegance, and perfection.
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl text-[#d4af37]">180+</div>
                <div className="text-xs tracking-widest mt-1">WEDDINGS CURATED</div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-4xl text-[#d4af37]">100%</div>
                <div className="text-xs tracking-widest mt-1">ROYAL TOUCH</div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="/images/floral-mandap.jpg" 
              alt="Luxury Wedding Decor" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <div className="text-[#d4af37] text-sm tracking-widest">ESTABLISHED IN INDIA • SERVING THE WORLD</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline text-xs tracking-[4px] border-b border-[#d4af37]/30 pb-1">EXCELLENCE IN EVERY DETAIL</div>
            <h2 className="heading text-6xl mt-4">Our Signature Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="service-card group bg-zinc-950 border border-white/10 hover:border-[#d4af37]/60 rounded-3xl overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
                  <div className="absolute top-8 right-8">
                    <div className="w-14 h-14 rounded-2xl bg-black/70 flex items-center justify-center border border-white/30">
                      <service.icon className="w-7 h-7 text-[#d4af37]" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl heading mb-4">{service.title}</h3>
                  <p className="text-white/70 text-[15px] flex-1 leading-relaxed">{service.desc}</p>
                  
                  <div className="pt-8 border-t border-white/10 text-xs flex items-center justify-between text-[#d4af37]">
                    <span>LEARN MORE</span>
                    <div>→</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / GALLERY */}
      <section id="portfolio" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-[#d4af37]">CURATED MOMENTS</div>
              <h2 className="heading text-6xl">Portfolio</h2>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-sm border transition-all rounded-full whitespace-nowrap
                    ${activeCategory === cat 
                      ? 'border-[#d4af37] bg-[#d4af37] text-black' 
                      : 'border-white/20 hover:border-white/60'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredPortfolio.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="portfolio-item group relative aspect-[16/13] rounded-3xl overflow-hidden cursor-pointer border border-white/10"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-all" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="uppercase text-xs text-[#d4af37] tracking-widest mb-2">{item.category}</div>
                    <div className="heading text-3xl mb-2">{item.title}</div>
                    <div className="text-white/70 text-sm line-clamp-2">{item.description}</div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="px-8 py-3 border border-white/70 text-sm tracking-widest rounded-full">VIEW IN DETAIL</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SIGNATURE EXPERIENCE / TIMELINE */}
      <section id="experience" className="py-28 bg-zinc-950 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[4px] text-[#d4af37]">THE PROCESS</div>
            <h2 className="heading text-6xl mt-3">Your Royal Celebration Begins Here</h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-px bg-white/10" />
            
            {[
              { step: "01", title: "Discovery & Consultation", desc: "We listen to your vision, dreams, and every little detail that matters most." },
              { step: "02", title: "Concept & Design", desc: "Meticulous moodboards, 3D renders and exquisite material selections." },
              { step: "03", title: "Venue Transformation", desc: "Expert teams transform your chosen venue into a breathtaking royal setting." },
              { step: "04", title: "The Royal Celebration", desc: "Flawless execution ensuring you experience pure joy and magic." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-10 mb-16 last:mb-0 relative pl-16"
              >
                <div className="absolute left-0 top-3 w-11 h-11 rounded-full border-2 border-[#d4af37] flex items-center justify-center text-xs font-mono text-[#d4af37]">{item.step}</div>
                
                <div>
                  <div className="subheading text-4xl mb-4 tracking-tight">{item.title}</div>
                  <p className="text-lg text-white/80 leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="uppercase text-xs tracking-[4px] mb-6 text-center text-[#d4af37]">SIGNATURE MOMENTS</div>
          <h2 className="heading text-center text-6xl mb-12">Featured Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredEvents.map((event, _index) => (
              <motion.div 
                key={_index}
                whileHover={{ scale: 1.01 }}
                className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(event.image)}
              >
                <img 
                  src={event.image} 
                  alt={event.caption} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40" />
                
                <div className="absolute bottom-0 left-0 p-9 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-px text-xs border border-white/60 rounded">FEATURED</div>
                  </div>
                  <div className="heading text-[42px] leading-none tracking-tight mb-3">{event.caption}</div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" /> {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-28 border-y border-white/10 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Award className="mx-auto mb-6 text-[#d4af37]" />
            <div className="text-xs uppercase tracking-[3px]">VOICES OF ROYALTY</div>
          </div>
          
          <div className="relative h-[420px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, idx) => (
                idx === currentTestimonial && (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <div className="max-w-3xl mx-auto text-center">
                      <div className="italic text-3xl leading-tight tracking-tight mb-12">
                        “{testimonial.quote}”
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover mb-6 border-2 border-[#d4af37]/30" 
                        />
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-xs text-[#d4af37] tracking-widest mt-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevTestimonial} 
              className="w-12 h-12 flex items-center justify-center border border-white/30 hover:border-[#d4af37] transition-all rounded-full"
            >
              ←
            </button>
            <button 
              onClick={nextTestimonial} 
              className="w-12 h-12 flex items-center justify-center border border-white/30 hover:border-[#d4af37] transition-all rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-4">
                <div className="text-[#d4af37]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.21 0 4 1.791 4 4 0 2.21-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <div className="text-4xl font-medium">THE ROYAL EVENT</div>
                  <div className="text-xs text-white/50">INSTAGRAM • @the_royal_event_official</div>
                </div>
              </div>
            </div>
            
            <a href="https://www.instagram.com/the_royal_event_official/" target="_blank" className="flex items-center gap-3 text-sm text-[#d4af37] hover:underline">
              FOLLOW ON INSTAGRAM <span className="text-lg">↗</span>
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {portfolioItems.slice(0, 6).map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="min-w-[300px] md:min-w-[380px] aspect-square rounded-3xl overflow-hidden border border-white/10 snap-start cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-28 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[#d4af37] text-xs tracking-[4px] mb-4">NEXT CHAPTER</div>
          
          <h2 className="heading text-7xl leading-none mb-8">Begin Your Royal Story</h2>
          
          <p className="max-w-xs mx-auto text-lg text-white/70 mb-16">
            Let us craft a wedding that will be remembered for generations.
          </p>
          
          <div className="flex justify-center">
            <motion.a 
              href="https://wa.me/919876543210" 
              target="_blank"
              className="inline-flex h-16 items-center justify-center px-16 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-medium text-lg tracking-[1.5px]"
              whileHover={{ scale: 1.015 }}
            >
              WHATSAPP US
            </motion.a>
          </div>
          
          <div className="mt-20 text-xs text-white/40">
            MUMBAI • NEW DELHI • BANGALORE • DUBAI • LONDON
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-y-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <Crown className="w-9 h-9 text-[#d4af37]" />
              <div className="heading text-4xl tracking-wider">THE ROYAL EVENT</div>
            </div>
            
            <div className="max-w-xs text-white/60 leading-relaxed">
              Crafting unforgettable moments with royal elegance since 2012.
            </div>
            
            <div className="mt-16 flex gap-8 text-xs">
              <a href="#" className="hover:text-[#d4af37]">PRIVACY</a>
              <a href="#" className="hover:text-[#d4af37]">TERMS</a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="uppercase tracking-[2px] text-xs mb-8 text-white/60">QUICK LINKS</div>
            <div className="space-y-4 text-sm">
              {['Home', 'Services', 'Portfolio', 'Our Process', 'Contact'].map((link, i) => (
                <div key={i} className="cursor-pointer hover:text-[#d4af37]" onClick={() => {
                  if (link === 'Home') window.scrollTo({top: 0, behavior: 'smooth'});
                  else scrollToSection(link.toLowerCase().replace(/\s+/g, ''));
                }}>
                  {link}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-4">
            <div className="uppercase tracking-[2px] text-xs mb-8 text-white/60">CONNECT WITH US</div>
            
            <div className="flex flex-col gap-6 text-xl">
              <a href="https://www.instagram.com/the_royal_event_official/" target="_blank" className="hover:text-[#d4af37] flex items-center gap-3">INSTAGRAM</a>
              <a href="#" className="hover:text-[#d4af37] flex items-center gap-3">FACEBOOK</a>
              <a href="https://wa.me/919876543210" target="_blank" className="hover:text-[#d4af37] flex items-center gap-3">WHATSAPP</a>
            </div>
            
            <div className="mt-12 text-xs text-white/50">
              © THE ROYAL EVENT 2025 — ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="modal relative max-w-[95%] max-h-[92vh] overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[92vh] w-auto rounded-xl" 
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white text-4xl leading-none hover:text-[#d4af37] transition-colors"
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

