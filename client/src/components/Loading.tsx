import SyncLoader from "react-spinners/SyncLoader";
function Loading() {
    return (
        <div
            className="fixed inset-0 w-screen h-screen flex items-center justify-center z-50 bg-white/50 bg-opacity-60 backdrop-blur"

        >
            <div className="flex flex-col items-center">
                <SyncLoader
                    color="#FFA726" // Light orange for a friendly look
                    size={14}       // Slightly larger for visibility
                    speedMultiplier={0.8} // Smoother, slower animation
                    margin={6}
                />
                <span className="mt-6 tracking-widest md:text-2xl bg-gradient-to-r from-primary to-logo bg-clip-text text-transparent animate-pulse">
                    HelloFluent
                </span>
            </div>
        </div>

    )
}

export default Loading;