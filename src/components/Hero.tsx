const Hero = () => {
    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-black mb-4">
                    Welcome to Lawyer Appointment AI
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Find the best lawyers and book appointments online effortlessly.
                </p>
                <a
                    href="/register"
                    className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Hero;
