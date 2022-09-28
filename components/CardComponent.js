import React  from 'react'

export default function CardComponent({ totalPrice }){
    return(
        <div className="content center w-full mx-auto h-56 bg-white-200 mt-20 rounded">
            <div className="flex justify-between items-center h-40 mr-10 bg-gray-100 w-full">
                <div>
                    <p className="text-transform: uppercase font-black w-18 text-sm ml-10">Posedujete promo kupon?</p>
                </div>
                <div className="flex mr-64">
                    <input placeholder="Kupon kod" className="outline-none placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none sm:text-sm" />
                    <button className="border-solid border-2 border-gray-900 w-52 text-transform: uppercase ml-2">Primeni kupon</button>
                </div>
                <div className='flex flex-col pr-20 font-semibold'>
                  <div>Ukupno: 0000</div>
                  <div>Troskovi Isporuke : 0000</div>
                  <div className='text-2xl'>Ukupan iznos: {totalPrice}</div>
                </div>
            </div>
            <div className='flex justify-end mt-2 mr-2'>
                <button className="border-2 border-gray-900 mr-6 pt-2 pr-2 pl-2 pb-2 text-transform: uppercase">Povratak na naslovnu stranu</button>
                <button className="border-2 border-red-600 w-52 text-transform: uppercase bg-red-600 text-white">Potvrdi narudzbinu</button>
            </div>
        </div>
    )
}