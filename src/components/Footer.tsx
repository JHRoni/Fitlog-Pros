const Footer = () => {
    return (
        <footer className="border-t border-gray-800 bg-[#0b0e12] mt-16">
            <div className="container mx-auto px-4 md:px-0 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="FitLog logo" className="h-5 w-5 object-contain" />
                    <span className="text-xs font-bold uppercase tracking-wide text-white">
                        Fitlog
                    </span>
                </div>

                <p className="text-[11px] text-gray-500 text-center sm:text-right">
                    &copy; 2026 FitLog &mdash; Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;