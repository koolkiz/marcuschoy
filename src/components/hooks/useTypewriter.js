import { useState, useEffect } from 'react';

const useTypewriter = (words, typeSpeed = 30, deleteSpeed = 20, delay = 500) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [color, setColor] = useState('#FFD700'); // Initial color (Bright Yellow)

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loop % words.length;
      const fullText = words[currentIndex];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      // Update color based on typing/deleting state and index
      const vibrantColors = ['#FFD700', '#FFA500', '#4eea0a']; // Bright Yellow, Bright Orange, Bright Green
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
  }, [text, isDeleting, loop, words, typeSpeed, deleteSpeed, delay]);

  return { text, color };
};

export default useTypewriter;
