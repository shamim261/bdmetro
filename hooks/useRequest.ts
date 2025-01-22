import { useState } from "react";

export function useRequest<T>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const request = async (text: string) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });
      const data = await response.json();
      setData(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(new Error(e.message));
      } else {
        setError(new Error("An unknown error occurred"));
      }
    }
  };

  return { data, error, loading, request };
}
