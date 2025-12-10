import React, { useState } from "react";
import CardPrice from "./CardPrice";

const Pricing = () => {
    const [activeCard, setActiveCard] = useState<string>("Growth"); // default active

    return (
        <div className="w-full py-20 mt-20 bg-black">
            <div className="px-6 mx-auto ">
                <h1 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl">
                    Pricing that grows with you
                </h1>

                <p className="max-w-2xl mx-auto text-center text-white mb-14">
                    Choose an affordable plan that’s packed with the best features for
                    engaging your audience, creating customer loyalty, and driving sales.
                </p>
                

                <div className="mt-16 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <tbody>
                            <tr className="">
                                <td className="w-1/4 py-3"></td>
                                <td className="px-3 text-center">
                                    <CardPrice
                                        title="Starter"
                                        price="19"
                                        highlighted={activeCard === "Starter"}
                                        onClick={() => setActiveCard("Starter")}
                                    />
                                </td>
                                <td className="px-3 text-center ">
                                    <CardPrice
                                        title="Growth"
                                        price="49"
                                        highlighted={activeCard === "Growth"}
                                        onClick={() => setActiveCard("Growth")}
                                    />
                                </td>
                                <td className="px-3 text-center ">
                                    <CardPrice
                                        title="Scale"
                                        price="99"
                                        highlighted={activeCard === "Scale"}
                                        onClick={() => setActiveCard("Scale")}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 font-semibold text-cyan-500" colSpan={4}>
                                    Features
                                </td>
                            </tr>

                            <tr className="border-t text-cyan-500">
                                <td className="w-1/4 py-3">Edge content delivery</td>
                                <td className="text-center">✔</td>
                                <td className="text-center">✔</td>
                                <td className="text-center">✔</td>
                            </tr>

                            <tr className="border-t text-cyan-500">
                                <td className="py-3">Custom domains</td>
                                <td className="text-center">1</td>
                                <td className="text-center">3</td>
                                <td className="text-center">Unlimited</td>
                            </tr>

                            <tr className="border-t text-cyan-500">
                                <td className="py-3">Team members</td>
                                <td className="text-center">3</td>
                                <td className="text-center">20</td>
                                <td className="text-center">Unlimited</td>
                            </tr>

                            <tr className="border-t text-cyan-500">
                                <td className="py-3">Single sign-on (SSO)</td>
                                <td className="text-center ">—</td>
                                <td className="text-center ">—</td>
                                <td className="text-center">✔</td>
                            </tr>

                            <tr>
                                <td className="py-6 font-semibold text-cyan-500" colSpan={4}>
                                    Reporting
                                </td>
                            </tr>

                            <tr className="border-t text-cyan-500">
                                <td className="py-3">Advanced analytics</td>
                                <td className="text-center">✔</td>
                                <td className="text-center">✔</td>
                                <td className="text-center">✔</td>
                            </tr>

                            <tr className="border-t text-cyan-500">
                                <td className="py-3">Basic reports</td>
                                <td className="text-center ">—</td>
                                <td className="text-center">✔</td>
                                <td className="text-center">✔</td>
                            </tr>
                            <tr className="border-tv text-cyan-500">
                                <td className="py-3">Professional reports</td>
                                <td className="text-center ">—</td>
                                <td className="text-center ">—</td>
                                <td className="text-center">✔</td>
                            </tr>
                            <tr className="border-t text-cyan-500">
                                <td className="py-3">Custom report builder</td>
                                <td className="text-center ">—</td>
                                <td className="text-center ">—</td>
                                <td className="text-center">✔</td>
                            </tr>
                            <tr>
                                <td className="py-6 font-semibold text-cyan-500" colSpan={4}>
                                    Support
                                </td>
                            </tr>
                            <tr className="border-t text-cyan-500">
                                <td className="py-3 text-cyan-500">24/7 online support</td>
                                <td className="text-center text-cyan-500">✔</td>
                                <td className="text-center text-cyan-500">✔</td>
                                <td className="text-center text-cyan-500">✔</td>
                            </tr>
                            <tr className="border-t text-cyan-500">
                                <td className="py-3 text-cyan-500">Quartely workshops</td>
                                <td className="text-center text-cyan-500">—</td>
                                <td className="text-center text-cyan-500">✔</td>
                                <td className="text-center text-cyan-500">✔</td>
                            </tr>
                            <tr className="border-t text-cyan-500">
                                <td className="py-3">Priority phonr support</td>
                                <td className="text-center text-cyan-500">—</td>
                                <td className="text-center text-cyan-500">—</td>
                                <td className="text-center text-cyan-500">✔</td>
                            </tr>
                            <tr className="border-t text-cyan-500">
                                <td className="py-3 text-cyan-500">1:1 onbording tour</td>
                                <td className="text-center text-cyan-500">—</td>
                                <td className="text-center text-cyan-500">—</td>
                                <td className="text-center text-cyan-500">✔</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
