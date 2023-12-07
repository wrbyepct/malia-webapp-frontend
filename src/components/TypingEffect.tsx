// TypingEffect.tsx
import React, { useState, useEffect} from "react";

type Props = {
  message: string;
  typingSpeed?: number;
  isChatStart: boolean;
};

const TypingEffect: React.FC<Props> = ({
  message,
  isChatStart,
  typingSpeed = 50
}) => {

  const [displayedMessage, setDisplayedMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (isChatStart) {
      // Only when the user sends the message the loading starts
      // and we display the typing effec
      if (currentIndex < message.length) {
        setTimeout(
          () => {
            setCurrentIndex(prevIndex => prevIndex + 1);
            setDisplayedMessage(message.slice(0, currentIndex));
          }, typingSpeed)
      }
    } else {
          setDisplayedMessage(message);
        }
    
  }, [message, isChatStart, currentIndex])
  
    
  return <p>{displayedMessage}</p>;
};

export default TypingEffect;
