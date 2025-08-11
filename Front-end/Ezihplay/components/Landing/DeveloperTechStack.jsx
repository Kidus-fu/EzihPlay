import { motion } from "framer-motion";

const TechStack = () => {
  const techItems = [
    { number: 1, title: "Frontend Development", desc: "Utilizing React and Tailwind CSS for a fast, appealing user experience." },
    { number: 2, title: "Backend Framework", desc: "Built with Django REST Framework for efficient data handling." },
    { number: 3, title: "Database Solution", desc: "Employing PostgreSQL for reliability and scalability." },
    { number: 4, title: "User Authentication", desc: "JWT is used for secure, stateless user sessions." },
    { number: 5, title: "Deployment Platform", desc: "Currently live on Render for seamless integration." },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true,amount:0.2 }}
      className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-black via-gray-900 backdrop-blur-2xl to-black text-white"
    >
      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-200 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500 opacity-20 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto pt-10 text-center relative z-10">
        <h2 className="text-orange-800 text-3xl font-bold mb-4">Tech Stack Overview</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Our application leverages a modern technology stack to ensure a robust, secure, and user-friendly experience.
          Below is a detailed breakdown of the technologies used in our project.
        </p>

        {/* Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="relative flex justify-center items-center"
        >
          <div className="w-72 h-72 border-4 border-pink-800 rounded-full relative shadow-xl shadow-pink-500/30">
            {techItems.map((item, index) => {
              const angle = (index / techItems.length) * 2 * Math.PI;
              const radius = 140;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md shadow-pink-500/40"
                  style={{
                    top: `calc(50% + ${y}px - 20px)`,
                    left: `calc(50% + ${x}px - 20px)`,
                  }}
                >
                  {item.number}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tech Text */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left cursor-pointer ">
          {techItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="hover:translate-y-1 transition p-2"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
