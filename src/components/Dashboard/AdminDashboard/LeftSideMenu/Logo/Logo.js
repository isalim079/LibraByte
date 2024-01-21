import Image from 'next/image';
import logo from "@/assets/logo/LibraByte.png";

const Logo = () => {
    return (
        <div>
             <div className="">
                        <a href="/">
                            <Image
                                src={logo}
                                width={100}
                                height={100}
                                alt="logo"
                            />
                        </a>
                    </div>
        </div>
    );
};

export default Logo;