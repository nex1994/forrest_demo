"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    video.play().catch(() => {});
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onVolumeChange = () => {
      if (video.muted) setMuted(true);
    };
    video.addEventListener("volumechange", onVolumeChange);
    return () => video.removeEventListener("volumechange", onVolumeChange);
  }, []);

  return (
    <section className="hero">
      <h1>Forrest — Przedszkole Metody Krakowskiej w Piasecznie i Woli Gołkowskiej</h1>
      <video
        ref={videoRef}
        className="hero__video"
        src="/videos/hero.mp4"
        poster="/images/forrest/gotowe/droga-las.jpg"
        autoPlay
        muted={muted}
        loop
        playsInline
        controls={!muted}
      />
      {muted && (
        <button
          type="button"
          className="hero__unmute"
          aria-label="Włącz dźwięk"
          onClick={() => setMuted(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M14 5L9.8 8.5H6C5.44772 8.5 5 8.94772 5 9.5V14.5C5 15.0523 5.44772 15.5 6 15.5H9.8L14 19V5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M19 9L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 9L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </section>
  );
}
