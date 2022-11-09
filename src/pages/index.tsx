import Head from "next/head"
import { useSession } from "next-auth/react"
import Loading from "./_loading";
import Card from "./_card";

export default function Home() {
  const { status } = useSession();
  if (status === "loading") {
    return <Loading />
  } else {
    return (
      <div className="h-100 flex flex-col justify-center items-center">
        <Head>
          <title>The GTimes</title>
        </Head>
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost normal-case text-xl" onClick={() => {
            window.location.replace('/')
          }}>The GTimes</a>
        </div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w">
              <h1 className="text-5xl">QotD: What are the consequences of pursuing overambitious ideas?</h1>
            </div>
          </div>
        </div>
        <div className="mt-[100px] text-center w-[85%]">
          <h1 className="text-3xl">Pursuing overambitious ideas is a gamble since a successful pursuit will achieve great rewards, yet a failed attempt can lead to great catastrophe.</h1>
        </div>
        <div className="h-[100px]"></div>
        <h1 className="text-4xl font-bold">Today's News Feed:</h1>
        <div className="h-[20px]"></div>
        <div className="flex flex-wrap justify-center w-[90%]">
          <Card title="Country of the Day: Papua New Guinea"
            body="Explore Papua New Guinea's overmbitious plans for economic growth in 2022"
            img="https://www.bestcustomflags.com/wp-content/uploads/2016/06/papua-new-guinea-flag.jpg"
            click={() => {
              window.location.replace("/png")
            }}
          />
          <Card title="Economy: ASEAN Economic Community"
            body="An ambitious project aiming to unite 600 million people and $2 trillion in GDP"
            img="https://vignette.wikia.nocookie.net/headsoccer/images/d/d3/ASEAN's_Flag.jpg/revision/latest?cb=20150902121922"
            click={() => {
              window.location.replace("/aec")
            }}
          />
          <Card title="Story Analysis: The Fisherman and his Wife"
            body="A classic Grimm Brother's tale of someone who got a little too ambitious and greedy"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Fischer_und_Frau.jpg/1200px-Fischer_und_Frau.jpg"
            click={() => {
              window.location.replace("/fishermanandhiswife")
            }}
          />
          <Card title="Gaming: 原神 Genshin"
            body="How a kid got yeeted to another dimension for his arrogant ambition"
            img="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/genshin-impact-traveler-featured-image.jpg"
            click={() => {
              window.location.replace("/genshin")
            }}
          />
          <Card title="History: The Transcontinental Railroad"
            body="One of the most successful, overambitious ideas ever"
            img="https://www.history.com/.image/t_share/MTY2ODQxODcxOTYyNzQ0Njg0/transcontinental-railroad-gettyimages-559144231.jpg"
            click={() => {
              window.location.replace("/railroad")
            }}
          />
          <Card title="Classics: Frankenstein"
            body="Victor Frankenstein becomes reckless and creates a monster"
            img="https://i.pinimg.com/originals/e1/1a/42/e11a42335564aa23365036d414be32a0.jpg"
            click={() => {
              window.location.replace("/frankenstein")
            }}
          />
        </div>
        <div className="h-[40px]"></div>
        <p>Images borrowed from the Internet. Right click the image and copy image link to find original sources.</p>
        <div className="h-[40px]"></div>
      </div>
    )
  }
}
