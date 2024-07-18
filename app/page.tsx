import Card from "@/components/Card";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main className="relative w-[80vw] mx-auto sm:px-10 px-5 overflow-clip my-10">
            <section className="max-w-7xl w-full flex justify-center items-center flex-col">
                <Hero />
            </section>
            <section className="py-10 grid gap-y-5">
                <h1 className="text-center text-xl text-primary">Heading...</h1>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="relative overflow-hidden w-full h-[400px] rounded-2xl p-5 shadow-lg border border-neutral-300">
                        <div className="sticky top-0 z-10">
                            <div className="text-lg">King Solo</div>
                        </div>
                        <div className="absolute -top-4 -left-16 -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity bg-primary-500" style={{ "top": "24rem", left: "-14rem", }}></div>

                        <div className="absolute -top-48 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-primary-500" ></div>
                        <div className="absolute top-1/3 left-6">
                            <div className="text-6xl">1,232</div>
                            <div className="text-lg">New customers in past 30 days</div>
                        </div>
                    </div>
                    <div className="w-full h-[400px] rounded-2xl p-5 shadow-lg border border-neutral-300">
                        <div className="text-lg">Revenue</div>
                        <div className="text-3xl mb-7">$12,543</div>
                        <div className="border-b border-color h-4/6" style={{ display: "grid", gridTemplateColumns: "repeat(17, 1fr)", gridTemplateRows: "repeat(10, 1fr)", gap: "0px 6px" }}>
                            <div className="rounded-t-sm bg-primary-500" style={{ gridArea: "11 / 1 / 3 / 1" }}></div>
                            <div className="rounded-t-sm bg-primary-300" style={{ gridArea: "11 / 2 / 1 / 2" }}></div>
                            <div className="rounded-t-sm bg-primary-500" style={{ gridArea: "11 / 4 / 5 / 4" }}></div>
                            <div className="rounded-t-sm bg-primary-300" style={{ gridArea: "11 / 5 / 3 / 5" }}></div>
                            <div className="rounded-t-sm bg-primary-500" style={{ gridArea: "11 / 7 / 6 / 7" }}></div>
                            <div className="rounded-t-sm bg-primary-300" style={{ gridArea: "11 / 8 / 7 / 8" }}></div>
                            <div className="rounded-t-sm bg-primary-500" style={{ gridArea: "11 / 10 / 1 / 10" }}></div>
                            <div className="rounded-t-sm bg-primary-300" style={{ gridArea: "11 / 11 / 3 / 11" }}></div>
                            <div className="rounded-t-sm bg-primary-500" style={{ gridArea: "11 / 13 / 5 / 13" }}></div>
                            <div className="rounded-t-sm bg-primary-300" style={{ gridArea: "11 / 14 / 2 / 14" }}>
                            </div>
                            <div className="rounded-t-sm bg-primary-500" style={{ gridArea: "11 / 16 / 6 / 16" }}></div>
                            <div className="rounded-t-sm bg-primary-300" style={{ gridArea: "11 / 17 / 7 / 17" }}></div>
                        </div>
                        <div className="" style={{ display: "grid", gridTemplateColumns: "repeat(17, 1fr)", gridColumnGap: "6px" }}><div className="col-span-2 text-center text-xs opacity-50 pt-3">Jan</div><div></div><div className="col-span-2 text-center text-xs opacity-50 pt-3">Feb</div><div></div><div className="col-span-2 text-center text-xs opacity-50 pt-3">Mar</div><div></div><div className="col-span-2 text-center text-xs opacity-50 pt-3">Apr</div><div></div><div className="col-span-2 text-center text-xs opacity-50 pt-3">May</div><div></div><div className="col-span-2 text-center text-xs opacity-50 pt-3">Jun</div></div>
                    </div>
                    <div className="w-full h-[400px] rounded-2xl p-5 shadow-lg border border-neutral-300">
                        <div className="text-lg sticky top-0">Today</div>
                        <div className="overflow-y-scroll mt-4 relative -bottom-11">
                            <div className="space-y-2">
                                <div className="rounded-lg relative overflow-hidden bg-primary-950 p-3 pb-4 pl-4">
                                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary-500"></div>
                                    <div className="flex justify-between items-center text-primary-100">Design system meeting</div>
                                    <div className="text-primary-100 text-sm">9 - 10 AM</div>
                                    <div className="flex items-start justify-start -space-x-1 mt-3">
                                        <img src="/img/api.png" className="border-2 border-border w-6 h-6 rounded-full" alt="image" />
                                        <img src="/img/devices.png" className="border-2 border-border w-6 h-6 rounded-full" alt="image" />
                                        <img src="/img/graphql2.png" className="border-2 border-border w-6 h-6 rounded-full" alt="image" />
                                        <img src="/img/react-dark.png" className="border-2 border-border w-6 h-6 rounded-full" alt="image" />
                                        <img src="/img/react-light.png" className="border-2 border-border w-6 h-6 rounded-full" alt="image" />
                                    </div>
                                </div>
                                <div className="rounded-lg relative overflow-hidden bg-primary-950 p-3 pb-4 pl-4">
                                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary-500"></div>
                                    <div className="flex justify-between items-center text-primary-100">Design system meeting</div>
                                    <div className="text-primary-100 text-sm">9 - 10 AM</div>
                                </div>
                                <div className="rounded-lg relative overflow-hidden bg-primary-950 p-3 pb-4 pl-4">
                                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary-500"></div>
                                    <div className="flex justify-between items-center text-primary-100">Design system meeting</div>
                                    <div className="text-primary-100 text-sm">9 - 10 AM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-clip w-full h-[400px] bg-cover rounded-2xl p-5 shadow-lg border border-neutral-300" style={{ backgroundImage: "url('/people/p1.jpg')" }}>
                        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(transparent 0%, rgb(169, 0, 163) 100%)" }}>
                            <div className="h-full flex">
                                <div className="leading-none p-6 rounded-2xl mt-auto mb-2 text-4xl font-semibold drop-shadow-sm tracking-tight text-white">
                                    Create <br />
                                    <span className="text-primary-300">color scales</span> <br />in seconds. </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[400px] rounded-2xl shadow-lg border border-neutral-300 bg-primary-200 overflow-clip">
                        <div className="p-[178px] bg-cover absolute rounded-full" style={{ backgroundImage: "url('/people/p2.jpg')", backgroundPosition: "0px -45%", top: "-125px", right: "-63px" }}></div>
                        <div className="absolute rounded-full border-[25px] border-primary-200 p-[136px]" style={{ top: "-115px", right: "-58px" }}></div>
                        <div className="absolute rounded-full border-[25px] border-primary-200 p-[90px]" style={{ top: "-80px", right: "-18px" }}></div>

                        <div className="h-full flex">
                            <div className="leading-none p-6 rounded-2xl mt-auto mb-2 text-4xl font-semibold drop-shadow-sm tracking-tight text-primary-500">
                                Create <br />
                                <span className="text-primary-950">color scales</span> <br />in seconds. </div>
                        </div>
                    </div>
                    <div className="w-full h-[400px] bg-cover rounded-2xl shadow-lg" style={{ backgroundImage: "url('/people/p3.jpg')" }}>
                        <div className="h-full flex p-2">
                            <div className="leading-none p-4 rounded-2xl mt-auto mb-2 text-4xl font-semibold tracking-tight text-white border border-primary-500 w-full bg-opacity-80 backdrop-filter backdrop-blur-sm bg-primary-800 opacity-90">
                                <div className="">
                                    Create<br />
                                    color scales<br />
                                    in seconds.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" my-20">
                <div className="grid md:grid-cols-3 gap-5">
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-1 shadow-md bg-success text-success-accent">button</button>
                        <button className="px-5 py-1 shadow-md text-success bg-success-accent">button</button>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-1 shadow-md bg-warning text-warning-accent">button</button>
                        <button className="px-5 py-1 shadow-md text-warning bg-warning-accent">button</button>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-1 shadow-md bg-info text-info-accent">button</button>
                        <button className="px-5 py-1 shadow-md text-info bg-info-accent">button</button>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-1 shadow-md bg-important text-important-accent">button</button>
                        <button className="px-5 py-1 shadow-md text-important bg-important-accent">button</button>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-1 shadow-md bg-danger text-danger-accent">button</button>
                        <button className="px-5 py-1 shadow-md text-danger bg-danger-accent">button</button>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-1 shadow-md bg-neutral text-neutral-accent">button</button>
                        <button className="px-5 py-1 shadow-md text-neutral bg-neutral-accent">button</button>
                    </div>
                </div>
                <div className="flex items-center justify-center my-5">
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-1 shadow-md bg-primary-light text-primary-dark">button</button>
                        <button className="px-5 py-1 shadow-md text-primary-light bg-primary-dark">button</button>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center gap-5">
                <Card className={'text-info-accent bg-info'} iClass='bg-info-accent'>solomon</Card>
                <Card className={'text-warning-accent bg-warning'} iClass='bg-warning-accent'>solomon</Card>
                <Card className={'text-danger-accent bg-danger'} iClass='bg-danger-accent'>solomon</Card>
                <Card className={'text-neutral-accent bg-neutral'} iClass='bg-neutral-accent'>solomon</Card>
                <Card className={'text-success-accent bg-success'} iClass='bg-success-accent'>solomon</Card>
            </section>
            <section className="flex items-center justify-center gap-5 mt-10 py-10">
                <div className="spread-bar relative overflow-hidden w-[200px] h-[200px] border-2 border-success-accent rounded-2xl shadow-2xl">
                    <p className="text-center text-fade">animation fade</p>
                </div>
                <div className="w-[200px] h-[200px] border-2 border-warning-accent rounded-2xl shadow-2xl"></div>
                <div className="w-[200px] h-[200px] border-2 border-info-accent rounded-2xl shadow-2xl"></div>
            </section>
        </main>
    );
}
