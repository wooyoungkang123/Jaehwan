import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="min-h-screen pt-32 pb-24 px-8 md:px-16">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl text-navy uppercase tracking-wide mb-12">
                Contact
              </h1>
              
              <div className="space-y-8 text-[15px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Location
                  </p>
                  <p className="text-foreground">United Nations Headquarters</p>
                  <p className="text-foreground">New York, NY 10017</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    이메일 / Email
                  </p>
                  <a href="mailto:jaehwan@example.com" className="text-foreground hover:text-navy transition-colors">
                    jaehwan@example.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    소셜 미디어 / Social
                  </p>
                  <div className="space-y-1">
                    <a href="#" className="block text-foreground hover:text-navy transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="block text-foreground hover:text-navy transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    문의 / Inquiries
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    For private events, collaborations, or other inquiries, 
                    please use the contact form.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Name / 이름
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-navy transition-colors text-[15px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Email / 이메일
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-navy transition-colors text-[15px]"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Subject / 제목
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-navy transition-colors text-[15px]"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Message / 메시지
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-navy transition-colors resize-none text-[15px]"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-navy border-b border-navy pb-1 hover:text-navy-light hover:border-navy-light transition-colors"
                >
                  Send Message / 보내기
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
