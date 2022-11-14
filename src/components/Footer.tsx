import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer>
      <div className="p-4 flex justify-center items-center gap-2">
        <span className="flex items-center gap-2">Made By</span>
        <Link href="https://freebio.dev/" passHref>
          <a
            className="text-sky-500 cursor-pointer hover:-translate-y-0 hover:scale-110 duration-700 ease-in-out"
            target="_blank"
          >
            <Image
              src="/bio-512x512.png"
              alt="FreeBio"
              width={24}
              height={24}
            />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
