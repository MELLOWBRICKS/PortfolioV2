"use client"

import type React from "react"
import { useMobile } from "@/hooks/use-mobile"

export const ProjectsSection: React.FC = () => {
  const isMobile = useMobile()
  const textSize = isMobile ? "text-sm" : ""

  return (
    <div className="space-y-4">
      <div className="text-ctp-mauve font-bold text-lg">Projects</div>

      <div className="border-l-2 border-ctp-green pl-4 py-1">
        <div className="text-ctp-green font-bold">Computer Association Website</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>Java, MySQL</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Developed a high-performance website using Java and MySQL, resulting in faster load times and increased
              user engagement.
            </li>
            <li>Demonstrated back-end optimization and front-end responsiveness in a production environment.</li>
          </ul>
        </div>
        <div className={`text-ctp-blue ${isMobile ? "text-xs" : "text-sm"} mt-1`}><a href="https://github.com/MELLOWBRICKS/CA-Website">GitHub Link</a></div>
      </div>

      <div className="border-l-2 border-ctp-green pl-4 py-1">
        <div className="text-ctp-green font-bold">Computer Association ChatBot (CA-ChatBot)</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>Groq LLM, Python, GitHub Actions</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Built an intelligent ChatBot using Groq LLM and Python.</li>
            <li>Deployed using CI/CD pipelines via GitHub Actions on the render platform.</li>
          </ul>
        </div>
        <div className={`text-ctp-blue ${isMobile ? "text-xs" : "text-sm"} mt-1`}><a href="https://ca-chatbot-dof8.onrender.com/">Try it out here</a></div>
      </div>

    </div>
  )
}
