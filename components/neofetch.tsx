import type React from "react"

const Neofetch: React.FC = () => {
  return (
    <div className="flex">
      <div className="mr-6 text-ctp-blue">
        <pre className="leading-tight">
          {`
         /\\
        /  \\
       /\\   \\
      /  __  \\
     /  (  )  \\
    / __|  |__ \\
   /.\'        \`.\\
`}
        </pre>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span className="text-ctp-mauve font-bold mr-2">melbin@portfolio</span>
          <span className="text-ctp-text">-----------------------</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">OS:</span>
          <span className="text-ctp-text">Portfolio Linux</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">Kernel:</span>
          <span className="text-ctp-text">6.5.0-portfolio</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">Uptime:</span>
          <span className="text-ctp-text">Just now</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">Packages:</span>
          <span className="text-ctp-text">42 (npm)</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">Shell:</span>
          <span className="text-ctp-text">portfolio-sh 1.0.0</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">DE:</span>
          <span className="text-ctp-text">React 18.0</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">WM:</span>
          <span className="text-ctp-text">Next.js</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">Terminal:</span>
          <span className="text-ctp-text">portfolio-term</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">Location:</span>
          <span className="text-ctp-text">Thane, Maharashtra</span>
        </div>
        <div className="flex">
          <span className="text-ctp-yellow font-bold mr-2 w-20">Contact:</span>
          <span className="text-ctp-text">melbinmk04@gmail.com</span>
        </div>
        <div className="mt-2">
          <span className="text-ctp-red">●</span>
          <span className="text-ctp-peach">●</span>
          <span className="text-ctp-yellow">●</span>
          <span className="text-ctp-green">●</span>
          <span className="text-ctp-blue">●</span>
          <span className="text-ctp-mauve">●</span>
        </div>
      </div>
    </div>
  )
}

export default Neofetch
