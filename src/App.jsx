import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const defaultFrames = Array.from(
  { length: 14 },
  (_, index) => `/images/grafiti/Frame_${index + 1}.svg`
);

const MIN_FPS = 1;
const MAX_FPS = 60;

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [fps, setFps] = useState(12);
  const [frameIndex, setFrameIndex] = useState(0);
  const [customFrames, setCustomFrames] = useState([]);
  const stageRef = useRef(null);
  const characterRef = useRef(null);
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
  }, [fps, isPlaying]);

  useEffect(() => {
    setFrameIndex((current) => {
      if (current < frames.length) {
        return current;
      }

      return 0;
    });
  }, [frames.length]);

  useEffect(() => {
    if (!stageRef.current || !characterRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".scene-copy > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08
        }
      );

      gsap.fromTo(
        characterRef.current,
        { y: 16, rotate: -1.5, scale: 0.96 },
        {
          y: -10,
          rotate: 1.5,
          scale: 1,
          duration: 1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        }
      );

      gsap.fromTo(
        ".scene-glow",
        { scale: 0.92, opacity: 0.45 },
        {
          scale: 1.08,
          opacity: 0.78,
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        }
      );
    }, stageRef);

    return () => ctx.revert();
  }, []);

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

  function handleFpsChange(event) {
    const nextValue = Number(event.target.value);

    if (Number.isNaN(nextValue)) {
      return;
    }

    const boundedValue = Math.min(MAX_FPS, Math.max(MIN_FPS, nextValue));
    setFps(boundedValue);
  }

  return (
    <main className="background-app" ref={stageRef}>
      <section className="scene-layout">
        <div className="scene-copy">
          <p className="eyebrow">Prueba de Frames</p>
          <h1>Sube tus frames y prueba el personaje como secuencia PNG.</h1>
          <p className="scene-text">
            Puedes cargar varios `png`, `svg`, `webp` o `jpg` y la app los ordena por
            nombre para reproducirlos como flipbook.
          </p>

          <label className="upload-panel" htmlFor="frame-upload">
            <span className="upload-title">Cargar frames</span>
            <span className="upload-copy">
              Selecciona multiples archivos y los usaremos como nueva secuencia.
            </span>
            <input
              id="frame-upload"
              className="upload-input"
              type="file"
              accept=".png,.svg,.webp,.jpg,.jpeg"
              multiple
              onChange={handleFrameUpload}
            />
          </label>

          <div className="control-row" aria-label="Controles de animacion">
            <button
              className="demo-button"
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
            >
              {isPlaying ? "Pausar" : "Reproducir"}
            </button>

            <label className="fps-control" htmlFor="fps-input">
              <span className="fps-label">Frames por segundo</span>
              <input
                id="fps-input"
                className="fps-input"
                type="number"
                min={MIN_FPS}
                max={MAX_FPS}
                step="1"
                value={fps}
                onChange={handleFpsChange}
              />
            </label>

            {customFrames.length > 0 ? (
              <button className="ghost-button" type="button" onClick={resetFrames}>
                Usar frames demo
              </button>
            ) : null}
          </div>

          <div className="status-panel">
            <span>Frame {frameIndex + 1} / {frames.length}</span>
            <span>{isPlaying ? "Animando" : "En pausa"}</span>
            <span>{customFrames.length > 0 ? "Frames del usuario" : "Frames demo"}</span>
          </div>
        </div>

        <div className="character-stage">
          <div className="scene-glow" aria-hidden="true" />
          <div className="ground-shadow" aria-hidden="true" />
          <figure className="character-shell" ref={characterRef}>
            <img
              className="character-frame"
              src={frames[frameIndex]}
              alt="Personaje animado por secuencia de frames"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
