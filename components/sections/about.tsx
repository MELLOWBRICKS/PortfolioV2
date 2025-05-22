"use client"

import type React from "react"
import { useMobile } from "@/hooks/use-mobile"

export const AboutSection: React.FC = () => {
  const isMobile = useMobile()

  return (
    <div className="space-y-2">
      <div className="text-ctp-mauve font-bold text-lg">About Me</div>
      <div className={`text-ctp-text ${isMobile ? "text-sm" : ""}`}>
        <p>
          Hi there! I&apos;m Melbin Kuriakose, a Computer Science graduate and DevOps trainee with hands-on experience
          using Linux, AWS (EC2 and S3), GitHub, and CI/CD pipelines.
        </p>
        <p className="mt-2">
          I&apos;m skilled in coding and building production-ready UIs with Figma while employing containerization
          techniques such as Docker to enhance deployment strategies. Knowledgeable in cloud security practices and
          eager to join a cloud-native team to optimize scalability and automation.
        </p>
        <p className="mt-2">My skills include:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Languages</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Shell-Scripting</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Development</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>HTML5</li>
              <li>UI/UX Design</li>
              <li>Shopify</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Tools & Platforms</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Figma, Illustrator</li>
              <li>GitHub, Linux</li>
              <li>Docker, Terraform, Jenkins</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Soft Skills</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Leadership</li>
              <li>Creative Thinking</li>
              <li>Teamwork</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
