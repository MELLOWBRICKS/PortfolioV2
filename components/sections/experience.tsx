"use client"

import type React from "react"
import { useMobile } from "@/hooks/use-mobile"

export const ExperienceSection: React.FC = () => {
  const isMobile = useMobile()
  const textSize = isMobile ? "text-sm" : ""

  return (
    <div className="space-y-4">
      <div className="text-ctp-mauve font-bold text-lg">Experience</div>

      <div className="border-l-2 border-ctp-peach pl-4 py-1">
        <div className="text-ctp-peach font-bold">Graphics Team Member / E-Publicity Head (College Clubs)</div>
        <div className={`text-ctp-text ${textSize}`}>PCACS, Navi Mumbai</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>December 2022 – April 2025</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Boosted Alegria Techfest participation by 20% through social media and content strategies.</li>
            <li>
              Designed promotional media operations, maintaining a 100% on-time delivery and quality for all digital
              promotions.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-l-2 border-ctp-peach pl-4 py-1">
        <div className="text-ctp-peach font-bold">Web Designer/Developer (Internship)</div>
        <div className={`text-ctp-text ${textSize}`}>Healing Up, Remote</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>April 2024 – July 2024</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Delivered web designs on Figma, meeting and maintaining a 45-day project cycle with HTML and CSS integration.
            </li>
            <li>
              Led a team of developers by encouraging collaboration, improving the quality of the product and achieving a project completion rate of 100%.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-l-2 border-ctp-peach pl-4 py-1">
        <div className="text-ctp-peach font-bold">Frontend Developer (Internship)</div>
        <div className={`text-ctp-text ${textSize}`}>KS Softech Private Limited, Navi Mumbai</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>July 2024 – August 2024</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Collaborated with UX/UI designers to implement responsive design principles, leading to a seamless user
              experience across devices and resulting in a 20% increase in traffic engagement.
            </li>
            <li>
              Developed responsive user interfaces using Shopify, improving user engagement by approximately 25% and
              contributing to faster prototyping and deployment cycles.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-l-2 border-ctp-peach pl-4 py-1">
        <div className="text-ctp-peach font-bold">Linux Admin Intern</div>
        <div className={`text-ctp-text ${textSize}`}>CoreXtech IT Services Pvt. Ltd, Remote</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>April 2025 – July 2025</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Practiced essential system admin tasks like process management, system monitoring, log inspection, and cron job scheduling.
            </li>
            <li>
              Created and deployed mini-project environments that simulate real-world IT infrastructure scenarios using shell scripting and system configuration tools.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
