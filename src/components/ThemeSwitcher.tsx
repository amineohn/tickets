import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const getNextTheme = (): string => {
    if (theme === "dark") return "light";
    if (theme === "light") return "system";
    return "dark";
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10"
      onClick={() => setTheme(getNextTheme())}
    >
      {(() => {
        switch (theme) {
          case "dark":
            return <span className="text-xl">&#127762;</span>;
          case "system":
            return <span className="text-xl">&#127763;</span>;
          case "light":
            return <span className="text-xl">&#127765;</span>;
          default:
            return "system";
        }
      })()}
    </button>
  );
}
