import { createContext, ReactNode, useContext, useState } from "react";

interface WithThemeProps {
  children: ReactNode;
}

export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: (isDark: boolean) => null;
}>({
  isDark: false,
  setIsDark: () => null,
});

export const useThemeContext = () => useContext(ThemeContext);

function WithTheme({ children }: WithThemeProps) {
  const [isDark, setIsDark] = useState<boolean>(false);

  const contextValue = {
    isDark,
    setIsDark: (isDark: boolean) => {
      setIsDark(isDark);
      return null;
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default WithTheme;
