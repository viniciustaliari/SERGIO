import { useEffect, useRef, useState } from "react";

const MIN_FPS = 1;
const MAX_FPS = 60;

export function useFramePlayer(defaultFrames) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [fps, setFps] = useState(12);
  const [frameIndex, setFrameIndex] = useState(0);
  const [customFrames, setCustomFrames] = useState([]);
  const frameUrlsRef = useRef([]);

  const frames = customFrames.length > 0 ? customFrames : defaultFrames;

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % frames.length);
    }, 1000 / fps);

    return () => window.clearInterval(intervalId);
  }, [fps, frames.length, isPlaying]);

  useEffect(() => {
    setFrameIndex((current) => (current < frames.length ? current : 0));
  }, [frames.length]);

  useEffect(() => {
    return () => {
      frameUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  function handleFrameUpload(event) {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      return;
    }

    frameUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));

    const nextFrames = files
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
      .map((file) => URL.createObjectURL(file));

    frameUrlsRef.current = nextFrames;
    setCustomFrames(nextFrames);
    setFrameIndex(0);
    setIsPlaying(true);
  }

  function resetFrames() {
    frameUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    frameUrlsRef.current = [];
    setCustomFrames([]);
    setFrameIndex(0);
  }

  function updateFps(nextValue) {
    const value = Number(nextValue);

    if (Number.isNaN(value)) {
      return;
    }

    setFps(Math.min(MAX_FPS, Math.max(MIN_FPS, value)));
  }

  return {
    customFrames,
    fps,
    frameIndex,
    frames,
    isPlaying,
    maxFps: MAX_FPS,
    minFps: MIN_FPS,
    handleFrameUpload,
    resetFrames,
    setIsPlaying,
    updateFps
  };
}
