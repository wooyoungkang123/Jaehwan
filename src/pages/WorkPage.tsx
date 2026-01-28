import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workHistory = [
  {
    period: "2023 — Present",
    role: "Executive Chef",
    place: "United Nations",
    location: "New York",
  },
  {
    period: "2020 — 2023",
    role: "Sous Chef",
    place: "Mosu Seoul ★★",
    location: "Seoul, Korea",
  },
  {
    period: "2018 — 2020",
    role: "Chef de Partie",
    place: "Mosu Seoul",
    location: "Seoul, Korea",
  },
  {
    period: "2016 — 2018",
    role: "Line Cook",
    place: "Jungsik Seoul",
    location: "Seoul, Korea",
  },
  {
    period: "2014 — 2016",
    role: "Culinary Training",
    place: "Various Restaurants",
    location: "Seoul, Korea",
  },
];

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="min-h-screen pt-32 pb-24 px-8 md:px-16">
        <div className="container-narrow max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl text-navy uppercase tracking-wide mb-12">
              Work
            </h1>

            <div className="space-y-10">
              {workHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l border-border pl-8 py-2"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {item.period}
                  </p>
                  <p className="text-foreground font-medium text-lg">{item.role}</p>
                  <p className="text-foreground/70">{item.place}</p>
                  <p className="text-foreground/50 text-sm">{item.location}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-10 border-t border-border"
            >
              <h2 className="font-display text-2xl text-navy uppercase tracking-wide mb-6">
                Recognition
              </h2>
              <ul className="space-y-3 text-foreground/70 text-[15px]">
                <li>• Mosu Seoul — 2 Michelin Stars (2021, 2022, 2023)</li>
                <li>• Asia's 50 Best Restaurants — #28 (2022)</li>
                <li>• Korean Cuisine Excellence Award (2021)</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WorkPage;
