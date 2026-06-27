export function ToolPanel({
  customFrames,
  fps,
  frameIndex,
  frames,
  isPlaying,
  maxFps,
  minFps,
  onFpsChange,
  onFrameUpload,
  onResetFrames,
  onTogglePlayback
}) {
  return (
    <section className="tool-panel" data-reveal>
      <div className="tool-panel-copy">
        <p className="section-eyebrow">Cargar secuencia</p>
        <h3>Sube tus archivos y revisa la animacion en tiempo real.</h3>
        <p className="section-copy">
          Importa tus frames, define la velocidad de reproduccion y visualiza el
          resultado al instante en una sola pantalla.
        </p>
      </div>

      <div className="tool-controls">
        <label className="upload-panel" htmlFor="frame-upload">
          <span className="upload-title">Carga de frames</span>
          <span className="upload-copy">
            Formatos compatibles: PNG, SVG, WEBP, JPG y JPEG.
          </span>
          <input
            id="frame-upload"
            className="upload-input"
            type="file"
            accept=".png,.svg,.webp,.jpg,.jpeg"
            multiple
            onChange={onFrameUpload}
          />
        </label>

        <div className="control-row" aria-label="Controles de animacion">
          <button className="demo-button" type="button" onClick={onTogglePlayback}>
            {isPlaying ? "Pausar" : "Reproducir"}
          </button>

          <label className="fps-control" htmlFor="fps-input">
            <span className="fps-label">Frames por segundo</span>
            <input
              id="fps-input"
              className="fps-input"
              type="number"
              min={minFps}
              max={maxFps}
              step="1"
              value={fps}
              onChange={(event) => onFpsChange(event.target.value)}
            />
          </label>

          {customFrames.length > 0 ? (
            <button className="ghost-button" type="button" onClick={onResetFrames}>
              Restaurar secuencia base
            </button>
          ) : null}
        </div>

        <div className="status-panel">
          <span>Frame {frameIndex + 1} / {frames.length}</span>
          <span>{isPlaying ? "Animando" : "Pausado"}</span>
          <span>{customFrames.length > 0 ? "Secuencia personalizada" : "Secuencia base"}</span>
        </div>
      </div>
    </section>
  );
}
