export default function TechnicalDiagram({ variant = 0 }: { variant?: number }) {
  return <svg viewBox="0 0 320 180" className="technical-diagram" fill="none" aria-hidden="true">
    <path d="M30 145H290M60 30V155M260 30V155" stroke="currentColor" strokeOpacity=".15" strokeDasharray="2 5" />
    {variant % 3 === 0 ? <>
      {[0, 1, 2].map(i => <g key={i} transform={"translate(0 " + (38 - i * 26) + ")"}><path d="M80 80L160 40L240 80L160 120Z" fill="var(--panel)" stroke="currentColor" /><path d="M80 80V94L160 134L240 94V80M160 120V134" stroke="currentColor" /><path d="M102 80L160 51L218 80L160 109Z" fill="currentColor" opacity={i === 2 ? .25 : .07} /></g>)}
    </> : variant % 3 === 1 ? <>
      <path d="M75 90H245M160 50V130" stroke="currentColor" strokeDasharray="4 5" />
      {[[45,65],[135,25],[135,105],[225,65]].map(([x,y],i)=><g key={i} transform={"translate("+x+" "+y+")"}><rect width="50" height="50" fill="var(--panel)" stroke="currentColor" /><rect x="10" y="10" width="30" height="30" fill="currentColor" opacity={i === 1 ? .35 : .12} /><path d="M18 25H32M25 18V32" stroke="currentColor" /></g>)}
    </> : <>
      {[0,1,2,3,4].map(i=><g key={i} transform={"translate("+(75+i*36)+" 0)"}><path d={"M0 130V"+(95-i*15)+"H22V130Z"} fill="currentColor" opacity={.12+i*.09} /><path d={"M0 "+(95-i*15)+"H22"} stroke="currentColor" /></g>)}
      <path d="M55 135H270M55 135V35" stroke="currentColor" strokeOpacity=".5" />
    </>}
    <rect x="25" y="25" width="4" height="4" fill="currentColor" /><rect x="291" y="151" width="4" height="4" fill="currentColor" />
  </svg>;
}

