import { useSession } from "next-auth/react";
import Head from "next/head";
import Loading from "./_loading";

export default function Trans() {
    const { status } = useSession();
    if (status === "loading") {
        return <Loading />
    } else {
        return (
            <div className="h-100 w-100 flex flex-col justify-center items-center">
                <Head>
                    <title>The GTimes - The Trans Continental Railroad</title>
                </Head>
                <div className="navbar bg-base-100">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => {
                        window.location.replace('/')
                    }}>Return to Homepage</a>
                </div>
                <div className="mt-[50px]"></div>
                <div className="text-center">
                    <h1 className="text-5xl">Successful Overambition: The Transcontinental Railroad</h1>
                </div>
                <div className="w-[80%] mt-[20px]">
                    <p>The Transcontinental Railroad was filled with overambition; however, with the combination of hard work and technology, the US 
                        successfully managed to connect the country with a railroad, which was the catalyst for the rapid growth of the US economically.
                    </p>
                    <div className="mt-[20px]"></div>
                    <img src="https://www.history.com/.image/t_share/MTY2ODQxODcxOTYyNzQ0Njg0/transcontinental-railroad-gettyimages-559144231.jpg" alt="PNG Stats" />
                    <div className="mt-[20px]"></div>
                    <p>
                        The Transcontinental Railroad was going smoothly in construction, but there was one problem: they had to pass through the mountains to connect the two lines.
                        The workers had to use a combination of digging and explosives to blow a hole in the mountain, making a tunnel. Many thought it was doomed to fail. It was very, very
                        ambitious, but the railroad workers successfully made a tunnel and connected the two lines. The success of the railroad became a symbol for American prosperity.
                    </p>
                    <div className="mt-[20px]"></div>
                </div>
            </div>
        )
    }
}