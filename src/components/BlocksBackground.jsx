import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function BlocksBackground({ theme }) {
  const [blocks, setBlocks] = useState([]);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [blockConfig, setBlockConfig] = useState({
    blockSize: 50,
    numCols: 0,
    numRows: 0,
  });

  // Calculate block configuration
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const blockSize = 50;
    const numCols = Math.ceil(dimensions.width / blockSize);
    const numRows = Math.ceil(dimensions.height / blockSize);

    setBlockConfig({
      blockSize,
      numCols,
      numRows,
    });

    setBlocks(
      Array(numCols * numRows)
        .fill()
        .map((_, i) => ({
          id: i,
          highlighted: false,
        }))
    );
  }, [dimensions]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Shuffle array function
  const shuffleArray = useCallback((array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  // Highlight block and its random neighbors
  const highlightRandomNeighbors = useCallback(
    (index) => {
      const { numCols, numRows } = blockConfig;
      const numBlocks = numCols * numRows;

      // Calculate valid neighbors
      const neighbors = [
        index - 1,
        index + 1,
        index - numCols,
        index + numCols,
        index - numCols - 1,
        index - numCols + 1,
        index + numCols - 1,
        index + numCols + 1,
      ].filter(
        (i) =>
          i >= 0 &&
          i < numBlocks &&
          Math.abs((i % numCols) - (index % numCols)) <= 1
      );

      // Highlight the current block
      setBlocks((prev) =>
        prev.map((block) =>
          block.id === index ? { ...block, highlighted: true } : block
        )
      );

      // Remove highlight after delay
      setTimeout(() => {
        setBlocks((prev) =>
          prev.map((block) =>
            block.id === index ? { ...block, highlighted: false } : block
          )
        );
      }, 500);

      // Highlight random neighbors
      const randomNeighbors = shuffleArray(neighbors).slice(0, 1);

      randomNeighbors.forEach((nIndex) => {
        setBlocks((prev) =>
          prev.map((block) =>
            block.id === nIndex ? { ...block, highlighted: true } : block
          )
        );

        setTimeout(() => {
          setBlocks((prev) =>
            prev.map((block) =>
              block.id === nIndex ? { ...block, highlighted: false } : block
            )
          );
        }, 500);
      });
    },
    [blockConfig, shuffleArray]
  );

  return (
    <div className="blocks-container">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className={`block ${block.highlighted ? "highlight" : ""}`}
          onMouseEnter={() => highlightRandomNeighbors(block.id)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}
