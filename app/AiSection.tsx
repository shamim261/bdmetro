"use client";
import AnimatedResponse from "@/components/AnimatedResponse";
import { AIInputWithLoading } from "@/components/ui/ai-input-with-loading";
import { useRequest } from "@/hooks/useRequest";

const AiSection = () => {
  const { data, error, loading, request } = useRequest<string>("/api/request");

  return (
    <div className="space-y-8 min-w-[350px] my-8">
      <div className="space-y-4">
        <AnimatedResponse message={data || ""} />
        <AIInputWithLoading
          onSubmit={(e) => request(e)}
          placeholder="Ask to the AI"
        />
      </div>
    </div>
  );
};

export default AiSection;
