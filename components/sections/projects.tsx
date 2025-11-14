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
        <div className={`text-ctp-blue ${isMobile ? "text-xs" : "text-sm"} mt-1`}><a href="https://github.com/MELLOWBRICKS/CA-Website.git">GitHub Link</a></div>
      </div>

      <div className="border-l-2 border-ctp-green pl-4 py-1">
        <div className="text-ctp-green font-bold">Computer Association ChatBot</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>Groq LLM, Python, GitHub Actions</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Built an intelligent ChatBot using Groq LLM and Python.</li>
            <li>Deployed using CI/CD pipelines via GitHub Actions on the render platform.</li>
          </ul>
        </div>
        <div className={`text-ctp-blue ${isMobile ? "text-xs" : "text-sm"} mt-1`}><a href="https://ca-chatbot-dof8.onrender.com/">CA-ChatBot</a></div>
      </div>

      <div className="border-l-2 border-ctp-green pl-4 py-1">
        <div className="text-ctp-green font-bold">Infrastructure Automation with Terraform</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>Terraform, AWS, VPC, EC2, ECS, RDS, ALB</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Built a highly available AWS infrastructure using Terraform, including VPC, EC2, ECS, RDS, and ALB across multiple Availability Zones for fault tolerance.</li>
            <li>Secured application and database tiers with private subnets, NAT, and security groups, ensuring least-privilege access and enabled auto-scaling.</li>
          </ul>
        </div>
        <div className={`text-ctp-blue ${isMobile ? "text-xs" : "text-sm"} mt-1`}><a href="https://github.com/MELLOWBRICKS/AWS-Infra-with-Terraform">GitHub Link</a></div>
      </div>

      <div className="border-l-2 border-ctp-green pl-4 py-1">
        <div className="text-ctp-green font-bold">Ansible Node.js Deployment</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>Ansible, Node.js, Ubuntu, IaC</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Systematized provisioning and configuration of Ubuntu with Ansible, enabling consistent and repeatable development environments.</li>
            <li>Deployed IaC-driven delivery for a Node.js service using Ansible on Ubuntu, enabling consistent builds and predictable deployments.</li>
          </ul>
        </div>
        <div className={`text-ctp-blue ${isMobile ? "text-xs" : "text-sm"} mt-1`}><a href="https://github.com/MELLOWBRICKS/Vagrant-Ansible-Node.js-Deployment">GitHub Link</a></div>
      </div>

      <div className="border-l-2 border-ctp-green pl-4 py-1">
        <div className="text-ctp-green font-bold">Jenkins Automated Deployment</div>
        <div className={`text-ctp-subtext0 ${isMobile ? "text-xs" : "text-sm"}`}>Jenkins, Java, CI/CD, Nexus, EC2</div>
        <div className={`text-ctp-text mt-1 ${textSize}`}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Orchestrated a CI/CD pipeline using Jenkins for Java applications, integrating secure credential management, artifact deployment to Nexus, and SSH-based remote execution on EC2 with post-build triggers.</li>
            <li>Reduced deployment time from 15 minutes to under 2 minutes through zero-touch automation, significantly improving efficiency and reliability.</li>
          </ul>
        </div>
        <div className={`text-ctp-blue ${isMobile ? "text-xs" : "text-sm"} mt-1`}><a href="https://github.com/MELLOWBRICKS/Jenkins-Automated-Deployment">GitHub Link</a></div>
      </div>

    </div>
  )
}
