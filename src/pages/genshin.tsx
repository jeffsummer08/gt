import Head from "next/head";
import { useSession } from "next-auth/react";
import Loading from "./_loading";

export default function Genshin() {
    const { status } = useSession()
    if (status === "loading") {
        return <Loading />
    } else {
        return (
            <div className="h-100 w-100 flex flex-col justify-center items-center">
                <Head>
                    <title>The GTimes - Genshin</title>
                </Head>
                <div className="navbar bg-base-100">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => {
                        window.location.replace('/')
                    }}>Return to Homepage</a>
                </div>
                <div className="mt-[50px]"></div>
                <div className="text-center">
                    <h1 className="text-5xl">The Story of the Traveller (Fan Theory)</h1>
                </div>
                <div className="w-[80%] mt-[20px]">
                    <p>The traveller is the starter character for Genshin players. The very beginning of the game shows the traveller
                        battling against a god with his/her sibling. The god gets angered over the traveller's arrogance and launches him/her (gender chose by player) into
                        another dimension.
                    </p>
                    <div className="mt-[20px]"></div>
                    <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/genshin-impact-traveler-featured-image.jpg" alt="PNG Stats" />
                    <div className="mt-[20px]"></div>
                    <p>
                        Although the game provides a backstory for how the traveller wounds up in Teyvat, but the game provides nothing for what lead up to the moment.
                        I have made a fan theory of how the traveller got to where he/she was.
                    </p>
                    <div className="mt-[10px]"></div>
                    <p>So the traveller and his/her sibling were conquerors who made great gains conquering worlds. The traveller decided
                        that if they could conquer so much, they could conquer heaven as well. The gods became angry for their arrogant ambition and sent 
                        the traveller to Teyvat. The overambition of the traveller became his/her ultimate demise.
                    </p>
                    <div className="mt-[20px]"></div>
                </div>
            </div>
        )
    }
}