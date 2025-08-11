import {  GithubFilled, LinkedinFilled, SendOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const DeveloperTeam = () => {
  const team = [
    {
      name: "Kidus Surafel",
      bio: "Full Stack Developer specializing in React and Django.",
      github: "https://github.com/Kidus-fu/",
      email: "kidussurafel@gmail.com",
      linkedin: "https://www.linkedin.com/in/kidus-surafel/",
    },
    {
      name: "Bereket Alemayehu",
      bio: "Project Presenter",
      github: "",
      email: "bekialemayehu36@gmail.com",
      linkedin: "",
    },
    {
      name: "Rediet",
      bio: "Frontend developer",
      github: "https://github.com/redietlunal/",
      email: "redietteresa3@gmail.com",
      linkedin: "https://linkedin.com/in/redietlunal/",
    },
    {
      name: "Nathan Moges",
      bio: "Project Idea creator and Front end developer",
      github: "https://github.com/Nattesseract/",
      email: "natnat56780@gmail.com",
      linkedin: "https://linkedin.com/in/Nattesseract/",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white z-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-orange-500 text-3xl font-bold">Meet Our Team</h2>
        <p className="text-gray-400 mt-2">The minds behind our amazing platform</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount:0.2 }}
            transition={{ duration: 0.2, delay:  0.2 }}
            className="bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-xl shadow-gray-700 border border-gray-700 cursor-pointer"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
              {member.name.charAt(0)}
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400 mt-2">{member.bio}</p>
            <div className="flex justify-center gap-4 mt-4 text-xl">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                <GithubFilled />
              </a>
              <a href={`mailto:${member.email}`} className="hover:text-orange-500">
                <SendOutlined />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                <LinkedinFilled />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperTeam;
