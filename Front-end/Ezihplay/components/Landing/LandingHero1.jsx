const LandingHero1 = () => {
    return (
        <>
            <section className="z-0">
                
                <div className="bg-black text-white py-20 z-0">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 tracking-loose text-orange-500 font-bold">EZIH PLAY</h1>
                            <h2 className="text-xl md:text-2xl leading-relaxed md:leading-snug mb-2">
                                connects people through the universal language of music.
                            </h2>
                            <p className="text-sm md:text-base text-gray-50 mb-4">
                                is a community-driven platform where music lovers can share, discover, and review playlists from YouTube, Spotify, and other streaming services.
                            </p>
                            <a href="#"
                                className="bg-transparent hover:bg-orange-500 text-orange-500 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-orange-500 hover:border-transparent transition-all delay-100">
                                Get Started
                            </a>
                        </div>

                        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                            <div className="h-48  flex-wrap content-center gap-6 flex">
                                <div>
                                    <img className="inline-block mt-28 rounded-2xl sm:w-70 w-80 three-d-image sm:h-70  h-80 xl:block" src="https://images.pexels.com/photos/16587507/pexels-photo-16587507.jpeg" />
                                </div>
                                
                                <div className="">
                                    <img
                                        className="lg:inline-block  mt-28 rounded-4xl w-70 h-70 hidden xl:block three-d-image"
                                        src="https://images.pexels.com/photos/6686443/pexels-photo-6686443.jpeg"
                                        alt="3D Effect"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default LandingHero1;