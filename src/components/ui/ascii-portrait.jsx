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

export function AsciiPortrait({ onDecoded }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDecoded?.();
      return;
    }

    const el = ref.current;
    let interval;

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

    // wait until the portrait is actually on screen (e.g. a reload that
    // restores scroll position would otherwise play it off-screen)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        startDecode();
      }
    }, { threshold: 0.25 });

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div data-nosnippet="" className="w-full flex justify-center overflow-hidden">
      <pre ref={ref} aria-hidden="true" className="ascii-portrait font-mono shrink-0 select-none text-neutral-600">
        {ART}
      </pre>
    </div>
  );
}
