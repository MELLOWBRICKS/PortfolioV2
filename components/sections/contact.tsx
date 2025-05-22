// "use client"

// import type React from "react"
// import { useState } from "react"
// import { useMobile } from "@/hooks/use-mobile"

// export const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const isMobile = useMobile()
//   const textSize = isMobile ? "text-sm" : ""

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)

//       // Reset form after showing success message
//       setTimeout(() => {
//         setFormData({ name: "", email: "", message: "" })
//         setIsSubmitted(false)
//       }, 3000)
//     }, 1000)
//   }

//   return (
//     <div className="space-y-4">
//       <div className="text-ctp-mauve font-bold text-lg">Contact Me</div>

//       {isSubmitted ? (
//         <div className="bg-ctp-green/20 border border-ctp-green rounded-xl p-3 text-ctp-text">
//           Thank you for your message! I'll get back to you soon.
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-ctp-blue mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className={`w-full bg-ctp-surface0 border border-ctp-surface2 rounded-xl p-2 text-ctp-text focus:outline-none focus:ring-2 focus:ring-ctp-blue ${textSize}`}
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-ctp-blue mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className={`w-full bg-ctp-surface0 border border-ctp-surface2 rounded-xl p-2 text-ctp-text focus:outline-none focus:ring-2 focus:ring-ctp-blue ${textSize}`}
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-ctp-blue mb-1">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows={isMobile ? 3 : 4}
//               className={`w-full bg-ctp-surface0 border border-ctp-surface2 rounded-xl p-2 text-ctp-text focus:outline-none focus:ring-2 focus:ring-ctp-blue ${textSize}`}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`px-4 py-2 rounded-xl bg-ctp-blue text-ctp-base font-medium hover:bg-ctp-blue/90 transition-colors ${
//               isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//             }`}
//           >
//             {isSubmitting ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       )}

//       <div className="pt-2 border-t border-ctp-surface0">
//         <p className={`text-ctp-subtext0 ${textSize}`}>You can also reach me at:</p>
//         <div className="mt-1">
//           <span className="text-ctp-peach">Email:</span>{" "}
//           <a href="mailto:melbinmk04@gmail.com" className={`text-ctp-blue ${textSize}`}>
//             melbinmk04@gmail.com
//           </a>
//         </div>
//         <div className="mt-1">
//           <span className="text-ctp-peach">Phone:</span>{" "}
//           <a href="tel:+918976345285" className={`text-ctp-blue ${textSize}`}>
//             +91 8976345285
//           </a>
//         </div>
//         <div className="mt-1">
//           <span className="text-ctp-peach">Website:</span>{" "}
//           <a
//             href="https://mellowbricks.co.in"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`text-ctp-blue ${textSize}`}
//           >
//             mellowbricks.co.in
//           </a>
//         </div>
//         <div className="mt-1">
//           <span className="text-ctp-peach">Location:</span>{" "}
//           <span className={`text-ctp-text ${textSize}`}>Thane, Maharashtra, India</span>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isMobile = useMobile()
  const textSize = isMobile ? "text-sm" : ""

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xqakvzrb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        // Optional: hide success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        alert("Something went wrong. Please try again later.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Failed to send message. Please check your network and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-ctp-mauve font-bold text-lg">Contact Me</div>

      {isSubmitted ? (
        <div className="bg-ctp-green/20 border border-ctp-green rounded-xl p-3 text-ctp-text">
          Thank you for your message! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-ctp-blue mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full bg-ctp-surface0 border border-ctp-surface2 rounded-xl p-2 text-ctp-text focus:outline-none focus:ring-2 focus:ring-ctp-blue ${textSize}`}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-ctp-blue mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full bg-ctp-surface0 border border-ctp-surface2 rounded-xl p-2 text-ctp-text focus:outline-none focus:ring-2 focus:ring-ctp-blue ${textSize}`}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-ctp-blue mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={isMobile ? 3 : 4}
              className={`w-full bg-ctp-surface0 border border-ctp-surface2 rounded-xl p-2 text-ctp-text focus:outline-none focus:ring-2 focus:ring-ctp-blue ${textSize}`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-xl bg-ctp-blue text-ctp-base font-medium hover:bg-ctp-blue/90 transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      <div className="pt-2 border-t border-ctp-surface0">
        <p className={`text-ctp-subtext0 ${textSize}`}>You can also reach me at:</p>
        <div className="mt-1">
          <span className="text-ctp-peach">Email:</span>{" "}
          <a href="mailto:melbinmk04@gmail.com" className={`text-ctp-blue ${textSize}`}>
            melbinmk04@gmail.com
          </a>
        </div>
        <div className="mt-1">
          <span className="text-ctp-peach">Phone:</span>{" "}
          <a href="tel:+918976345285" className={`text-ctp-blue ${textSize}`}>
            +91 8976345285
          </a>
        </div>
        <div className="mt-1">
          <span className="text-ctp-peach">Website:</span>{" "}
          <a
            href="https://mellowbricks.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-ctp-blue ${textSize}`}
          >
            mellowbricks.co.in
          </a>
        </div>
        <div className="mt-1">
          <span className="text-ctp-peach">Location:</span>{" "}
          <span className={`text-ctp-text ${textSize}`}>Thane, Maharashtra, India</span>
        </div>
      </div>
    </div>
  )
}
