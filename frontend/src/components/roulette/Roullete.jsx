import "./styles/roulette-double.css"
import { useState, useEffect } from "react";

export default function Roulette() {
    useEffect(() => {
        const betButton = document.getElementById('roulette-double-bet-button');
        const wheel = document.querySelector('.roulette-container .wheel');
    
        function setupWheel() {
          let row = "";
          
          row += "<div class='row'>";
          row += "  <div class='card red'>1<\/div>";
          row += "  <div class='card black'>14<\/div>";
          row += "  <div class='card red'>2<\/div>";
          row += "  <div class='card black'>13<\/div>";
          row += "  <div class='card red'>3<\/div>";
          row += "  <div class='card black'>12<\/div>";
          row += "  <div class='card red'>4<\/div>";
          row += "  <div class='card green'>0<\/div>";
          row += "  <div class='card black'>11<\/div>";
          row += "  <div class='card red'>5<\/div>";
          row += "  <div class='card black'>10<\/div>";
          row += "  <div class='card red'>6<\/div>";
          row += "  <div class='card black'>9<\/div>";
          row += "  <div class='card red'>7<\/div>";
          row += "  <div class='card black'>8<\/div>";
          row += "<\/div>";
          
          for (let x = 0; x < 29; x++) {
            wheel.insertAdjacentHTML('beforeend', row);
          }
        }
    
        function spinWheel(roll) {
          const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
          const position = order.indexOf(roll);
        
          const rows = 12;
          const card = 75 + 3 * 2;
          const landingPosition = (rows * 15 * card) + (position * card);
        
          const randomize =  Math.floor(Math.random() * 70) - 5; // variation
          const finalPosition = landingPosition + randomize;
        
          const object = {
            x: Math.floor(Math.random() * 50) / 100,
            y: Math.floor(Math.random() * 20) / 100,
          };
        
          wheel.style.transitionTimingFunction = `cubic-bezier(0,${object.x},${object.y},1)`;
          wheel.style.transitionDuration = '6s';
          wheel.style.transform = `translate3d(-${finalPosition}px, 0px, 0px)`;
        
          setTimeout(() => {
            wheel.style.transitionTimingFunction = '';
            wheel.style.transitionDuration = '';
            const resetTo = -(position * card + randomize);
            wheel.style.transform = `translate3d(${resetTo}px, 0px, 0px)`;
          }, 6 * 1000);
        }
    
        setupWheel();
    
        betButton.addEventListener('click', function() {
          const num = Math.floor(Math.random() * 15);
          console.log(num)
          spinWheel(num);
        });
    
        // Limpeza de eventos quando o componente é desmontado
        return () => {
          betButton.removeEventListener('click');
        };
      }, []); // useEffect será executado apenas uma vez após a montagem inicial


    return (
        <div className="flex w-full items-center justify-center p-5">
            <div id="roulette-double-game" className="flex flex-col items-center justify-center rounded-md p-3 w-full max-w-6xl">
                    
                <div className="roulette-container p-4 rounded-md">
                    <div className="next-move rounded-md mb-4">Próximo giro em: 10:00</div>
                    <div className="selector"></div>
                    <div className="wheel"></div>
                </div>

                <div className="w-full flex flex-col mt-4">
                    <div className="w-full flex flex-row mb-5 gap-4">
                        <input type="text" pattern="[0-9]*" inputMode="numeric" id="input-amount-bet-roulette-double" className="w-4/12 text-gray-200 sm:text-sm rounded-md block p-2.5 focus:outline-none" placeholder="Amount"/>
                        
                        <button className="multiply-amount w-3/12 rounded-md">1/2</button>
                        <button className="multiply-amount w-3/12 rounded-md">2x</button>
                        <button className="multiply-amount w-3/12 rounded-md">5x</button>
                    
                    </div>

                    <div className="text-white mb-2">
                        Select the color:
                    </div>

                    <div className="w-full flex justify-center text-white gap-4"> {/* Corrigido 'justify-centertext-white' para 'justify-center text-white' */}
                        <button className="select-amount-button red w-4/12 rounded-md">2x</button>
                        <button className="select-amount-button green w-4/12 rounded-md">14x</button>
                        <button className="select-amount-button black w-4/12 rounded-md">2x</button>
                    </div>
                    
                    <button id="roulette-double-bet-button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold mt-4 p-4 rounded-md">Bet</button>

                </div>
            </div>
        </div>
    )
}