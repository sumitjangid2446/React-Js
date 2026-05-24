import App from 'react';
function Card({ Name, txt, btn }) {
    console.log(txt);

    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/060/117/855/small/red-rose-is-the-main-focus-of-the-image-with-a-blue-background-and-a-few-other-flowers-in-the-background-the-rose-is-the-most-prominent-and-beautiful-flower-in-the-picture-photo.jpeg" alt="card-image" />
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {Name}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                    and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                    Barcelona.
                </p>
                <div className="px-4 pb-4 pt-0 mt-2">
                    <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadw-none" type="button"> {btn} </button> </div>
            </div>
        </div>
    )
}
export default Card;
