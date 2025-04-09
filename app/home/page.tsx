"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fares, stations } from "@/utils/data";
import { Train } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AiSection from "./AiSection";

export default function MetroFareTracker() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [fare, setFare] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { type: "user" | "ai"; content: string }[]
  >([
    {
      type: "ai",
      content:
        "Hello! I can help you with information about BD Metro routes, fares, and schedules. What would you like to know?",
    },
  ]);

  // Sample stations - replace with actual stations
  // const stations = [
  //   "Uttara North",
  //   "Uttara Center",
  //   "Uttara South",
  //   "Pallabi",
  //   "Mirpur 11",
  //   "Mirpur 10",
  //   "Kazipara",
  //   "Shewrapara",
  //   "Agargaon",
  //   "Bijoy Sarani",
  //   "Farmgate",
  //   "Karwan Bazar",
  //   "Shahbag",
  //   "Dhaka University",
  //   "Bangladesh Secretariat",
  //   "Motijheel",
  // ];

  // Simple fare calculation logic (replace with actual logic)
  // const calculateFare = () => {
  //   if (origin && destination && origin !== destination) {
  //     const originIndex = stations.indexOf(origin);
  //     const destinationIndex = stations.indexOf(destination);
  //     const stationDifference = Math.abs(originIndex - destinationIndex);

  //     // Base fare 20 Taka + 5 Taka per station
  //     const calculatedFare = 20 + stationDifference * 5;
  //     setFare(calculatedFare);
  //   } else {
  //     setFare(null);
  //   }
  // };
  const getFare = () => {
    if (origin && destination && origin !== destination) {
      return fares[origin][destination].toFixed(2);
    }
    return "--";
  };
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message to chat
      setChatMessages([...chatMessages, { type: "user", content: message }]);

      // Simulate AI response
      setTimeout(() => {
        let response =
          "I'm sorry, I don't have information about that specific query. Can I help you with something else related to BD Metro?";

        // Simple keyword matching for demo purposes
        if (
          message.toLowerCase().includes("schedule") ||
          message.toLowerCase().includes("time")
        ) {
          response =
            "BD Metro operates from 7:00 AM to 11:00 PM on weekdays, and 8:00 AM to 10:00 PM on weekends. On Fridays, service starts at 1:00 PM.";
        } else if (
          message.toLowerCase().includes("fare") ||
          message.toLowerCase().includes("cost") ||
          message.toLowerCase().includes("price")
        ) {
          response =
            "Fares range from 20 Taka to 100 Taka depending on the distance. You can use the fare calculator to get the exact fare for your journey.";
        } else if (
          message.toLowerCase().includes("route") ||
          message.toLowerCase().includes("line")
        ) {
          response =
            "Currently, MRT Line-6 is operational from Uttara North to Motijheel. It has 16 stations along the route.";
        }

        setChatMessages((prev) => [...prev, { type: "ai", content: response }]);
      }, 1000);

      // Clear input
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Train className="h-6 w-6 text-emerald-600" />
          <h1 className="text-xl font-bold text-gray-800 ml-2">BD Metro</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Fare Calculator */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm uppercase text-gray-500 font-medium mb-2">
              FARE CALCULATOR
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Your Best Fare
            </h3>

            <Card className="shadow-md border border-gray-200">
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Origin
                    </label>
                    <Select value={origin} onValueChange={setOrigin}>
                      <SelectTrigger className="w-full border-gray-300 bg-white">
                        <SelectValue placeholder="Select origin" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.map((station) => (
                          <SelectItem key={station} value={station}>
                            {station}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Destination
                    </label>
                    <Select value={destination} onValueChange={setDestination}>
                      <SelectTrigger className="w-full border-gray-300 bg-white">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.map((station) => (
                          <SelectItem
                            disabled={origin === station}
                            key={station}
                            value={station}
                          >
                            {station}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="text-lg font-semibold text-center">
                  <div className="flex justify-center items-center">
                    Fare:{" "}
                    <Image src="/taka.png" width={30} height={30} alt="taka" />
                    {getFare()} Taka
                  </div>
                  {origin && destination && (
                    <div className="bg-green-200/40 my-4 rounded-md py-3">
                      <h3 className="font-bold text-xl text-textColorPrimary">
                        If you have MRT/Rapid Pass:
                      </h3>
                      <div className="flex justify-center items-center font-bold">
                        Fare:{" "}
                        <Image
                          src="/taka.png"
                          width={30}
                          height={30}
                          alt="taka"
                        />
                        {Number(getFare()) - (Number(getFare()) * 10) / 100}{" "}
                        Taka
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={getFare}
                  disabled={!origin || !destination || origin === destination}
                >
                  Calculate Fare
                </Button>

                {fare !== null && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Fare:</span>
                      <span className="text-xl font-bold text-emerald-600">
                        {fare} Taka
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right side - AI Assistant */}
          {/* <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-5 w-5 text-emerald-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">
                Metro Assistant
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 flex-1 flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto max-h-[400px] space-y-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.type === "user"
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {msg.type === "ai" ? (
                        <AnimatedResponse message={msg.content} />
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-4 flex gap-2">
                <Input
                  placeholder="Ask about routes, fares, or schedules..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div> */}
          <AiSection />
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
            Services we Provide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Route Planning</h4>
                <p className="text-gray-600">
                  Find the most efficient route between any two stations on the
                  metro network.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Fare Calculation</h4>
                <p className="text-gray-600">
                  Get accurate fare information for your journey before you
                  travel.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Schedule Information</h4>
                <p className="text-gray-600">
                  Access up-to-date train schedules and service information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 BD Metro. All rights reserved.</p>
          <p className="mt-2">
            হ্যালো! বাংলাদেশ মেট্রোরেল (এমআরটি লাইন-৬) বর্তমানে উত্তরা উত্তর
            থেকে মতিঝিল পর্যন্ত চালু আছে।
          </p>
        </div>
      </footer>
    </div>
  );
}
