import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const trackerUrl = import.meta.env.VITE_TRACKER_URL
  if (trackerUrl) {
    fetch(`${trackerUrl}/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        referrer: document.referrer || null,
        page: window.location.pathname,
        screenResolution: `${screen.width}x${screen.height}`,
        language: navigator.language || null,
      }),
      keepalive: true,
    }).catch(() => {})
  }
} catch (_) {}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)