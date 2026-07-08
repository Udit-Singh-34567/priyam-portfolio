"use client";

import VideoSection from "./VideoSection";
import talkingheads from "@/data/talkingheads";

export default function TalkingHeads() {
  return (
    <VideoSection
      id="talking-heads"
      title="TALKING HEADS"
      categories={talkingheads}
    />
  );
}