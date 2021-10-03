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
            return (
              <svg
                className="w-9 h-9"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 64L35.6364 16"
                  stroke="#818CF8"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.3635 64L51.9999 16"
                  stroke="#4F46E5"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.6923 31.4287L64 31.4287"
                  stroke="#818CF8"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9999 48.5713L60.3076 48.5713"
                  stroke="#4F46E5"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            );
          case "system":
            return (
              <svg
                className="w-9 h-9"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 64L35.6364 16"
                  stroke="#FBBF24"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.3635 64L51.9999 16"
                  stroke="#F59E0B"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.6923 31.4287L64 31.4287"
                  stroke="#FBBF24"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9999 48.5713L60.3076 48.5713"
                  stroke="#F59E0B"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            );
          case "light":
            return (
              <svg
                className="w-9 h-9"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 64L35.6364 16"
                  stroke="#52525B"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.3635 64L51.9999 16"
                  stroke="#27272A"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.6923 31.4287L64 31.4287"
                  stroke="#52525B"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9999 48.5713L60.3076 48.5713"
                  stroke="#27272A"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            );
          default:
            return "system";
        }
      })()}
    </button>
  );
}
