"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fares, stations } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import AiSection from "./AiSection";

export default function Fare() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const getFare = () => {
    if (origin && destination && origin !== destination) {
      return fares[origin][destination].toFixed(2);
    }
    return "--";
  };

  return (
    <div className="flex flex-col min-h-[50vh] min-lg:h-[80vh] justify-center items-center">
      <Card className="w-full  max-w-2xl mx-auto my-5 ">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-textColorPrimary">
            Metro Fare Tracker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="origin" className="text-sm font-medium">
              Origin Station
            </label>
            <Select onValueChange={setOrigin}>
              <SelectTrigger id="origin">
                <SelectValue placeholder="Select origin" />
              </SelectTrigger>
              <SelectContent>
                {stations.map((station) => (
                  <SelectItem
                    disabled={destination === station}
                    key={station}
                    value={station}
                  >
                    {station}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="destination" className="text-sm font-medium">
              Destination Station
            </label>
            <Select onValueChange={setDestination}>
              <SelectTrigger id="destination">
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
          <div className="pt-4">
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
                    <Image src="/taka.png" width={30} height={30} alt="taka" />
                    {Number(getFare()) - (Number(getFare()) * 10) / 100} Taka
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <AiSection />
    </div>
  );
}
