import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SocialIconsAnimation } from "../ui/social-icon-animastion";

const iconData = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="size-full" />,
    hoverColor: "text-[#0A66C2]",
    href: "https://www.linkedin.com/in/jeringeorge98/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="size-full" />,
    hoverColor: "text-[#6E5494]",
    href: "https://github.com/jeringeorge98",
  },
  {
    name: "Email",
    icon: <IoMdMail className="size-full" />,
    hoverColor: "text-[#00B2FF]",
    href: "mailto:jerringeorge1998@gmail.com",
  },
];

const SocialIcons = () => {
  return (
    <div>
      <SocialIconsAnimation items={iconData} />
    </div>
  );
};

export default SocialIcons;
