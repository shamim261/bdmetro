import { useState } from "react";
import { useAnimatedText } from "./ui/animated-text";

export default function AnimatedResponse({ message }: { message: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const chunkText = useAnimatedText(isPlaying ? message : "", "\n\n");
  const characterText = useAnimatedText(isPlaying ? message : "", "");

  const handleRestart = () => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 0);
  };

  return (
    <div className="space-y-6 font-hind">
      <div className="max-w-2xl text-xl">{characterText}</div>
    </div>
  );
}
