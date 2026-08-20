function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M17.6 6.3A8.9 8.9 0 0 0 3.1 16.9L2 22l5.2-1.4a8.9 8.9 0 0 0 4.2 1.1h0a9 9 0 0 0 6.2-15.4zM12 20a7.4 7.4 0 0 1-3.8-1l-.3-.2-2.8.8.8-2.7-.2-.3A7.5 7.5 0 1 1 19.5 12 7.5 7.5 0 0 1 12 20zm4.1-5.6c-.2-.1-1.3-.7-1.6-.7s-.4-.1-.6.1-.7.7-.8.9-.3.2-.5.1a6.1 6.1 0 0 1-1.8-1.1 6.7 6.7 0 0 1-1.2-1.5c-.1-.2 0-.4.1-.5s.2-.3.4-.4a1.6 1.6 0 0 0 .2-.4.4.4 0 0 0 0-.4c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c-.1-.1-.2-.2-.5-.3z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
