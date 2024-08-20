import { useState, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';

const useTypewriter = (words, typeSpeed = 30, deleteSpeed = 20, delay = 500) => {
  const { colorMode } = useColorMode();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [color, setColor] = useState('#FFD700');
  const animationControls = useAnimation();

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loop % words.length;
      const fullText = words[currentIndex];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      const lightModeColors = ['#FBEAEB', '#F9E795'];
      const darkModeColors = ['#8AAAE5', '#FFFFFF'];

      const vibrantColors = colorMode === 'light' ? lightModeColors : darkModeColors;
      setColor(vibrantColors[currentIndex % vibrantColors.length]);

      // Start the animation for the text whenever it updates
      animationControls.start({
        opacity: [0, 1],
        scale: [1, 1.05, 1],
        transition: { duration: 0.5, ease: 'easeInOut' },
      });

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, words, typeSpeed, deleteSpeed, delay, colorMode, animationControls]);

  return { text, color, animationControls };
};

export default useTypewriter;
