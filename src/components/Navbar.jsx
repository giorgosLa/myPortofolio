import { FaGithub, FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home"></a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/george-lagkonakis-3585bb24b/"
          target="_blank"
          rel="nooper noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/giorgosLa"
          target="_blank"
          rel="nooper noreferrer"
          aria-label="LinkedIn"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
