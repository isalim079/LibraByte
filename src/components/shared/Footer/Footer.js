import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import dynamic from "next/dynamic";


const Footer = () => {
    return (
        <div>
            <footer className="bg-royalBlue">
                <div className="w-full h-[450px] bg-bgTexture flex flex-col md:flex-row justify-center md:justify-around md:items-center gap-3 md:gap-14 lg:gap-20 lg:px-[140px] md:px-[80px] px-8">
                    <div>
                        <h3 ><span className="text-orange-300 text-3xl font-normal ">Libra</span><span className="text-stone-50 text-3xl font-bold ">Byte</span></h3>
                        <p className="w-[180px] opacity-70 text-stone-50 text-md leading-[27px] ">123 Main Street  Cityville, State 12345 Countryland</p>
                    </div>
                    <div>
                        <ul className="flex flex-row md:flex-col gap-2 text-white">
                            <Link href="/about">About us</Link>
                            <Link href="/about">Blog</Link>
                            <Link href="/about">Account</Link>
                            <Link href="/about">Contact</Link>

                        </ul>
                    </div>
                    <div>
                
                    <ul className="flex  flex-row md:flex-col gap-2 text-white">
                            <Link href="/about"> Terms</Link>
                            <Link href="/about">Privacy</Link>
                            <Link href="/about">Help</Link>
                            <Link href="/about">FAQ</Link>

                        </ul>
                    </div>
                    <div className="text-white ">
                          <p >Follow Us</p>
                          <ul className="flex gap-5 text-xl mt-3">
                            <Link href="/about"><FaFacebook/></Link>
                            <Link href="/about"><FaInstagram/></Link>
                            <Link href="/about"><CiLinkedin/></Link>
                            <Link href="/about"><FaYoutube/></Link>

                        </ul>
                       <p className="mt-3"> <span className="text-stone-50 opacity-70 ">@Libra</span><span className="text-stone-50  font-bold">Byte</span><span className="text-stone-50 opacity-70 "> 2022</span></p>
                    </div>

                </div>
            </footer>
        </div>
    );
};

// export default Footer;

export default dynamic(() => Promise.resolve(Footer), {ssr: false})