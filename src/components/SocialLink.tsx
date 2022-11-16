import Link, { LinkProps } from "next/link";
import {
    RiFacebookCircleFill,
    RiYoutubeFill,
    RiInstagramFill,
    RiTwitterFill,
    RiGithubFill,
    RiLinkedinFill,
    RiTelegramFill,
    RiWhatsappFill,
    RiDiscordFill,
    RiMailFill,
} from "react-icons/ri";

interface ITextLink extends Pick<LinkProps, "href"> {
    key: string;
    icon: string;
    href: string;
}

const SocialLink = ({ href, key, icon }: ITextLink) => {
	return (
        <Link href={href} passHref>
            <a target="_blank" aria-label="social-link" rel="noreferrer">
                {/* switch dynamic key */}
                {icon === "fb" && (
                    <RiFacebookCircleFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "yt" && (
                    <RiYoutubeFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "ig" && (
                    <RiInstagramFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "tw" && (
                    <RiTwitterFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "gh" && (
                    <RiGithubFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "li" && (
                    <RiLinkedinFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "tg" && (
                    <RiTelegramFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "wa" && (
                    <RiWhatsappFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "dc" && (
                    <RiDiscordFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {icon === "mail" && (
                    <RiMailFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
            </a>
        </Link>
    );
};

export default SocialLink;