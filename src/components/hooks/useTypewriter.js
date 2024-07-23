import { useState, useEffect } from 'react';

const useTypewriter = (words, typeSpeed = 70, deleteSpeed = 50, delay = 800) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [color, setColor] = useState('#f39c12');

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loop % words.length;
      const fullText = words[currentIndex];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setColor(isDeleting ? '#f39c12' : '#1e90ff'); // Change color based on deleting state

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
