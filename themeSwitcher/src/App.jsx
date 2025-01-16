import { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/theme'
import { useEffect } from 'react';
import ThemeTogle from './components/ThemeTogle';
import Card from './components/card';

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");
  useEffect( () => {
    const html = document.querySelector('html')
    html.classList.remove("light","dark")
    html.classList.add(themeMode)
  })

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeTogle />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
        </div>
    </ThemeContextProvider>
  )
}

export default App
