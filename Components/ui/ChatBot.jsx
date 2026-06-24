"use client";

import Script from "next/script";

export default function ZapierChatbot() {
  return (
    <>
      <Script
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        type="module"
        strategy="afterInteractive"
      />

      <zapier-interfaces-chatbot-embed
        is-popup="true"
        chatbot-id="cmqs729nk003vbt0yy5uidyk7"
      />
    </>
  );
}