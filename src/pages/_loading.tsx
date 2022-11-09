import { Triangle } from "react-loader-spinner";
import Head from "next/head";

export default function Loading() {
    return (
        <>
            <Head>
                <title>Frankenstein - Loading</title>
            </Head>
            <main>
                <div className="h-screen flex items-center justify-center">
                    <Triangle
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        visible={true}
                    />
                </div>
            </main>
        </>
    )
}