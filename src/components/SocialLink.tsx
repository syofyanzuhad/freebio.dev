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
} from "react-icons/ri";

interface ITextLink extends Pick<LinkProps, "href"> {
    key: string;
    href: string;
}

const SocialLink = ({ href, key }: ITextLink) => {
	return (
        <Link href={href} passHref>
            <a target="_blank">
                {/* switch dynamic key */}
                {key === "fb" && (
                    <RiFacebookCircleFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "yt" && (
                    <RiYoutubeFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "ig" && (
                    <RiInstagramFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "tw" && (
                    <RiTwitterFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "gh" && (
                    <RiGithubFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "li" && (
                    <RiLinkedinFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "tg" && (
                    <RiTelegramFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "wa" && (
                    <RiWhatsappFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
                {key === "dc" && (
                    <RiDiscordFill
                        className="cursor-pointer hover:-translate-y-0 hover:scale-125 duration-700 ease-in-out"
                        size="1.75rem"
                    />
                )}
            </a>
        </Link>
    );
};

export default SocialLink;