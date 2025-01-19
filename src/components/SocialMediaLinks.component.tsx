import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
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
      </div>
      <span className="hover:text-pink-600 mt-1">
        &#128231; srishti.gautam0423@gmail.com
      </span>
    </div>
  );
};

export default SocialMediaLinks;
