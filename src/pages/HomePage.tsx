import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dish.jpg";

const HomePage = () => {
  return (
    <section className="min-h-screen pt-24 flex items-center">
      <div className="container-narrow w-full px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy uppercase tracking-wide mb-8">
              About
            </h1>
            
            <p className="text-lg md:text-xl text-navy font-display mb-6">
              Jaehwan Kim
            </p>
            
            <div className="space-y-5 text-foreground/70 leading-relaxed text-[15px]">
              <p>
                is a Korea-based chef who specializes in modern Korean cuisine 
                with a focus on seasonality, fermentation techniques, and innovative 
                presentations rooted in traditional Korean culinary heritage.
              </p>
              
              <p>
                He is currently working at the United Nations, bringing Korean 
                gastronomy to the international diplomatic community.
              </p>
              
              <p>
                Prior to UN, he was at Mosu Seoul, the acclaimed two Michelin-starred 
                restaurant known for its refined interpretation of Korean ingredients 
                through a contemporary lens.
              </p>
              
              <p>
                His cuisine reflects a deep respect for Korean traditions while 
                embracing modern techniques and global influences.
              </p>
            </div>

            <div className="mt-10">
              <Link
                to="/about"
                className="text-xs uppercase tracking-[0.2em] text-navy border-b border-navy pb-1 hover:text-navy-light hover:border-navy-light transition-colors"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroImage}
                alt="Signature dish by Chef Jaehwan Kim"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
