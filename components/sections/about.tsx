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
          Hi there! I&apos;m Melbin Kuriakose, a Computer Science graduate with completed hands-on DevOps training. Skilled in Linux system administration, cloud platforms (AWS, GCP), infrastructure automation using Terraform and Ansible, containerization with Docker and Kubernetes, and CI/CD pipeline implementation using Jenkins and GitHub.
        </p>
        <p className="mt-2">
          Proficient in scripting with Bash and Python. Seeking Linux System Administrator role to apply cloud and automation expertise in enterprise environments. Knowledgeable in cloud security practices and eager to join a cloud-native team to optimize scalability and automation.
        </p>
        <p className="mt-2">My skills include:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Languages</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Python</li>
              <li>Bash</li>
              <li>Shell Scripting</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Cloud & Infrastructure</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>AWS, GCP</li>
              <li>Terraform</li>
              <li>Ansible</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">CI/CD & Automation</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Jenkins</li>
              <li>GitHub</li>
              <li>n8n Automation</li>
              <li>MCP Servers</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Containerization</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Monitoring Tools</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Prometheus</li>
              <li>Grafana</li>
              <li>Alertmanager</li>
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
              <li>Linux</li>
            </ul>
          </div>
          <div className="bg-ctp-surface0 p-2 rounded-xl">
            <h3 className="text-ctp-blue font-bold">Soft Skills</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Leadership</li>
              <li>Creative Thinking</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
