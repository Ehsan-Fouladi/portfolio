const Contact = () => {
    return (
        <main className="w-full h-dvh flex justify-center items-center text-white">
            <section className="h-dvh w-full pt-32 pb-20">
                <div className="container mx-auto px-6 mt-10">
                    <div className="flex flex-col items-center gap-9">
                        <div className="relative">
                            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                                ارتباط با من
                            </h2>
                            <div
                                className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"/>
                        </div>
                        <p className="text-lg break-words !leading-relaxed md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-4xl">
                            "با هر یک از این پلتفرم ها تماس بگیرید. بیایید با هم همکاری کنیم و چیزی شگفت انگیز با هم بسازیم!"
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-stretch gap-6 pt-20">
                        <a href="mailto:fooehan3@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 p-8 rounded-xl flex flex-col gap-3 justify-center items-center group transition-all duration-500 w-full md:w-60">
                            <div className="rounded-full p-2 bg-black/20 group-hover:bg-emerald-400/20">
                                <svg className="w-8" stroke="currentColor" fill="currentColor" viewBox="0 0 576 512"><path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-1 justify-center items-center">
                                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">Email</h3>
                                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">fooehan3@gmail.com</span>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ehsan-fouladi-a0144a237" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 p-8 rounded-xl flex flex-col gap-3 justify-center items-center group transition-all duration-500 w-full md:w-60">
                            <div className="rounded-full p-2 bg-black/20 group-hover:bg-emerald-400/20">
                                <svg className="w-8" stroke="currentColor" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-1 justify-center items-center">
                                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">LinkedIn</h3>
                                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">EhsanFouladi@</span>
                            </div>
                        </a>
                        <a href="https://github.com/Ehsan-Fouladi" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 p-8 rounded-xl flex flex-col gap-3 justify-center items-center group transition-all duration-500 w-full md:w-60">
                            <div className="rounded-full p-2 bg-black/20 group-hover:bg-emerald-400/20">
                                <svg className="w-8" stroke="currentColor" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-1 justify-center items-center">
                                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">GitHub</h3>
                                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">EhsanFouladi@</span>
                            </div>
                        </a>
                        <a href="https://t.me/ehsanfouladiprogrammer" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 p-8 rounded-xl flex flex-col gap-3 justify-center items-center group transition-all duration-500 w-full md:w-60">
                            <div className="rounded-full p-2 bg-black/20 group-hover:bg-emerald-400/20">
                                <svg className="fill-white w-9" viewBox="0 0 24 24">
                                    <path d="M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 C 3.9563403 13.559857 6.0424892 14.392968 6.9492188 14.755859 C 7.2668647 15.707799 8.0129251 17.950071 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710938 10.601562 19.710938 L 10.623047 19.695312 L 12.970703 17.708984 L 15.845703 20.367188 C 15.897113 20.439837 16.308174 20.998047 17.261719 20.998047 C 17.829844 20.998047 18.280978 20.718791 18.568359 20.423828 C 18.855741 20.128866 19.034757 19.82706 19.115234 19.417969 L 19.115234 19.414062 L 19.115234 19.412109 C 19.171124 19.121728 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.01148 4.9067181 22.036735 4.5369631 21.935547 4.1601562 C 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799749 5.7182284 17.343164 18.059965 17.183594 18.878906 L 14.328125 16.240234 C 13.59209 15.559749 12.44438 15.535812 11.679688 16.181641 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.267511 8.8918132 10.350132 11.694224 7.96875 13.048828 C 7.8792978 12.995267 7.7913128 12.939666 7.6933594 12.900391 C 6.9119785 12.587666 5.4101276 11.985551 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 5.2807035 19.908203 5.1738281 z M 17.152344 19.023438 C 17.152344 19.023438 17.154297 19.023438 17.154297 19.023438 C 17.154234 19.023761 17.152444 19.03095 17.152344 19.03125 C 17.154024 19.022709 17.151187 19.029588 17.152344 19.023438 z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1 justify-center items-center">
                                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">Telegram</h3>
                                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">ehsanfouladiprogrammer@</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;