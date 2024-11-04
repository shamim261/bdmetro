"use client";
import taka from "@/assets/img/taka.png";
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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
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
                <SelectItem key={station} value={station}>
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
              Fare: <Image src={taka} width={30} height={30} alt="taka" />
              {getFare()} Taka
            </div>
          </div>
        </div>
        {/* <div className="pt-4">
          <svg viewBox="0 0 200 100" className="w-full h-auto">
            <line
              x1="10"
              y1="50"
              x2="190"
              y2="50"
              stroke="currentColor"
              strokeWidth="1"
            />
            {stations.map((station, index) => {
              const x = 10 + (index * 180) / (stations.length - 1);
              return (
                <g key={station}>
                  <circle
                    cx={x}
                    cy="50"
                    r="2"
                    fill={
                      station === origin || station === destination
                        ? "currentColor"
                        : "none"
                    }
                    stroke="currentColor"
                  />

                  <text
                    x={x}
                    y="70"
                    textAnchor="middle"
                    fontSize="5"
                    fill="currentColor"
                    className=""
                  >
                    {station}
                  </text>
                </g>
              );
            })}
          </svg>
        </div> */}
      </CardContent>
    </Card>
  );
}
