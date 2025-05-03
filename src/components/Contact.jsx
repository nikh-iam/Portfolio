import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Clear success message after 3 seconds
      setTimeout(() => setSubmitMessage(""), 3000);
    }, 1500);
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="item contact1" variants={itemVariants}>
        <a
          href="mailto:mathewnikhil432@gmail.com"
          className="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          mathewnikhil432@gmail.com
        </a>
      </motion.div>

      <motion.div className="item contact2" variants={itemVariants}>
        <a
          href="https://linkedin.com"
          className="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <h2>LinkedIn</h2>
          <p>Connect with me</p>
        </a>
      </motion.div>

      <motion.div className="item contact3" variants={itemVariants}>
        <a
          href="https://github.com/nikh-iam"
          className="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          <h2>Github</h2>
          <p>Look at my projects</p>
        </a>
      </motion.div>

      <motion.div className="contact-form" variants={itemVariants}>
        <h1>Contact with me</h1>
        <p>You can also get in touch with me through the form below.</p>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email id"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Message"
            className="input-field"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="input-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </>
            )}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </motion.div>
    </motion.div>
  );
}
