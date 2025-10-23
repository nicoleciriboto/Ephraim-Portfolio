import React from "react";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center">
          <p className="opacity-60">
            © {new Date().getFullYear()} Ephraim Buruvuru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
