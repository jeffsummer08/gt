export default function Card(props: { title: string, body: string, img: string, click: any }) {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-center cursor-pointer m-[10px]" onClick={props.click}>
            <figure><img src={props.img} alt="Image" style={{ height: "300px", width: "100%" }} /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{props.title}</h2>
                <p>{props.body}</p>
            </div>
        </div>
    );
}