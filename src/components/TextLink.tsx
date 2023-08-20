import Link, { LinkProps } from "next/link";

interface ITextLink extends Pick<LinkProps, "href"> {
	title: string;
	textClass?: string;
}

const TextLink = ({ href, title, textClass }: ITextLink) => {

	return (
		<Link href={href} passHref>
			<a
				target="_blank"
				className={textClass}>
				<h1 className="uppercase tracking-wide">{title}</h1>
			</a>
		</Link>
	);
};

export default TextLink;
