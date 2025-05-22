"use client"

import type React from "react"
import { useMobile } from "@/hooks/use-mobile"

export const EducationSection: React.FC = () => {
  const isMobile = useMobile()
  const textSize = isMobile ? "text-sm" : ""

  return (
    <div className="space-y-4">
      <div className="text-ctp-mauve font-bold text-lg">Education</div>

      <div className="border-l-2 border-ctp-blue pl-4 py-1">
        <div className="text-ctp-blue font-bold">Postgraduate Diploma in DevOps & Cloud Computing</div>
        <div className={`text-ctp-text ${textSize}`}>DevOps Institute Mumbai, Thane, Maharashtra</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>April 2025 – Present</div>
      </div>

      <div className="border-l-2 border-ctp-blue pl-4 py-1">
        <div className="text-ctp-blue font-bold">Bachelor of Science in Computer Science</div>
        <div className={`text-ctp-text ${textSize}`}>Pillai College of Arts, Commerce and Science, Navi Mumbai</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>August 2022 – April 2025</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>CGPA: 8.30</div>
      </div>

      <div className="border-l-2 border-ctp-blue pl-4 py-1">
        <div className="text-ctp-blue font-bold">Certifications</div>
        <ul className={`list-disc pl-5 mt-1 space-y-1 text-ctp-text ${textSize}`}>
          <li>The Web Developer Bootcamp (Udemy) - September 2024</li>
          <li>Accenture: Data Analytics and Visualization Job Simulation (Forage) - April 2024</li>
          <li>Complete Python Developer: Zero to Mastery (Udemy) - October 2023</li>
        </ul>
      </div>
    </div>
  )
}
