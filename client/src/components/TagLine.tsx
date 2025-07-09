
function TagLine() {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-8 mt-[25vh] mb-8">
            <h2 className="capitalize text-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-tight text-gray-900 mb-4 drop-shadow-sm transition-all duration-500 tracking-tight">
                The{' '}
                <span className="bg-gradient-to-r from-primary to-logo bg-clip-text text-transparent animate-gradient-x transition-all duration-700">
                    Global
                </span>{' '}
                Language and Culture Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-500 mt-2">
                Learn a language, explore new cultures, stay consistent, and grow with purpose.
            </p>
        </section>
    );
}

export default TagLine;