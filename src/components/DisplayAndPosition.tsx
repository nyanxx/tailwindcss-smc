export default function DisplayAndPosition() {
    return (
        <div className="p-6 w-full">
            <h1 className="text-4xl mb-8 font-bold text-center ">Display & Position</h1>
            {/* Block element */}
            <div className="block bg-blue-200 p-4 mb-4">
                Block element (takes full width)
            </div>

            {/* Inline-block element */}
            <span className="inline-block bg-green-200 p-2 mr-2">
                Inline-block 1
            </span>
            <span className="inline-block bg-green-200 p-2">
                Inline-block 2
            </span>

            {/* Positioned element */}
            <div className="relative bg-yellow-200 p-6 mt-6">
                Parent (relative)
                <div className="absolute top-2 right-2 bg-green-400 p-2 rounded-md">
                    Absolute child
                </div>
            </div>
        </div>

    )
}