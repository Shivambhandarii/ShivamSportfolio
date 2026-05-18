// link (next js)
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

// framer motion
import { motion } from "framer-motion";

// next hooks
import { usePathname } from "next/navigation";
import { SocialMediaProfiles } from "@/data/SocialMediaProfiles";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            onClick={onLinkClick}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
      <a
        href={SocialMediaProfiles.resume}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkStyles} flex items-center capitalize`}
      >
        Resume
        <RiArrowRightUpLine className="ml-1 flex animate-bounce text-primary dark:text-primary" />
      </a>
    </nav>
  );
};

export default Nav;
