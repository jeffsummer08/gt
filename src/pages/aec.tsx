import Head from "next/head";
import { useSession } from "next-auth/react";
import Loading from "./_loading";

export default function AEC() {
    const { status } = useSession();
    if (status === "loading") {
        return <Loading />
    } else {
        return (
            <div className="h-100 w-100 flex flex-col justify-center items-center">
                <Head>
                    <title>The GTimes - AEC</title>
                </Head>
                <div className="navbar bg-base-100">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => {
                        window.location.replace('/')
                    }}>Return to Homepage</a>
                </div>
                <div className="mt-[50px]"></div>
                <div className="text-center">
                    <h1 className="text-5xl">The Challenge of the ASEAN Economic Community</h1>
                </div>
                <div className="w-[80%] mt-[20px]">
                    <p>The ASEAN economic community aims to unite almost all of the Southeastern countries economically; however, their high ambition
                        poses serious challenges. Much unlike the EU, the ASEAN economic community (AEC) does not plan to introduce a common currency,
                        which can pose challenges in trade and other business.
                    </p>
                    <img src="https://th.bing.com/th/id/R.c57f366ba2db26306928ba901bddbe7b?rik=CD7w1OD0yTTO4A&riu=http%3a%2f%2fwww.umlawreview.com%2fuploads%2f8%2f8%2f9%2f7%2f88973184%2faec_orig.png&ehk=4870kAEfbgTiJ4wtXRgwN4lqhDzUGUb3aLMhUGn7weE%3d&risl=&pid=ImgRaw&r=0" alt="AEC Logo" />
                    <div className="mt-[20px]"></div>
                    <p>
                       The project started in 2007 with the goal to finish by 2020. Leaders never foresaw the immense challenges they would face of uniting
                       countries of completely different economic policies, levels of development, and even government systems (Brunei is still an absolute monarchy, whereas Vietnam is communist). 2020
                       has already passed and the AEC is stil in progress of unification.
                    </p>
                    <div className="mt-[10px]"></div>
                    <p>Experts predicted that the 2020 goal will not be reached. In 2015, Economist Intelligence Unit: Country ViewsWire predicted that "the timetable could well slip, given the challenges of reaching consensus within a regional group with such disparate members, limited regulatory unification, and a lack of EU-style common expenditure programmes to improve economic and social conditions in the bloc's poorer countries".
                    </p>
                    <img src="https://assets.weforum.org/editor/f6ZLNJ1v1dAxs8Dsqt2sr9LSizR2h4exB0MZyzDycS0.jpg" alt="Education levels"></img>
                    <div className="mt-[20px]"></div>
                    <p>One challenge that the AEC faces is the repealing of tarrifs to promote free trade. Many countries, especially the poorer ones, rely on tarrifs since
                        they cannot earn enough tax money through the general public. Countries such as Vietnam make it especially hard for unification because of its strict economic
                        and trade control. As of 2022, the AEC is still trying to unify the ASEAN countries and there is no end in sight. The highly ambitious project might be doomed to fail, but
                        a success will unite $2 trillion in GDP, challenging other Asian superpowers such as China and (half of) Russia.
                    </p>
                    <div className="mt-[20px]"></div>
                </div>
            </div>
        )
    }
}