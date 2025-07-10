// 'use client'
// import {useState, useEffect} from 'react';
// import {useSearchParams} from "next/navigation";
// import {Button} from "../ui/button";
// import {Input} from "../ui/input";
// import {Label} from "../ui/label";
// import {MapPin, Phone, Mail, Clock} from "lucide-react";
// import emailjs from '@emailjs/browser';
//
// // Hero section component
// const ContactHero = () => (
//     <section className="relative h-[70vh] overflow-hidden">
//         <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//                 backgroundImage: "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
//                 backgroundAttachment: "fixed",
//             }}
//         >
//             <div className="absolute inset-0 bg-black/60"></div>
//         </div>
//
//         <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
//             <h1 className="text-5xl md:text-7xl font-goglast goglast-tracking text-umami-cream mb-6 leading-tight">
//                 Get in touch with any questions or special requests.
//             </h1>
//             <p className="max-w-4xl mx-auto text-umami-cream/90 font-glimp text-xl leading-relaxed">
//                 We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
//                 Connect with us for custom orders, private dining, or any special request — we're here
//                 to bring your vision to the table.
//             </p>
//         </div>
//     </section>
// );
//
// // Contact info component
// const ContactInfo = () => (
//     <div>
//         <h2 className="text-4xl font-goglast goglast-tracking text-umami-navy mt-7 mb-8 font-bold">
//             Get in Touch
//         </h2>
//
//         <div className="space-y-6">
//             <div className="flex items-start">
//                 <MapPin className="text-umami-navy mr-4 h-5 w-5 mt-1" />
//                 <div>
//                     <h3 className="font-glimp text-xl font-black text-umami-navy mb-2">Location</h3>
//                     <address className="not-italic text-lg text-umami-charcoal font-glimp">
//                         Amman<br />
//                         Al-Rabieh<br />
//                     </address>
//                 </div>
//             </div>
//
//             <div className="flex items-start">
//                 <Phone className="text-umami-navy mr-4 h-5 w-5 mt-1" />
//                 <div>
//                     <h3 className="font-glimp text-xl font-black text-umami-navy mb-2">Call Us</h3>
//                     <p className="text-lg text-umami-charcoal font-glimp">
//                         Main: (962) 7 9089 4715
//                     </p>
//                 </div>
//             </div>
//
//             <div className="flex items-start">
//                 <Clock className="text-umami-navy mr-4 h-5 w-5 mt-1" />
//                 <div>
//                     <h3 className="font-glimp text-xl font-black text-umami-navy mb-2">Hours</h3>
//                     <p className="text-lg text-umami-charcoal font-glimp">
//                         We are always working!
//                     </p>
//                 </div>
//             </div>
//         </div>
//
//         <SocialLinks />
//     </div>
// );
//
// // Social links component
// const SocialLinks = () => (
//     <div className="mt-10">
//         <h3 className="font-playfair text-lg mb-4 text-umami-navy">Connect With Us</h3>
//         <div className="flex space-x-4">
//             <a href="https://instagram.com/umamiamman"
//                className="w-10 h-10 rounded-full bg-umami-navy flex items-center justify-center text-umami-cream hover:bg-umami-blue transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//                      strokeLinecap="round" strokeLinejoin="round">
//                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
//                 </svg>
//             </a>
//             <a href="https://www.facebook.com/profile.php?id=61570837547092#"
//                className="w-10 h-10 rounded-full bg-umami-navy flex items-center justify-center text-umami-cream hover:bg-umami-blue transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//                      strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//                 </svg>
//             </a>
//         </div>
//     </div>
// );
//
// // Form field component for better reusability
// const FormField = ({ label, id, type = "text", value, onChange, required = false, placeholder, children }: { label: string; id: string; type?: string; value: any; onChange: any; required?: boolean; placeholder?: string; children?: React.ReactNode }) => (
//     <div className="space-y-2 ">
//         <Label htmlFor={id}>{label}</Label>
//         {children || (
//             <Input
//                 id={id}
//                 type={type}
//                 value={value}
//                 onChange={onChange}
//                 placeholder={placeholder}
//                 required={required}
//                 className="border-umami-navy placeholder:text-umami-navy placeholder:opacity-70"
//             />
//         )}
//     </div>
// );
//
// // Subject select component
// const SubjectSelect = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => (
//     <select
//         id="subject"
//         value={value}
//         onChange={onChange}
//         className="w-full h-10 px-3 py-2 border-umami-navy rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//         required
//     >
//         <option value="">Select a subject</option>
//         <option value="orders">Orders</option>
//         <option value="reservation">Reservation Inquiry</option>
//         <option value="catering">Catering Information</option>
//         <option value="feedback">Feedback</option>
//         <option value="employment">Employment Opportunities</option>
//         <option value="other">Other</option>
//     </select>
// );
//
// // Custom hook for form logic
// const useContactForm = (initialType, initialPlan) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         subject: initialType || "",
//         message: initialPlan ? `Subscription Plan: ${initialPlan}` : "",
//     });
//     const [status, setStatus] = useState("");
//
//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.id]: e.target.value,
//         }));
//     };
//
//     const resetForm = () => {
//         setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             subject: "",
//             message: "",
//         });
//     };
//
//     return { formData, status, setStatus, handleChange, resetForm };
// };
//
// // Email service functions
// const createMessageBody = (formData) => `
// CONTACT FORM SUBMISSION
//
// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Subject: ${formData.subject}
//
// Message:
// ${formData.message}
// `.trim();
//
// const createTemplateParams = (formData) => ({
//     from_name: formData.name,
//     from_email: formData.email,
//     phone: formData.phone || "N/A",
//     subject: formData.subject || "General",
//     message: createMessageBody(formData),
//     reply_to: formData.email,
// });
//
// // Contact form component
// const ContactForm = ({ formData, status, onSubmit, onChange }) => (
//     <div className="bg-umami-cream/40 p-8 rounded-lg elegant-shadow" id="contact-form">
//         <h2 className="text-4xl font-goglast goglast-tracking text-umami-navy mb-8 font-bold">
//             Send a Message
//         </h2>
//         <form onSubmit={onSubmit} className="space-y-6 text-umami-navy ">
//             <FormField
//                 label="Full Name"
//                 id="name"
//                 value={formData.name}
//                 onChange={onChange}
//                 placeholder="John Doe"
//                 required
//             />
//
//             <FormField
//                 label="Email Address"
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={onChange}
//                 placeholder="john@example.com"
//                 required
//             />
//
//             <FormField
//                 label="Phone Number"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={onChange}
//                 placeholder="962 7 9089 4715"
//                 required
//             />
//
//             <FormField label="Subject" id="subject" value={formData.subject} onChange={onChange}>
//                 <SubjectSelect value={formData.subject} onChange={onChange} />
//             </FormField>
//
//             <FormField label="Message" id="message" value={formData.message} onChange={onChange}>
//       <textarea
//           id="message"
//           value={formData.message}
//           onChange={onChange}
//           rows={5}
//           placeholder="Tell us more about your needs, preferences, or event..."
//           className="w-full px-3 py-2 rounded-md border border-umami-navy  text-base font-glimp ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umami-gold focus-visible:ring-offset-2 resize-none"
//           required
//       />
//             </FormField>
//
//             <Button
//                 type="submit"
//                 className="w-full bg-umami-navy text-umami-cream hover:bg-umami-blue font-glimp tracking-wider py-3"
//                 disabled={status === "Sending..."}
//             >
//                 {status === "Sending..." ? "Sending..." : "Send Message"}
//             </Button>
//
//             {status && <p className="text-center text-sm text-umami-charcoal">{status}</p>}
//         </form>
//     </div>
// );
//
// // Main Contact component
// const Contact = () => {
//     const searchParams = useSearchParams();
//
//     const initialType = searchParams.get("type") || "";
//     const initialPlan = searchParams.get("plan") || "";
//
//     const { formData, status, setStatus, handleChange, resetForm } = useContactForm(initialType, initialPlan);
//
//     // Initialize EmailJS
//     useEffect(() => {
//         emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
//     }, []);
//
//     // Scroll to form when param is detected
//     useEffect(() => {
//         const formAnchor = document.getElementById("contact-form");
//         if (formAnchor) {
//             formAnchor.scrollIntoView({ behavior: "smooth" });
//         }
//     }, []);
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus("Sending...");
//
//         try {
//             const templateParams = createTemplateParams(formData);
//
//             const result = await emailjs.send(
//                 process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//                 process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//                 templateParams
//             );
//
//             if (result.status === 200) {
//                 setStatus("Message sent successfully!");
//                 resetForm();
//             } else {
//                 setStatus("Failed to send message. Please try again.");
//             }
//         } catch (error) {
//             console.error('EmailJS error:', error);
//             setStatus(`Error sending message: ${error.text || error.message}`);
//         }
//     };
//
//     return (
//         <div>
//             <ContactHero />
//
//             <section className="py-16 bg-background">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1  md:grid-cols-2 gap-60 max-w-5xl mx-auto">
//
//                         <ContactForm
//                             formData={formData}
//                             status={status}
//                             onSubmit={handleSubmit}
//                             onChange={handleChange}
//                         />
//                         <ContactInfo />
//
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };
//
// export default Contact;
const contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
};
export default contact;