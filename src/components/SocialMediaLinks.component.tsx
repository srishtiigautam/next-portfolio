import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import Mail from "./Mail.component";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <a
        href="https://www.linkedin.com/in/-srishtigautam"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-600"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/srishtiigautam"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-600"
      >
        <FaGithubSquare size={30} />
      </a>
      <a
        href="https://x.com/gautam_sri50255"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-600"
      >
        <FaTwitterSquare size={30} />
      </a>
      <Mail />
    </div>
  );
};

export default SocialMediaLinks;
