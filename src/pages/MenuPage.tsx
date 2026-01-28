import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const dishes = [
  {
    name: "열무김치",
    nameEn: "Young Radish Kimchi",
    description: "청정 지역에서 재배한 열무, 전통 발효 방식, 시원하고 아삭한 식감",
    descriptionEn: "Fresh young radish from pristine regions, traditional fermentation, crisp and refreshing",
    image: dish1,
  },
  {
    name: "한우 등심",
    nameEn: "Korean Hanwoo Beef",
    description: "최상급 한우, 숯불 그릴, 제철 나물과 장류 소스",
    descriptionEn: "Premium Hanwoo, charcoal grilled, seasonal greens with fermented sauce",
    image: dish2,
  },
  {
    name: "전통 약과",
    nameEn: "Traditional Yakgwa",
    description: "꿀과 참기름, 전통 방식으로 만든 한과, 오미자 시럽",
    descriptionEn: "Honey and sesame oil, traditional Korean confection, omija syrup",
    image: dish3,
  },
];

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="min-h-screen pt-32 pb-24 px-8 md:px-16">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl text-navy uppercase tracking-wide mb-4">
              Menu
            </h1>
            <p className="text-foreground/60 max-w-lg text-[15px]">
              한국의 사계절과 전통을 담은 요리들.<br />
              Seasonal compositions rooted in Korean tradition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden mb-6">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl text-navy mb-1">
                  {dish.name}
                </h3>
                <p className="text-foreground/50 text-sm mb-3">
                  {dish.nameEn}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed mb-1">
                  {dish.description}
                </p>
                <p className="text-foreground/40 text-xs leading-relaxed italic">
                  {dish.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MenuPage;
