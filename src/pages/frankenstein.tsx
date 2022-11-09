import Head from "next/head";
import { useSession } from "next-auth/react";
import Loading from "./_loading";

export default function Frankenstein() {
    const { status } = useSession();
    if (status === "loading") {
        return <Loading />
    } else {
        return (
            <div className="h-100 w-100 flex flex-col justify-center items-center">
                <Head>
                    <title>The GTimes - Frankenstein</title>
                </Head>
                <div className="navbar bg-base-100">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => {
                        window.location.replace('/')
                    }}>Return to Homepage</a>
                </div>
                <div className="mt-[50px]"></div>
                <div className="text-center">
                    <h1 className="text-5xl">Frankenstein: How the Monster Was Created</h1>
                </div>
                <div className="w-[80%] mt-[20px]">
                    <p>
                        In Frankenstein, the monster was created as a product of a very overambitious scientist who wanted to discover the secrets of life.
                    </p>
                    <div className="mt-[20px]"></div>
                    <img src="https://th.bing.com/th/id/OIP.OohAScEGJGUtSznHyIGpcwHaE0?pid=ImgDet&rs=1" alt="PNG Stats" />
                    <div className="mt-[20px]"></div>
                    <p>
                        Victor Frankenstein became obssessed with science. Dogged by misfortune with the loss of his mother at a very young age, Frankenstein
                        wanted to uncover the secrets of life. In doing so, he created a monster out of dead body parts. Horrified by his creation, he abandoned the creature.
                    </p>    
                    <div className="mt-[10px]"></div>                
                    <p>
                        The monster would come back to haunt him. The monster killed Frankenstein's wife and caused more pain and misfortune. Because of Frankenstein's overambitious high-risk high-reward behavior,
                        Frankenstein ended up creating a monster that would wreak havoc on Frankenstein's life until he died.
                    </p>
                    <div className="mt-[20px]"></div>
                </div>
            </div>
        )
    }
}