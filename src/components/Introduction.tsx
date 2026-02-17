import type { JSX } from "react";

type IntroductionProps = {
    changeCurrentPage: () => void
}
export default function Introduction(props: IntroductionProps): JSX.Element {

    return (
        <div className="bg-white p-9 rounded-md shadow-lg">
            <h1 className="text-2xl font-bold text-blue-600">
                Hello, Tailwind!
            </h1>
            <p className="text-gray-700 mt-2">
                This is your first Tailwind-styled page.
            </p>
            <button onClick={() => (props.changeCurrentPage())} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition"> Get Started </button>
        </div>
    )
}