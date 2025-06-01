import { Instagram } from 'lucide-react'; // or any icon library you use

const Contact = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-base flex flex-col justify-center px-4 py-16">
        <div>
          <span className="contact-text font-extrabold text-[var(--secondary)] text-3xl sm:text-4xl md:text-5xl block">
            GET
          </span>
          <span className="contact-text font-extrabold text-[var(--secondary)] text-3xl sm:text-4xl md:text-5xl block">
            YOUR
          </span>
          <span className="contact-text font-extrabold text-[var(--primary)] text-4xl sm:text-5xl md:text-6xl block">
            MANDALA
          </span>
          <span className="contact-text font-extrabold text-[var(--secondary)] text-3xl sm:text-4xl md:text-5xl block">
            TODAY!
          </span>
        </div>
        <hr className="w-full my-30 md:my-8 border-t-2 border-[var(--secondary)]" />
      </section>

      <div className=" h-[60vh] md:h-[80vh] px-10 md:px-16 flex flex-col justify-center gap-6 md:gap-20" id="details">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-5xl font-bold text-[var(--primary)]">Get in Touch</h2>
          <a href="mailto:example@email.com" className="text-[var(--secondary)] underline text-base md:text-2xl">chakrkala@gmail.com</a>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-xl sm:text-5xl font-semibold mt-8 text-[var(--primary)]">Reach out & Order</h3>
          <a
            href="https://www.instagram.com/100_shades_of_mandala/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--secondary)] text-base md:text-2xl hover:underline"
            >
            <Instagram className="w-6 h-6" />
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
