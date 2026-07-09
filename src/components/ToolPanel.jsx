export function ToolPanel({
  customFrames,
  fps,
  frameIndex,
  frames,
  isPlaying,
  maxFps,
  minFps,
  uploadStatus,
  onFpsChange,
  onFrameChange,
  onFrameUpload,
  onNextFrame,
  onPreviousFrame,
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
        <label
          className="upload-panel"
          htmlFor="frame-upload"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            onFrameUpload(event.dataTransfer.files);
          }}
        >
          <span className="upload-icon" aria-hidden="true">+</span>
          <span className="upload-title">Carga de frames</span>
          <span className="upload-copy">Haz click o arrastra aqui varios archivos PNG, SVG, WEBP, JPG o JPEG.</span>
          <span className="upload-copy">Usa nombres numericos como frame_01, frame_02, frame_03.</span>
          <input
            id="frame-upload"
            className="upload-input"
            type="file"
            accept=".png,.svg,.webp,.jpg,.jpeg"
            multiple
            onChange={onFrameUpload}
          />
        </label>

        {uploadStatus ? (
          <p className={`upload-status upload-status-${uploadStatus.tone}`}>
            {uploadStatus.message}
          </p>
        ) : null}

        <div className="playback-panel" aria-label="Controles de animacion">
          <div className="transport-row">
            <button className="demo-button transport-primary" type="button" onClick={onTogglePlayback}>
              {isPlaying ? "Pausar" : "Reproducir"}
            </button>

            <button className="ghost-button transport-button" type="button" onClick={onPreviousFrame}>
              Anterior
            </button>

            <button className="ghost-button transport-button" type="button" onClick={onNextFrame}>
              Siguiente
            </button>
          </div>

          <label className="range-control" htmlFor="frame-input">
            <span className="range-label">
              <span>Frame</span>
              <strong>{frameIndex + 1} / {frames.length}</strong>
            </span>
            <input
              id="frame-input"
              className="range-input"
              type="range"
              min="0"
              max={frames.length - 1}
              step="1"
              value={frameIndex}
              onChange={(event) => onFrameChange(event.target.value)}
            />
          </label>

          <div className="speed-row">
            <label className="range-control speed-range" htmlFor="fps-range">
              <span className="range-label">
                <span>Velocidad</span>
                <strong>{fps} FPS</strong>
              </span>
              <input
                id="fps-range"
                className="range-input"
                type="range"
                min={minFps}
                max={maxFps}
                step="1"
                value={fps}
                onChange={(event) => onFpsChange(event.target.value)}
              />
            </label>

            <label className="fps-control" htmlFor="fps-input">
              <span className="fps-label">FPS</span>
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
          </div>

          {customFrames.length > 0 ? (
            <button className="ghost-button reset-button" type="button" onClick={onResetFrames}>
              Restaurar secuencia base
            </button>
          ) : null}
        </div>

        <div className="status-panel">
          <span className={isPlaying ? "is-live" : ""}>{isPlaying ? "Animando" : "Pausado"}</span>
          <span className={customFrames.length > 0 ? "is-custom" : ""}>
            {customFrames.length > 0 ? "Secuencia personalizada" : "Secuencia base"}
          </span>
        </div>
      </div>
    </section>
  );
}
