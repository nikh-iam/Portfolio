import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const works = [
  {
    id: 1,
    title: "FindPhish: Phishing Detection System",
    description:
      "An open source phishing detection extension along with web app.",
    link: "https://github.com/NikhilAMathew/Phishing",
    alignment: "left",
    image: "assets/bg2.jpg",
  },
  {
    id: 2,
    title: "Pest Identification & Detection System",
    description: "An automated pest identification system.",
    link: "https://github.com/NikhilAMathew/Pest-Classification-and-Detection-System-using-Deep-Learning",
    alignment: "right",
    image: "assets/bg2.jpg",
  },
  {
    id: 3,
    title: "Agro Culture",
    description: "Agricultural management system",
    link: "https://github.com/NikhilAMathew/Agro-Culture",
    alignment: "left",
    image: "assets/bg2.jpg",
  },
  {
    id: 4,
    title: "Health Office Management System",
    description: "System for managing health office operations",
    link: "https://github.com/NikhilAMathew/Health-Office_Management_System",
    alignment: "right",
    image: "assets/bg2.jpg",
  },
];

export default function WorksSection() {
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {works.map((work, index) => (
        <>
          <motion.div
            key={`img-${work.id}`}
            className={`img${work.id}`}
            variants={itemVariants}
            style={{
              backgroundImage: `url(${work.image})`,
              gridColumn:
                work.alignment === "left" ? "1 / span 1" : "4 / span 1",
              gridRow: `${index * 2 + 1} / span 1`,
            }}
          />

          <motion.div
            key={`work-${work.id}`}
            className={`item work${work.id}`}
            variants={itemVariants}
            style={{
              textAlign: work.alignment,
              gridColumn:
                work.alignment === "left" ? "2 / span 3" : "1 / span 3",
              gridRow: `${index * 2 + 1} / span 1`,
            }}
          >
            <div className="desc">
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </div>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </motion.div>
        </>
      ))}
    </motion.div>
  );
}
