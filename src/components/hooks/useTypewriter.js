import { useState, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

const useTypewriter = (words, typeSpeed = 30, deleteSpeed = 20, delay = 500) => {
  const { colorMode } = useColorMode(); // Get current color mode (light or dark)
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [color, setColor] = useState('#FFD700'); // Initial color (Bright Yellow)

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loop % words.length;
      const fullText = words[currentIndex];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      // Update color based on the current color mode and word index
      const lightModeColors = ['#FBEAEB', '#F9E795']; // Colors for light mode: Coral Red, Pale Yellow
      const darkModeColors = ['#8AAAE5', '#FFFFFF']; // Colors for dark mode: Light Blue, White

      const vibrantColors = colorMode === 'light' ? lightModeColors : darkModeColors;
      setColor(vibrantColors[currentIndex % vibrantColors.length]);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, words, typeSpeed, deleteSpeed, delay, colorMode]); // Add colorMode to dependencies

  return { text, color };
};

export default useTypewriter;
