/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_RECIPIENT_EMAIL: string
  readonly VITE_RESUME_URL: string
  readonly VITE_RESUME_NOTIFICATION_TEMPLATE_ID: string
  readonly VITE_EMAIL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_SHOW_CERTIFICATE_LINKS: string
  readonly VITE_CERT_REACT_JS: string
  readonly VITE_CERT_MONGODB: string
  readonly VITE_CERT_MYSQL: string
  readonly VITE_CERT_HTML: string
  readonly VITE_CERT_BOOTSTRAP: string
  readonly VITE_CERT_NODE_JS: string
  readonly VITE_CERT_CSS: string
  readonly VITE_CERT_FULL_STACK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}