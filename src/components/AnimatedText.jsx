import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
    const words = text.split(" ");

    const container = {

        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.18, delayChildren: 0.08 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div

            style={{ overflow: "hidden", }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    className="max-w-xl"
                    style={{ marginRight: "5px" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;