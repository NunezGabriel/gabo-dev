"use client";

import Link from "next/link";
import GradientText from "./GradientText";

export default function TerminalContactSection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-32">
      <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl p-6 md:p-8 font-mono text-sm md:text-xl">
        {/* Header fake terminal */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-[#ff5500]" />
          <span className="w-3 h-3 rounded-full bg-[#ffb300]" />
          <span className="w-3 h-3 rounded-full bg-[#e63d2f]" />
          <span className="ml-3 text-gray-500">terminal — contact</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <div className="text-gray-300 leading-relaxed mb-8">
              <span className="text-[#ff5500]">&gt;</span> If you'd like to talk
              about work or just say hello, feel free to send me a message.
            </div>

            <pre className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
              {`┌──────────────────────────────────────────────┐
│ Available contact options                    │
├──────────────────────────────────────────────┤
│ [1] Email                                    │
│ [2] GitHub                                   │
│ [3] LinkedIn                                 │
└──────────────────────────────────────────────┘`}
            </pre>

            <div className="flex flex-col gap-3">
              <Link
                href="mailto:gabriel.nunez.arenas@gmail.com"
                className="text-gray-300 hover:text-[#ff5500] transition"
              >
                <span className="text-[#ff5500]">&gt;</span> Email →{" "}
                <span className="text-[#ffb300]">
                  gabriel.nunez.arenas@gmail.com
                </span>
              </Link>

              <Link
                href="https://github.com/NunezGabriel"
                target="_blank"
                className="text-gray-300 hover:text-[#e63d2f] transition"
              >
                <span className="text-[#ff5500]">&gt;</span> GitHub →{" "}
                <span className="text-[#e63d2f]">github.com/NunezGabriel</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/gabriel-nu%C3%B1ez-arenas/"
                target="_blank"
                className="text-gray-300 hover:text-[#ffb300] transition"
              >
                <span className="text-[#ff5500]">&gt;</span> LinkedIn →{" "}
                <span className="text-[#ffb300]">
                  linkedin.com/in/gabriel-nuñez-arenas
                </span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <GradientText
              colors={["#ff5500", "#e63d2f", "#ffb300", "#e63d2f", "#ff5500"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[0.5rem] md:text-xs leading-tight whitespace-pre"
            >
              {`                                     
              
                                      ▓▓▓▓▓▓▓▄     
                                    #▓▓▓▓▓▓▓▓▓    
                      ¿╓╔###║###M╔  ▓▓▓▓▓▓▓▓▓▓    
                    ╙║║║║║║║║║║║║║░ └▓▓▓▓▓▓▓▓┘    
               ╔╠░    ║║║║║║║║║║║║║N, └╙╩╩╙└      
             ╔╠╠╠╠╠,   ╚║║║║║║║║║║║║║║M╔╓╓╓#N,    
           ╓╠╠╠╠╠╠╠╠∩   ╙╙      └╙╙║║║║║║║║║║║N   
          #╠╠╠╠╠╠╠╠╠╚                ╙║║║║║║║║║║  
         ╔╠╠╠╠╠╠╠╠╚                    ╙║║║║║║║║║ 
  .╓╔╔╓,  ╙╠╠╠╠╠╠╚                      ╙║║║║║║║║Γ
.║║║║║║║║,  ╠╠╠╠╠                        ║║║║║║║║║
║║║║║║║║║║  ╠╠╠╠░                                 
╚║║║║║║║║╠  ╠╠╠╠░                        ╓»»»»»»»»
 ╙╚║║║║╚╙  #╠╠╠╠╠∩                       ▓▓▓▓▓▓▓▓▒
         ╔╠╠╠╠╠╠╠╠,                    \\▓▓▓▓▓▓▓▓▓ 
         \`╠╠╠╠╠╠╠╠╠∩                  #▓▓▓▓▓▓▓▓▓Ñ 
           ╠╠╠╠╠╠╠╠╠╠              ╓@▓▓▓▓▓▓▓▓▓▓╜  
            ╙╠╠╠╠╠╠╚   ┌▓▓₧MmmM₧▓▓▓▓▓▓▓▓▓▓▓▓▓▓    
              ╙╠╠╠∩   ╓▓▓▓▓▓▓▓▓▓▓▓▓▓▀░      └     
                \`    #▓▓▓▓▓▓▓▓▓▓▓▓▓  ╓∩╠╠╠╠∩╔     
                    "▀▓▓▓▓▓▓▓▓▓▓▓▓  #╠╠╠╠╠╠╠╠░    
                          └└└└└└    ╠╠╠╠╠╠╠╠╠╠    
                                     ╚╠╠╠╠╠╠╠     
                                       └╙╙╙       

           [Ubuntu 24.04 LTS]             
        I use Linux too btw...`}
            </GradientText>
          </div>
        </div>
      </div>
    </section>
  );
}

//             <GradientText
//               colors={["#FFD700", "#FDB913", "#FFD700", "#FDB913", "#FFD700"]}
//               animationSpeed={6}
//               showBorder={false}
//               className="text-[0.5rem] md:text-xs leading-tight whitespace-pre"
//             >
//               {`                .88888888:.
//                88888888.88888.
//              .8888888888888888.
//              888888888888888888
//              88' _\\\`88'_  \\\`888
//              88 88 88 88  88888
//              88_88_::_88_:88888
//              88:::,::,:::::8888
//              88\\\`:::::::::'\\\`888
//             .88  \\\`::::'    8:88.
//            8888            \\\`8:888.
//          .8888'             \\\`888888.
//         .8888:..  .::.  ...:'8888888:.
//        .8888.'     :'     \\\`'::\\\`88:888
//       .8888        '         \\\`.888:8888.
//      888:8         .           888:88888
//    .888:88        .:           888:88888:
//    8888888.       ::           88:888888
//    \\\`.::.888.      ::          .88888888
//   .::::::.888.    ::         :::\\\`8888'.:.
//  ::::::::::.888   '         .::::::::::::
//  ::::::::::::.8    '      .:8::::::::::::.
// .::::::::::::::.        .:888:::::::::::::
// :::::::::::::::88:.__..:88888:::::::::::'
//  \\\`'.:::::::::::88888888888.88:::::::::'
//        \\\`':::_:' -- '' -'-' \\\`':_::::'

//            [Linux Kernel 6.x]
//         I use Arch btw...`}
//             </GradientText>
