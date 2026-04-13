import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "I build high-performance products powered by modern web engineering and practical GenAI systems. From idea to launch, I focus on impact, speed, and quality.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div id="about" ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>I am Zaid Rakhange, GenAI Engineer and founder of The Impic Labs, helping teams ship better products with TypeScript, React, Next.js, Node.js, and AI automation.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>My Story</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
