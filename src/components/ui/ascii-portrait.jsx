"use client";

import { useEffect, useRef } from "react";

const RAW = `                                                     .+*#*%*#%#%@%##@#:
                                                   -***#%%%%%@%%%%%@@#*%%%#.
                                                -=***%%##%%@@@%%@@##@@@@##%%+*%:
                                            -**#%%####%%@%@@@@%@#%@*%#%#@%#%##***%:
                                          **##%@#%##%#@@@@@@%@@@%@*###%##%@*#*##***%*.
                                        +%##*#%##%%@%%@@@@@@@#%%%##%*#*%%#*%%#**%#*%###:
                                       #%@@%%@@%%%%%@@@@@@@@@@@%%%%#%%*##%+#%##*##@%*%###
                                     .*%##%%#%@@%%@%%@@@@@@%#%@%%##*%*#*#**#*#%#**#%@+##%%#
                                    ##%@@%@%#@%%%@%%%@@%@%%@@%%%#%#*@+**+@#*#**###@%#@*#%#%%+
                                  +##@@%@@%%@@%@@@%#%@@%%@@%#%##%##*%##*##%*@@@###**##@#*#####.
                                 -##*%%%@@@%@@@@%@%@@%##%%#%%#%%%**#@%#*+%%#@@@%@%%@@##%@#%#+@##
                                -*###%%#@@@%@%#%%@@#@%%##@%%%+#######**@*%%%##%*@@@@@@@@@@%%@#%##.
                               .***#%%%%@%@@@@@%@#@%%#%%#%##*######**%+*##+*%#%#@@@@@#@%%#%%@@#*%%
                               +#####%@%%@@@%%@@%%%@%%%%%#%#*%%##*###*=**+*####%#@@@@@@%@%#%%@@%#@%
                               ##*@%=@%%%@%@%@@@%@%@@%@%#+*#%##%*##+###*@#*%+%%#+#@%@@@@@@@@%@*@%%%#.
                              %##@@+ %.@*@#@%@@@%@@@%@@%%%###*%###**%*###+##+%#%@%%#@@@%@@@@%@@@@@@@*
                              #*#@@-..* .**@#%#@%@@@%%#%%@%#%%#**#*#*%%#**###%%*%@@@%%@@@@@@@@@@@@@@%:
                             ##*#@@-  .-: .-#%*%%%%%#@%%##%##***#**++*####%**#%%%#@%%%@@@@@@@@@@@@@@@=
                             %%##@@-.  .      . +:=:-##*+#**-+:.:.+=+++***#+****%@%@@@%@@@@@@@@@@@@@@@-
                             #%%#@@+.   .      .  .       .::===..-::--::-:.:+#*#%+#%@@@@%@@@@@@@@@@@@%
                            -%%@*#@#-  .  . :.+-=++..:.           .::::....:-:--++##%##*%@@%@@@@@@@@@@@.
                            +#%%#%@@-.- ::.::-:-:::..             .:-:::::+=%=@@@=%*****#%@%@@@@@@@@@@@.
                            -#%##@@@=.           .....            ..--:-=   #@@@@.=##+=*+*#%%@@@@@@@@@@:
                             #%*#%#@*:     :.#@%@@*=::..         .::-.=- .:   .---=++===**=#%%#@@@@@@@@=
                             *%%#*+@@:   :+- #--@%%.   ..        ...:::        ..::-::::--=*#*%%@@@%@@@%
                             +##%++@@:  .:+   #*@:. . .           .......        .......::--**%#@@%@@@%%
                             **#%=%@@-   -:::      .              ....                   .:--##@%@@%@%@=-
                             -*##%#*@-          ..               ..:...                   .::+%@@#@@@@@*
                              -#*%#*@*                            ..::.                    .:=%@@@#%@@@. .
                               #*##**@.                             .:--.                  .:-#@%%@%@@+.
                               %*#@%@@.                             .  .:                   .-*+@%%@@%=
                               +##%*+%.                                .-                  ..-+*%%@#%:
                                 %%#*@=                         .:+-:..:=                 ..::=-*@@@#
                                 #%#@%#                  -.  .::.-::.:::                 ...:-+@@@%%-
                                  ####@                                                 ...::-*@@@:#.
                                  *%@@@=                                  . .   . ... .....::-@@@@  :
                                   *%@@@:                          ....... . :..::. .......::-@%*# .
                                    %@@%@                    ... .::----====+#==:.  ......:::*%-    -
                                    .=@@#%               ::-:..::::   .:-==---...   ..:..::-:@+
                                      .#@-*          .:==+:         .:---::-:....  .::..:::-@@
                                          %*        .:-..:.:. ....::-:..:....... ..::::::::-@@-
                                            *                   . .  ..     ..... .:-::----+@@
                                             *                               . ..::-==-----=@@
                                              -:...                        .  .:::===-==---*@@
                                               ..:...                    .  ..::====+==----+@
                                                 .::::.               ... :..--=+=====-::::--
                                                  ..:-::.    .    ...:...::--++++===-::::::-
                                                 .   :::--.:....:.-::-:-==++==+++==-::..:::-
                                             -#@..   ...::-=---:++==+========-=--:-::.:..:::
                                         %@###*..        ..::::::---::-=------::::::.....::::*%
                                     .@%%@###%...          . .....:.::.:.:.:....::. ........::-@##@:
                                  #@%@@%@%###%.                    ..............    .......::::%@%%%#%*
                             .%%%@@%%@%%@%%###-                              . ..     ........::%@@%@%%%%%%+
                        =##%#%%@@%@%%%%%@@#%###                                      ...   .....%%%@%%@@@@%%%@%.
                  *%%#%@%@@%%%@@%@@@%%%%@@%%%###                               .     ..        .%%@@%@%@@%%%%%@@@%%-
           :%%%####%@@@@@@##%@@@%%@@%@%%%%@%%##%#.                                   ..    .   :%%%@@%%@@@@@@@%@@@@%%%#*
   %*#%%%%@%%%*#%%@@@@@@@%%%@@@@%@%@@%%@%%%@#%%%%#:                                 ..        .#%%%%@@@@%%@@@@@@@@@@@@@@%%%*
 ##*#%@@%@@@%%#%%@@@@@@@%%%@@@@@@%%@@%%%%%%%%%%%@##:                                :.       ..%%%%%%%@%@@%@%@@%@@@@@%%%@@@%%%%+
%#**#%@@@@@%%%#%@@@@@@@@%%@@@@@@%%@%%%@%@%%%%@%%%%##*.                             .:       ..#%%%%%@@@@%@@@@@%%@@%@@@@%%@@@%%%%
##%*#%@@%@@%%##%@@@@@@@@%%@@@@@@@@%%%%%%@%%%%%%%##@@#%#                            ..       :%%%%%%@@@@@@@@%%@%@@@%@@%@%@@%@%@%%
#%@@*%@@@@@%%#%@@@@@@@@@%%@@@@@@@@@%@%%%%%%%%%%%@+#*@#%@*:                         .       #%%%%%%%@@@@@@%@%@@@%@@@@@@@%@%%%@%@%
#%%@@%@@@@@@%#%@@@@@@@@@%%%@@@@@%@@%%%%%%%@%%%%%%%%#@%@@%%##%                            #%#%%%%%@%@@@@@@@%%%@@@%@@@@%@%@%%%%@@%
#%%@@#%@@@@@@#%@@@@@@@@%%%@@@@@%@%@@@%%%%%@@%%%%%%%@%#@@%%@@%##%#.                     %%%%@%%%%@%@%%%@@@@@%%@@@@@%@@%@@@@%@%%@@
#%%@@*@@@@@@@#@@@@@@@@@@@%@@@@@@@%%@@@%%%%%%@%%%%%%%%#@%%@%%@%%%%%###%.         :#%*%%#@@%%%##%@%%@@@@@@%@@%%%@@@@@%@@@@@%@%%%@@
%%%@@%%@@@@@@*%@@@@@@@@@%%%@@@@@@@@%%@@@@%%%%@%%%%%%%%%%@@%%%%#%%##%%#%%%#%%%%#%#%%%%##%%%#%%@%%%%@@@%@@@@@@@%%%@@%@@%@@%%%%@%%%
#%%%@@%@@@@@@#@@@@@@@@@%%%%@@@@@@%%%%%@@@%%%%%@%%%%%%%%%%%%%@%%%*##%@%%@%%%%%%#%@%%#%####%@%@%%@%@@@%@%@%@@@@%@%%@@@@%@@%@%%%%%%
##%%@@%%%@@@@%@@@@@@@@@@%%@@@@@@%%@@%%%@@@%%%%@%%%%%%%%%%%%%%%%%@%###%%%%%%%%%%%@%#%%%@@@@@%%%%%%%@@%%%%@@@%%@@@@@@@@@@%@%%@@%%%`;

// restore the three empty rows above the head from the original art, and
// pad every line to the full grid width, so the static haze surrounds the
// portrait on all sides instead of only where spaces survived
const RAW_LINES = ["", "", "", ...RAW.split("\n")];
const GRID_WIDTH = Math.max(...RAW_LINES.map((l) => l.length));
const ART = RAW_LINES.map((l) => l.padEnd(GRID_WIDTH, " ")).join("\n");

const GLYPHS = "@%#*+=-:.";
const LIGHT_GLYPHS = ".:·-+ .·- ";
const NOISE_RATIO = 0.5;
const DURATION = 2600;
const TICK = 50;
const BUILDUP = 0.45; // fraction of DURATION during which characters pop in from blank
const HOVER_RADIUS = 4; // ripple radius around the cursor, in character-cell widths

export function AsciiPortrait({ onDecoded }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let interval;
    let hoverInterval = null;
    let ready = false; // hover ripple waits until the portrait is fully decoded

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDecoded?.();
      return;
    }

    // the reveal is an entrance moment: when the page loads already scrolled
    // down (browser-restored session), skip it — scrolling back up should
    // find the portrait finished, not replaying
    const entranceSkipped = window.scrollY > 100;
    if (entranceSkipped) {
      ready = true;
      onDecoded?.();
    }

    // --- hover ripple: glyphs near the cursor churn, then settle back ----
    const chars = ART.split("");
    const rowCount = ART.split("\n").length;
    const scrambleUntil = new Float64Array(chars.length);

    const renderScramble = () => {
      const now = performance.now();
      let active = false;
      let out = "";
      for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (c !== "\n" && c !== " " && now < scrambleUntil[i]) {
          active = true;
          out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
        } else {
          out += c;
        }
      }
      el.textContent = out;
      if (!active) {
        clearInterval(hoverInterval);
        hoverInterval = null;
      }
    };

    const onMove = (e) => {
      if (!ready) return;
      const rect = el.getBoundingClientRect();
      const cellW = rect.width / GRID_WIDTH;
      const cellH = rect.height / rowCount;
      const radius = cellW * HOVER_RADIUS;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const now = performance.now();

      const minRow = Math.max(0, Math.floor((y - radius) / cellH));
      const maxRow = Math.min(rowCount - 1, Math.ceil((y + radius) / cellH));
      const minCol = Math.max(0, Math.floor((x - radius) / cellW));
      const maxCol = Math.min(GRID_WIDTH - 1, Math.ceil((x + radius) / cellW));

      for (let r = minRow; r <= maxRow; r++) {
        for (let col = minCol; col <= maxCol; col++) {
          const dx = (col + 0.5) * cellW - x;
          const dy = (r + 0.5) * cellH - y;
          if (dx * dx + dy * dy > radius * radius) continue;
          const idx = r * (GRID_WIDTH + 1) + col;
          const c = chars[idx];
          if (c !== " " && c !== "\n") {
            scrambleUntil[idx] = now + 250 + Math.random() * 350;
          }
        }
      }
      if (!hoverInterval) hoverInterval = setInterval(renderScramble, TICK);
    };

    el.addEventListener("mousemove", onMove);

    const startDecode = () => {
      const chars = ART.split("");
      const rowCount = ART.split("\n").length;

      // three-phase reveal: the grid starts blank, characters pop into
      // churning static one by one during the build-up, then settle into
      // the final art in a loose top-to-bottom sweep with per-glyph jitter.
      // noise in the empty space pops in the same way but dissolves back
      // to blank, so the portrait condenses out of the static
      let row = 0;
      const appearAt = [];
      const settleAt = chars.map((c, i) => {
        if (c === "\n") {
          row++;
          appearAt[i] = 0;
          return 0;
        }
        if (c === " ") {
          if (Math.random() >= NOISE_RATIO) {
            appearAt[i] = 0;
            return 0; // stays blank forever
          }
          appearAt[i] = Math.random() * DURATION * BUILDUP;
          return appearAt[i] + 200 + Math.random() * 600;
        }
        appearAt[i] = Math.random() * DURATION * BUILDUP;
        const sweep = (row / rowCount) * 0.5 + Math.random() * 0.5;
        return DURATION * (BUILDUP + (1 - BUILDUP) * sweep);
      });

      const start = performance.now();
      let announced = false;

      const renderFrame = () => {
        const elapsed = performance.now() - start;
        // let the hero text start rising while the last glyphs settle
        if (!announced && elapsed >= DURATION * 0.7) {
          announced = true;
          onDecoded?.();
        }
        if (elapsed >= DURATION) {
          el.textContent = ART;
          clearInterval(interval);
          ready = true; // decode finished; hover ripple may take over
          return;
        }
        let out = "";
        for (let i = 0; i < chars.length; i++) {
          const c = chars[i];
          if (c === "\n" || elapsed >= settleAt[i]) {
            out += c;
          } else if (elapsed < appearAt[i]) {
            out += " "; // not born yet
          } else if (c === " ") {
            out += LIGHT_GLYPHS[(Math.random() * LIGHT_GLYPHS.length) | 0];
          } else {
            out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
          }
        }
        el.textContent = out;
      };

      interval = setInterval(renderFrame, TICK);
      renderFrame();
    };

    // wait until the portrait is actually on screen before decoding
    let observer;
    if (!entranceSkipped) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startDecode();
        }
      }, { threshold: 0.25 });

      observer.observe(el);
    }

    return () => {
      observer?.disconnect();
      el.removeEventListener("mousemove", onMove);
      if (interval) clearInterval(interval);
      if (hoverInterval) clearInterval(hoverInterval);
    };
  }, []);

  return (
    <div data-nosnippet="" className="w-full flex justify-center overflow-hidden">
      <pre ref={ref} aria-hidden="true" className="ascii-portrait font-mono shrink-0 select-none text-neutral-600 dark:text-neutral-500">
        {ART}
      </pre>
    </div>
  );
}
