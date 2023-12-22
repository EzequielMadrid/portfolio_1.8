import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/ezequielmadrid97/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/EzequielMadrid",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaYoutube,
    uril: "https://www.youtube.com/watch?v=fuGZFVXPPo0&t=3355s",
    color: "#ff0000",
  },
];

export default Socials;
