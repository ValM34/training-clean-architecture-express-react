import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppContextProvider } from './AppContextProvider';

createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>
)
