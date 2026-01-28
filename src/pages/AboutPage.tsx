import { motion } from "framer-motion";
import chefImage from "@/assets/chef-portrait.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="min-h-screen pt-32 pb-24 px-8 md:px-16">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl md:text-5xl text-navy uppercase tracking-wide mb-8">
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
                  gastronomy to the international diplomatic community. His role 
                  involves creating dishes that represent Korean culture and cuisine 
                  on the world stage.
                </p>
                
                <p>
                  Prior to UN, he was at Mosu Seoul, the acclaimed two Michelin-starred 
                  restaurant led by Chef Sung Anh. At Mosu, he developed his signature 
                  style of reinterpreting Korean ingredients through contemporary 
                  fine dining techniques while preserving their essential character.
                </p>
                
                <p>
                  His cuisine reflects a deep respect for Korean traditions—from 
                  fermentation to seasonal banchan—while embracing modern techniques 
                  and the refined aesthetics of contemporary gastronomy.
                </p>

                <p>
                  Outside the kitchen, he draws inspiration from Korean art, ceramics, 
                  traditional music, and the changing seasons of Korea, all of which 
                  find expression in his plating and flavor compositions.
                </p>
                
                <p>
                  He trained at some of Korea's finest establishments and continues 
                  to explore the depth of Korean culinary traditions.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden sticky top-32">
                <img
                  src={chefImage}
                  alt="Chef Jaehwan Kim"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
