import Head from "next/head";
import { useSession } from "next-auth/react";
import Loading from "./_loading";

export default function FishermanandhisWife() {
    const { status } = useSession()
    if (status === "loading") {
        return <Loading />
    } else {
        return (
            <div className="h-100 w-100 flex flex-col justify-center items-center">
                <Head>
                    <title>The GTimes - Fisherman and his Wife</title>
                </Head>
                <div className="navbar bg-base-100">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => {
                        window.location.replace('/')
                    }}>Return to Homepage</a>
                </div>
                <div className="mt-[50px]"></div>
                <div className="text-center">
                    <h1 className="text-5xl">The Tragic Tale of the Fisherman and his Wife</h1>
                </div>
                <div className="w-[80%] mt-[20px]">
                    <p>The Fisherman and his Wife is a classic Grimm Brothers' tale, but inside a simple children's story
                        hides a dark meaning about how the world works to this day. 
                    </p>
                    <div className="mt-[20px]"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Fischer_und_Frau.jpg/1200px-Fischer_und_Frau.jpg" alt="PNG Stats" />
                    <div className="mt-[20px]"></div>
                    <p>
                        To summarize, a fisherman rescues an enchanted prince disguised as a fish. The fisherman's wife then asks the fish for royalties, but
                        when the wife, driven by greed, sets her ambitions too high and asks the fish to make her God, the fish takes away everything he had given her.
                    </p>
                    <div className="mt-[10px]"></div>
                    <p>Hidden in this tragic children's story is a warning to ambitious people. People who taste a little 
                        success will start to make overambitious plans to gain even more success, which will most likely backfire on them.
                        A person should be either be content with what they have or make managable goals that don't push the limits too far in order
                        to increase chances of happiness and success.
                    </p>
                    <div className="mt-[20px]"></div>
                </div>
            </div>
        )
    }
}