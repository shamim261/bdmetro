import AnimatedResponse from "@/components/AnimatedResponse";
import { AIInputWithLoading } from "@/components/ui/ai-input-with-loading";
import { useState } from "react";

const AiSection = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const DEMO_TEXT =
    "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.\n\n" +
    '"Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven\'t had the advantages that you\'ve had."\n\n' +
    "He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgements, a habit that has opened up many curious natures to me.";
  const simulateResponse = async (message: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setMessages((prev) => [...prev, message]);
  };
  const text =
    "জুলাই-আগস্টে সংঘটিত গণহত্যা ও মানবতাবিরোধী অপরাধের বিচারের জন্য পুনর্গঠিত আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের বিচারের এখতিয়ার চ্যালেঞ্জ করে করা আবেদন খারিজ করে দিয়েছে ট্রাইব্যুনাল এর ফলে আন্তর্জাতিক অপরাধ ট্রাইব্যুনালে বিচারে কোনও বাধা নেই বলে জানিয়েছেন চিফ প্রসিকিউটর তাজুল ইসলাম। আবেদনের শুনানি শেষে আজ বুধবার চেয়ারম্যান বিচারপতি মো. গোলাম মর্তুজা মজুমদারের নেতৃত্বাধীন তিন সদস্যের আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল এ আদেশ দেন।";
  return (
    <div className="space-y-8 min-w-[350px] my-8">
      <div className="space-y-4">
        <AnimatedResponse message={DEMO_TEXT} />
        <AIInputWithLoading
          onSubmit={simulateResponse}
          loadingDuration={3000}
          placeholder="Ask to the AI"
        />
      </div>
    </div>
  );
};

export default AiSection;
