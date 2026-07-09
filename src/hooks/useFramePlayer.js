import { useEffect, useRef, useState } from "react";

const MIN_FPS = 1;
const MAX_FPS = 60;
const ACCEPTED_EXTENSIONS = new Set(["png", "svg", "webp", "jpg", "jpeg"]);

function getFileExtension(fileName) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function hasNumericName(fileName) {
  return /\d+/.test(fileName.replace(/\.[^.]+$/, ""));
}

export function useFramePlayer(defaultFrames) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [fps, setFps] = useState(12);
  const [frameIndex, setFrameIndex] = useState(0);
  const [customFrames, setCustomFrames] = useState([]);
  const [uploadStatus, setUploadStatus] = useState({
    message: "Carga varios frames numerados para revisar tu secuencia.",
    tone: "neutral"
  });
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

  function handleFrameUpload(eventOrFiles) {
    const inputTarget = eventOrFiles?.target;
    const fileSource = inputTarget?.files ?? eventOrFiles;
    const files = Array.from(fileSource ?? []);

    if (files.length === 0) {
      setUploadStatus({
        message: "No se ha seleccionado ningun archivo.",
        tone: "warning"
      });
      return;
    }

    const invalidFiles = files.filter((file) => !ACCEPTED_EXTENSIONS.has(getFileExtension(file.name)));

    if (invalidFiles.length > 0) {
      setUploadStatus({
        message: "Solo se admiten archivos PNG, SVG, WEBP, JPG y JPEG.",
        tone: "error"
      });
      if (inputTarget) {
        inputTarget.value = "";
      }
      return;
    }

    frameUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));

    const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    const nextFrames = sortedFiles
      .map((file) => URL.createObjectURL(file));

    frameUrlsRef.current = nextFrames;
    setCustomFrames(nextFrames);
    setFrameIndex(0);
    setIsPlaying(true);
    if (inputTarget) {
      inputTarget.value = "";
    }

    if (files.length === 1) {
      setUploadStatus({
        message: "Has cargado 1 frame. Para revisar una animacion, sube al menos 2 frames.",
        tone: "warning"
      });
      return;
    }

    if (!sortedFiles.every((file) => hasNumericName(file.name))) {
      setUploadStatus({
        message: "Secuencia cargada. Para un orden mas fiable, usa nombres numericos como frame_01, frame_02, frame_03.",
        tone: "warning"
      });
      return;
    }

    setUploadStatus({
      message: `${files.length} frames cargados y ordenados por nombre numerico.`,
      tone: "success"
    });
  }

  function resetFrames() {
    frameUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    frameUrlsRef.current = [];
    setCustomFrames([]);
    setFrameIndex(0);
    setUploadStatus({
      message: "Secuencia base restaurada.",
      tone: "neutral"
    });
  }

  function updateFrameIndex(nextValue) {
    const value = Number(nextValue);

    if (Number.isNaN(value)) {
      return;
    }

    setFrameIndex(Math.min(frames.length - 1, Math.max(0, value)));
  }

  function goToPreviousFrame() {
    setFrameIndex((current) => (current === 0 ? frames.length - 1 : current - 1));
  }

  function goToNextFrame() {
    setFrameIndex((current) => (current + 1) % frames.length);
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
    uploadStatus,
    handleFrameUpload,
    goToNextFrame,
    goToPreviousFrame,
    resetFrames,
    setIsPlaying,
    updateFrameIndex,
    updateFps
  };
}
