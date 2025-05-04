import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJava,
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faFigma,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
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

export default function HomeSection() {
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="item profile" variants={itemVariants}>
        <h2>Who am I?</h2>
        <p>
          Hey! My Name is Nikhil A Mathew, I am passionate about using new
          technology that follows best practices and industry standards and I
          like designing web pages.
        </p>
      </motion.div>

      <motion.div className="item title" variants={itemVariants}>
        <h2>
          Software Engineer <br />
        </h2>
      </motion.div>

      <motion.div className="item technologies" variants={itemVariants}>
        <h2>Technologies I have worked with</h2>
        <div className="icons">
          <FontAwesomeIcon icon={faPython} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faJava} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faDatabase} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faFigma} />
        </div>
      </motion.div>

      <motion.div className="item logo" variants={itemVariants}>
      <img src="assets/logo.png" alt="logo" />

        <h2 style={{ fontSize: "28px" }}>Nikhil A Mathew</h2>
      </motion.div>

      <motion.div className="item quote" variants={itemVariants}>
        <h2>"I live in Kerala, where I design the future."</h2>
      </motion.div>

      <motion.div className="item education" variants={itemVariants}>
        <h2>Education</h2>
        <p>
          <strong>Master of Computer Applications</strong>
          <br />
          <p
            style={{
              borderLeft: "1px solid rgba(153, 213, 234, 0.2)",
              padding: "0 1em",
            }}
          >
            '24 <br />
          </p>
        </p>
        <p>
          <strong>Bachelor of Computer Applications</strong>
          <br />
          <p
            style={{
              borderLeft: "1px solid rgba(153, 213, 234, 0.2)",
              padding: "0 1em",
            }}
          >
            '22 <br />
          </p>
        </p>
      </motion.div>

      <motion.div
        className="item background-image"
        variants={itemVariants}
      ></motion.div>
    </motion.div>
  );
}
