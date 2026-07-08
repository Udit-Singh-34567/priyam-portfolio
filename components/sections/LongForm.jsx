"use client";

import VideoSection from "./VideoSection";
import longform from "@/data/longform";

export default function LongForm(){
  return <VideoSection id="long-form" title="LONG FORM" categories={longform} />;
}