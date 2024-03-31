import "./styles/roulette-double.css"

export default function BetsMadedOnRouletteGame() {
    return (
        <div className="flex w-full items-center justify-center px-5">
            <div id="bets-container" className="flex rounded-md p-3 w-full max-w-6xl">
                <div className="w-full flex flex-col lg:flex-row gap-3">
                    <div className="w-full lg:w-4/12 border rounded-md p-4 border-gray">
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-white font-semibold">Bets on red</p>
                            <div className="red-bet-color rounded-md p-1 w-14">
                                <div className="flex text-white p-2 justify-center font-semibold">2x</div>
                            </div>
                        </div>
                        <div className="border border-gray mt-5 mb-5"></div>
                        <div className="flex items-center text-white font-semibold justify-between">
                            <p>Total bets:</p>
                            <div>G$ 00,00</div>
                        </div>

                        <div className="user-amount w-full font-semibold flex items-center rounded-md mt-4 mb-4 text-white justify-between px-1 py-2">
                            <p>User</p>
                            <p>Amount</p>
                        </div>

                        <div id="users-bet" className="flex flex-col text-white justify-between px-1 gap-y-3">
                            <div className="users-bet-user">
                                <div>romulodm</div>
                                <div className="font-semibold">G$ 2,00</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 border rounded-md p-4 border-gray">
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-white font-semibold">Bets on green</p>
                            <div className="green-bet-color rounded-md p-1 w-14">
                                <div className="flex text-white p-2 justify-center font-semibold">14x</div>
                            </div>
                        </div>
                        <div className="border border-gray mt-5 mb-5"></div>
                        <div className="flex items-center text-white font-semibold justify-between">
                            <p>Total bets:</p>
                            <div>G$ 00,00</div>
                        </div>

                        <div className="user-amount w-full font-semibold flex items-center rounded-md mt-4 mb-4 text-white justify-between py-2 px-1">
                            <p>User</p>
                            <p>Amount</p>
                        </div>

                        <div id="users-bet" className="flex flex-col text-white justify-between px-1 gap-y-3">
                            <div className="users-bet-user">
                                <div>romulodm</div>
                                <div className="font-semibold">G$ 2,00</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 border rounded-md p-4 border-gray">
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-white font-semibold">Bets on black</p>
                            <div className="black-bet-color rounded-md p-1 w-14">
                                <div className="flex text-white p-2 justify-center font-semibold">2x</div>
                            </div>
                        </div>
                        <div className="border border-1 border-gray mt-5 mb-5"></div>
                        <div className="flex items-center text-white font-semibold justify-between">
                            <p>Total bets:</p>
                            <div>G$ 00,00</div>
                        </div>

                        <div className="user-amount w-full font-semibold flex items-center rounded-md mt-4 mb-4 text-white justify-between px-1 py-2">
                            <p>User</p>
                            <p>Amount</p>
                        </div>

                        <div id="users-bet" className="flex flex-col text-white justify-between px-1 gap-y-3">
                            <div className="users-bet-user">
                                <div>romulodm</div>
                                <div className="font-semibold">G$ 2,00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}