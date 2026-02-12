import FooterLogo from '../assets/AAANavbarLogo.png';
import FacebookLogo from '../assets/facebookLogo.png';


function Footer() {




  return (
    <>
      <footer
        id="footer"
        className="relative z-500 border-t-4 border-[#E61E25] bg-neutral-900 text-white"
        aria-label="Site footer"
        style={{ boxShadow: '0 -8px 16px -12px rgba(0, 0, 0, 0.35)' }}
      >
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <section
              id="footerBrand"
              className="flex flex-col items-start gap-4"
              aria-label="Brand and tagline"
            >
              <img
                src={FooterLogo}
                className="h-12 w-auto"
                alt="AAA Advertising & Signage logo"
              />
              <p className="text-sm text-neutral-300">
                Trusted advertising & signage solutions that make your brand stand out.
              </p>
              <div className="flex items-center gap-3" aria-label="Social links">
                <a
                  href="https://www.facebook.com/aaaoutdooradss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-800 p-2 ring-1 ring-white/10 hover:bg-neutral-700 hover:ring-[#E61E25] transition"
                  aria-label="Facebook"
                >
                  <img src={FacebookLogo} className="h-5 w-5" alt="Facebook" />
                </a>
              </div>
            </section>

            <section id="footerServices" aria-label="Services">
              <h3 className="text-sm font-semibold tracking-wide text-neutral-200">
                Services
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li className="hover:text-[#E61E25] transition">Design</li>
                <li className="hover:text-[#E61E25] transition">Printing</li>
                <li className="hover:text-[#E61E25] transition">Fabrication</li>
                <li className="hover:text-[#E61E25] transition">Installation</li>
              </ul>
            </section>

            <section id="footerContact" aria-label="Contact">
              <h3 className="text-sm font-semibold tracking-wide text-neutral-200">
                Contact
              </h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-300">
                <p>
                  Phone: <a href="tel:09946549679" className="hover:text-[#E61E25] transition">0994-654-9679</a>
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/aaaoutdooradss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-sm bg-neutral-800 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-neutral-700 hover:ring-[#E61E25] transition"
                  >
                    Message Us
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-neutral-400">
              © 2026 AAA Advertising Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer