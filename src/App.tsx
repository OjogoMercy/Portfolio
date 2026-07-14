import "./App.css";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function App() {
  const image = "/src/assets/profile.png";
  return (
    <div className="flex  flex-col md:flex-row min-h-screen bg-page-bg">
      <aside className="w-full md:w-2/5 md:h-screen md:sticky md:top-0 p-6 sm:p-10 ml-5">
        <img
          src={image}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-70 lg:h-70 object-cover rounded-full mt-6 md:mt-15"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-text-primary font-bold mt-5 mb-5">
          Ojogo Mercy
        </h1>
        <h2 className="text-text-secondary text-sm sm:text-base mt-3 mb-3">
          Mobile and Frontend Engineer
        </h2>
        <h2 className="text-text-secondary text-sm sm:text-base">
          I help founders and startups launch investor-ready websites and mobile
          applications fast and without execution friction
        </h2>

        <div className="flex gap-5 mt-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a href="mailto:you@email.com">
            <Mail className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a href="tel:+234...">
            <Phone className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
        </div>
      </aside>

      <div className="ticks"></div>

      <section id="next-steps"></section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  );
}

export default App;
