import Link from 'next/link';

const Banner = () => {
    return (
        <section className="container mx-auto px-4 md:px-0 py-6">
            <div className="rounded-2xl border border-gray-800 bg-[#0f1318] px-6 py-10 md:px-12 md:py-16">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Left: text */}
                    <div className="flex-1">
                        <p className="text-[10px] font-bold tracking-widest text-lime-400 uppercase">
                            Workout Library
                        </p>

                        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold uppercase leading-[0.95] text-white">
                            Train with intent.
                            <br />
                            Log every set.
                        </h1>

                        <p className="mt-5 max-w-md text-sm text-gray-400">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link
                            href="#library"
                            className="btn mt-6 rounded-md border-none bg-lime-400 px-6 text-xs font-bold uppercase text-black hover:bg-lime-300"
                        >
                            Browse Workouts
                        </Link>
                    </div>

                    {/* Right: image */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                            src="/banner.png"
                            alt="Gym machine illustration"
                            className="w-64 md:w-80 lg:w-96 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;