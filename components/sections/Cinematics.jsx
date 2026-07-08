"use client";

import VideoSection from "./VideoSection";
import cinematics from "@/data/cinematics";

export default function Cinematics(){
  return <VideoSection id="cinematics" title="CINEMATICS" categories={cinematics} />;
}