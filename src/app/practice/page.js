import { useState } from "react";

export default function BlurModal() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative h-screen flex items-center justify-center bg-gray-100">
            {/* Trigger button */}
            <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Open Modal
            </button>

            {/* Overlay with blur effect */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
                    onClick={() => setOpen(false)} // closes modal on click outside
                >
                    {/* Modal content */}
                    <div
                        className="bg-white rounded-2xl p-6 shadow-xl z-10"
                        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
                    >
                        <h2 className="text-xl font-bold mb-4">Hello 👋</h2>
                        <p>This is the modal content. Background is blurred.</p>
                        <button
                            onClick={() => setOpen(false)}
                            className="mt-4 px-3 py-1 bg-red-500 text-white rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
