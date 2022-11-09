import Head from "next/head"
import { useSession } from "next-auth/react"
import Loading from "./_loading";

export default function PNG() {
    const { status } = useSession();
    if (status === "loading") {
        return <Loading />
    } else {
        return (
            <div className="h-100 w-100 flex flex-col justify-center items-center">
                <Head>
                    <title>The GTimes - Papua New Guinea</title>
                </Head>
                <div className="navbar bg-base-100">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => {
                        window.location.replace('/')
                    }}>Return to Homepage</a>
                </div>
                <div className="mt-[50px]"></div>
                <div className="text-center">
                    <h1 className="text-5xl">Papua New Guinea</h1>
                </div>
                <div className="w-[80%] mt-[20px]">
                    <p>Papua New Guinea, a country just above Australia, is making ambitious plans for 2022. Even with the Covid-19 pandemic
                        destroying their economy, Papua New Guinea is investing billions into their infrastructure and education. Their ambitous plans
                        have worked before, with their GDP steadily rising over the recent decade.
                    </p>
                    <img src="https://d3fy651gv2fhd3.cloudfront.net/charts/papua-new-guinea-gdp-us-dollar-wb-data-@2x.png?s=png.ny.gdp.mktp.cd:worldbank&lbl=0&v=202112310000V20200908" alt="PNG Stats" />
                    <div className="mt-[20px]"></div>
                    <p>
                        However, Covid-19 has swept Papua New Guinea off their feet just as it has in every other country. According to Economist Intelligence Unit: Country ViewsWire, even with Covid-19 still
                        threatening to halt their economy, Papua New Guinea's government "is projecting public revenue to reach 16.2 billion Kina, against 13.7 billion Kina in the 2021 supplementary budget, driven mainly by a rise in tax revenue". Note that 
                        these predictions are highly unlikely since only around five percent of Papua New Guinea's citizens are vaccinated, meaning that recovery will be slow.
                    </p>
                    <div className="mt-[10px]"></div>
                    <p>Another ambitious idea is the "Connect PNG" project, which, according to Economist Intelligence Unit: Country ViewsWire, aims to "physically and then digitally link provinces and economic corridors across the mainland, including a new road from Port Moresby (the capital) to Lae, as well as the New Britain and Bougainville Island corridors"</p>
                    <img src="https://www.worldatlas.com/r/w1200/upload/38/6e/67/papua-new-guinea-provinces-map.png" alt="connect png"></img>
                    <div className="mt-[20px]"></div>
                    <p>2022 is still well underway and there is no new news from Papua New Guinea. A successful attempt will give a significant boost to the economy; however, Covid-19, a 
                        global recession, and inflation can easily knock down everything Papua New Guinea has worked for and can completely shatter their economy.
                    </p>
                    <div className="mt-[20px]"></div>
                </div>
            </div>
        )
    }
}