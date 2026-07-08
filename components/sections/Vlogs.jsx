"use client";

import VideoSection from "./VideoSection";
import vlogs from "@/data/vlogs";

export default function Vlogs(){
  return <VideoSection id="vlogs" title="VLOGS" categories={vlogs} />;
}