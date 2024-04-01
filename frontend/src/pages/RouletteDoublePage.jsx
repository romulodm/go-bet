import BetsMadedOnRouletteGame from "../components/roulette/BetsMadedOnRouletteGame";
import Roulette from "../components/roulette/Roullete";

export default function RouletteDoublePage() {
    return (
        <div>
            <div className="flex flex-col w-full items-center justify-center px-5">
                <Roulette/>
                <BetsMadedOnRouletteGame/>
            </div>

        </div>
    )
}