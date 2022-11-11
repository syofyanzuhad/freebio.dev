import Image from "next/image";

const Avatar = ({ url, alt }: { url: string; alt: string }) => {
	return (
		<div className="inline-flex relative m-4">
			<div className="w-24 h-24 rounded-full ring ring-primary ring-offset-orange-300 ring-rose-700 ring-offset-base-100 ring-offset-2">
				<Image
					className="rounded-full"
					src={url}
					alt={alt}
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
};

export default Avatar;
