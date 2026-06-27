import { useRef } from "react";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { useFramePlayer } from "./hooks/useFramePlayer";
import { useGsapPage } from "./hooks/useGsapPage";
import { useHashRoute } from "./hooks/useHashRoute";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";

const defaultFrames = Array.from(
  { length: 14 },
  (_, index) => `/images/grafiti/Frame_${index + 1}.svg`
);

const pageMap = {
  about: AboutPage,
  home: HomePage,
  privacy: PrivacyPage
};

export default function App() {
  const { route, navigate } = useHashRoute();
  const pageRef = useRef(null);
  const player = useFramePlayer(defaultFrames);

  useGsapPage(pageRef, route);

  const CurrentPage = pageMap[route] ?? HomePage;

  return (
    <main className="background-app">
      <div className="site-frame">
        <AppHeader route={route} onNavigate={navigate} />

        <div className="page-shell" ref={pageRef}>
          <CurrentPage
            customFrames={player.customFrames}
            fps={player.fps}
            frameIndex={player.frameIndex}
            frames={player.frames}
            isPlaying={player.isPlaying}
            maxFps={player.maxFps}
            minFps={player.minFps}
            onFpsChange={player.updateFps}
            onFrameUpload={player.handleFrameUpload}
            onResetFrames={player.resetFrames}
            onTogglePlayback={() => player.setIsPlaying((playing) => !playing)}
          />
        </div>

        <AppFooter onNavigate={navigate} />
      </div>
    </main>
  );
}
