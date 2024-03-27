import "./styles/roulette-double.css"

export default function BetsMadedOnRouletteGame() {
    return (
        <div class="flex w-full items-center justify-center px-5">
            <div id="bets-container" class="flex rounded-md p-3 w-full max-w-6xl">
                <div class="w-full flex flex-col lg:flex-row gap-3">
                    <div class="w-full lg:w-4/12 border rounded-md p-4 border-gray">
                        <div class="flex flex-row items-center justify-between">
                            <p class="text-white font-semibold">Bets on red</p>
                            <div class="red-bet-color rounded-md p-1 w-14">
                                <div class="flex text-white p-2 justify-center font-semibold">2x</div>
                            </div>
                        </div>
                        <div class="border border-gray mt-5 mb-5"></div>
                        <div class="flex items-center text-white font-semibold justify-between">
                            <p>Total bets:</p>
                            <div>G$ 00,00</div>
                        </div>

                        <div class="user-amount w-full font-semibold flex items-center rounded-md mt-4 mb-4 text-white justify-between px-1 py-2">
                            <p>User</p>
                            <p>Amount</p>
                        </div>

                        <div id="users-bet" class="flex flex-col text-white justify-between px-1 gap-y-3">
                            <div class="users-bet-user">
                                <div>romulodm</div>
                                <div class="font-semibold">G$ 2,00</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 border rounded-md p-4 border-gray">
                        <div class="flex flex-row items-center justify-between">
                            <p class="text-white font-semibold">Bets on black</p>
                            <div class="black-bet-color rounded-md p-1 w-14">
                                <div class="flex text-white p-2 justify-center font-semibold">14x</div>
                            </div>
                        </div>
                        <div class="border border-gray mt-5 mb-5"></div>
                        <div class="flex items-center text-white font-semibold justify-between">
                            <p>Total bets:</p>
                            <div>G$ 00,00</div>
                        </div>

                        <div class="user-amount w-full font-semibold flex items-center rounded-md mt-4 mb-4 text-white justify-between px-1 py-2">
                            <p>User</p>
                            <p>Amount</p>
                        </div>

                        <div id="users-bet" class="flex flex-col text-white justify-between px-1 gap-y-3">
                            <div class="users-bet-user">
                                <div>romulodm</div>
                                <div class="font-semibold">G$ 2,00</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 border rounded-md p-4 border-gray">
                        <div class="flex flex-row items-center justify-between">
                            <p class="text-white font-semibold">Bets on green</p>
                            <div class="green-bet-color rounded-md p-1 w-14">
                                <div class="flex text-white p-2 justify-center font-semibold">2x</div>
                            </div>
                        </div>
                        <div class="border border-gray mt-5 mb-5"></div>
                        <div class="flex items-center text-white font-semibold justify-between">
                            <p>Total bets:</p>
                            <div>G$ 00,00</div>
                        </div>

                        <div class="user-amount w-full font-semibold flex items-center rounded-md mt-4 mb-4 text-white justify-between py-2 px-1">
                            <p>User</p>
                            <p>Amount</p>
                        </div>

                        <div id="users-bet" class="flex flex-col text-white justify-between px-1 gap-y-3">
                            <div class="users-bet-user">
                                <div>romulodm</div>
                                <div class="font-semibold">G$ 2,00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}