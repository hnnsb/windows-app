import {StrictMode, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from '@tanstack/react-router'

import theme98Url from './themes/local-98.css?url';
import themeXpUrl from './themes/local-xp.css?url';

// Import the generated route tree
import {routeTree} from './routeTree.gen'

import './styles.css'
import {ThemeProvider, useTheme} from "@/context/ThemeContext.tsx";
import reportWebVitals from './reportWebVitals.ts'
import NotFound from "@/components/NotFound.tsx";


const themes = {
  "98": theme98Url,
  "xp": themeXpUrl,
};

// Create a new router instance
const router = createRouter({
  routeTree,
  basepath: "/windows-app",
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultNotFoundComponent: NotFound,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function ThemeLoader() {
  const {theme} = useTheme();

  useEffect(() => {
    let link = document.getElementById("theme-link") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.id = "theme-link";
      document.head.appendChild(link);
    }
    link.href = themes[theme];
  }, [theme]);

  return <RouterProvider router={router}/>;
}

// Render the app
const rootElement = document.getElementById('root')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ThemeProvider>
        <ThemeLoader/>
      </ThemeProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
