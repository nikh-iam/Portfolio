import { bouncy } from "ldrs";
bouncy.register();

const Preloader = ({ theme }) => {
  return (
    <motion.div 
    className="loading-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <l-bouncy
      size="45"
      speed="1.75" 
      color={theme === 'dark' ? 'white' : 'black'}
    />
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="loading-text"
    >
      Loading portfolio...
    </motion.p>
  </motion.div>
  );
};

export default Preloader;
