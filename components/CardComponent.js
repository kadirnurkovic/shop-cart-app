import React  from 'react'

export default function CardComponent(){
    return(
        <div className="content center w-full mx-auto h-52 bg-orange-500 mt-20 rounded">
            <div className="flex justify-between items-center h-40 bg-red-100 w-full">
                <div><p className="text-transform: uppercase font-black w-18 text-sm">Posedujete promo kupon?</p></div>
                <div className="flex"><input placeholder="Kupon kod" className="outline-none placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none sm:text-sm" /><button className="border-solid border-2 border-slate-500 w-52 text-transform: uppercase">Primeni kupon</button></div>
                <div>Price</div>
            </div>
            <div>
                <button>Povratak na naslovnu stranu</button>
                <button>Potvrdi narudzbinu</button>
            </div>
        </div>
    )
}