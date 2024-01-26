"use client"

import Link from "next/link";


const useNavLinks = (isActiveLink, pathname, navMenus, menuToggle) => {
    return (
        <>
            <li>
                <Link
                    href="/"
                    style={{
                        ["fontWeight"]: isActiveLink("/") ? "bold" : "normal",
                        // ["textDecoration"]: isActiveLink("/")
                        //     ? "underline"
                        //     : "",
                        ["textDecorationColor"]: isActiveLink("/")
                            ? `${navMenus}`
                            : "",
                        ["color"]: menuToggle ? "#333D2E" : `${navMenus}`,
                    }}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/blog"
                    style={{
                        ["fontWeight"]: isActiveLink("/blog")
                            ? "bold"
                            : "normal",
                        // ["textDecoration"]: isActiveLink("/blog")
                        //     ? "underline"
                        //     : "",
                        ["textDecorationColor"]: isActiveLink("/blog")
                            ? `${navMenus}`
                            : "",
                        ["color"]: menuToggle ? "#333D2E" : `${navMenus}`,
                    }}
                >
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    href="/aboutUs"
                    style={{
                        ["fontWeight"]: isActiveLink("/aboutUs")
                            ? "bold"
                            : "normal",
                        // ["textDecoration"]: isActiveLink("/aboutUs")
                        //     ? "underline"
                        //     : "",
                        ["textDecorationColor"]: isActiveLink("/aboutUs")
                            ? `${navMenus}`
                            : "",
                        ["color"]: menuToggle ? "#333D2E" : `${navMenus}`,
                    }}
                >
                    About Us
                </Link>
            </li>
        </>
    );
};
export default useNavLinks
