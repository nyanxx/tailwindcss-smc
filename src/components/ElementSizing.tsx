import type { JSX } from "react";

export default function ElementSizing(): JSX.Element {

    return (
        <div>
            <h1 className="text-4xl mb-8 font-bold text-center">Element Sizing</h1>
            <div className="outline flex flex-col gap-4 min-w-100">
                <div className="bg-blue-500 w-39 h-39 flex justify-center items-center">
                    <p className="text-md font-bold text-white tracking-wide">fixed width</p>
                </div>
                <div className="bg-green-500 w-1/2 h-24 flex justify-center items-center">
                    <p className="text-md font-bold text-white tracking-wide">half width</p>
                </div>
                <div className="bg-violet-500 w-1/3 h-20 flex justify-center items-center">
                    <p className="text-md font-bold text-white tracking-wide">One fractional</p>
                </div>
                <div className="bg-red-500 w-full h-16 flex justify-center items-center">
                    <p className="text-md font-bold text-white tracking-wide">full width</p>
                </div>
            </div >
        </div>
    )
}