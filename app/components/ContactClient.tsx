'use client'
import React, {useEffect, useRef, useState} from "react";
import {AlertCircle, ArrowDown, Check, Loader2, Mail, Phone} from "lucide-react";
import {useSearchParams} from "next/navigation";
import emailjs from "@emailjs/browser";
import {Alert, AlertDescription} from "../ui/alert";
import {Input} from "../ui/input";
import {Textarea} from "../ui/textarea";
import {Button} from "../ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {useToast} from "../hooks/use-toast";

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}

interface FormFieldProps {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    type?: string;
    children?: React.ReactNode;
    error?: string;
    icon?: React.ReactNode;
}

interface SubjectSelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
}

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

// Add the missing ContactFormProps interface
interface ContactFormProps {
    formData: ContactFormData;
    status: 'idle' | 'sending' | 'success' | 'error';
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    errors: FormErrors;
    onFieldFocus: (field: string) => void;
}

// Form validation utilities
const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const validateForm = (formData: ContactFormData): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
        errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
        errors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject) {
        errors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }

    return errors;
};

// Utility functions - Fixed to use ContactFormData instead of FormData
const createMessageBody = (formData: ContactFormData): string => {
    return `
CONTACT FORM SUBMISSION

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
`.trim();
};

const createTemplateParams = (formData: ContactFormData) => ({
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || "N/A",
    subject: formData.subject || "General",
    message: createMessageBody(formData),
    reply_to: formData.email,
});

// Custom hook for form management - Fixed to use ContactFormData
const useContactForm = (initialType: string = '', initialPlan: string = '') => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: initialType || initialPlan || '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<FormErrors>({});
    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleFieldFocus = (field: string) => {
        setTouchedFields(prev => new Set(prev).add(field));
    };

    const validateAndSubmit = () => {
        const formErrors = validateForm(formData);
        setErrors(formErrors);
        setTouchedFields(new Set(Object.keys(formData)));

        return Object.keys(formErrors).length === 0;
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        setErrors({});
        setTouchedFields(new Set());
        setStatus('idle');
    };

    return {
        formData,
        status,
        setStatus,
        handleChange,
        resetForm,
        errors,
        touchedFields,
        handleFieldFocus,
        validateAndSubmit
    };
};

// Enhanced Components
const FormField: React.FC<FormFieldProps> = ({
                                                 label,
                                                 id,
                                                 value,
                                                 onChange,
                                                 placeholder,
                                                 required = false,
                                                 type = "text",
                                                 children,
                                                 error,
                                                 icon
                                             }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-foreground">
            {label} {required && <span className="text-destructive">*</span>}
        </label>
        <div className="relative">
            {icon && (
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    {icon}
                </div>
            )}
            {children || (
                <Input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`bg-umami-nube ${icon ? 'pl-10' : ''} ${error ? 'border-destructive focus:border-destructive' : ''}`}
                    aria-describedby={error ? `${id}-error` : undefined}
                />
            )}
        </div>
        {error && (
            <p id={`${id}-error`} className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-4 w-4"/>
                {error}
            </p>
        )}
    </div>
);

const SubjectSelect: React.FC<SubjectSelectProps> = ({value, onChange, error}) => (
    <div className="relative">
        <select
            id="subject"
            name="subject"
            value={value}
            onChange={onChange}
            className={`bg-umami-nube w-full px-3 py-2 rounded-md border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                error ? 'border-destructive focus:border-destructive' : 'border-input'
            }`}
            aria-describedby={error ? 'subject-error' : undefined}
        >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="custom-order">Custom Order</option>
            <option value="catering">Catering Services</option>
            <option value="wholesale">Wholesale Partnership</option>
            <option value="careers">Careers</option>
            <option value="feedback">Feedback & Reviews</option>
            <option value="complaint">Issue or Complaint</option>
        </select>
    </div>
);

const ContactInfo: React.FC = () => (
    <div className="space-y-8">

        <div className="space-y-4">

            <Card className="card-premium hover:bg-umami-nube hover:shadow-lg  transition-shadow duration-200 ">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center font-normal gap-3">
                        <Phone className="h-5 w-5 " />
                        Phone
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-elegant">
                        <a href="tel:+15551234567" className="transition-colors inline-flex items-center gap-2">
                            (962) 7 9089 4715
                        </a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Contact us using the WhatsApp Icon</p>
                </CardContent>
            </Card>

            <Card className="card-premium hover:bg-umami-nube hover:shadow-lg transition-shadow duration-200 ">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center font-normal gap-3">
                        <Mail className="h-5 w-5 " />
                        Email
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-elegant">
                        <a href="mailto:hello@revolverbyumami.com" className="hover:text-gold transition-colors inline-flex items-center gap-2">
                            contact@umamiamman.com
                        </a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">We respond within 4 hours</p>
                </CardContent>
            </Card>
        </div>

    </div>
);
const ContactForm: React.FC<ContactFormProps> = ({
                                                     formData,
                                                     status,
                                                     onSubmit,
                                                     onChange,
                                                     errors,
                                                     onFieldFocus
                                                 }) => {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div className="bg-gradient-to-br from-muted/30 to-muted/10 p-8  border border-border/50" id="contact-form">
            <div className="mb-8">
                <h2 className="text-3xl font-ppneuemontreal mb-2">Send a Message</h2>
                <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
            </div>

            {status === 'success' && (
                <Alert className="mb-6 border-green-200 bg-green-50 text-green-800">
                    <Check className="h-4 w-4"/>
                    <AlertDescription>
                        Thank you! Your message has been sent successfully. We'll be in touch soon.
                    </AlertDescription>
                </Alert>
            )}

            {status === 'error' && (
                <Alert className="mb-6 border-destructive/50 bg-destructive/10">
                    <AlertCircle className="h-4 w-4"/>
                    <AlertDescription>
                        There was an error sending your message. Please try again or contact us directly.
                    </AlertDescription>
                </Alert>
            )}

            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                        label="Full Name"
                        id="name"
                        value={formData.name}
                        onChange={onChange}
                        placeholder="John Doe"
                        required
                        error={errors.name}
                    />

                    <FormField
                        label="Email Address"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={onChange}
                        placeholder="john@example.com"
                        required
                        error={errors.email}
                    />
                </div>

                <FormField
                    label="Phone Number"
                    id="phone"
                    value={formData.phone}
                    onChange={onChange}
                    placeholder="+962 7 9089 4715"
                    required
                    error={errors.phone}
                />

                <FormField
                    label="Subject"
                    id="subject"
                    value={formData.subject}
                    onChange={onChange}
                    error={errors.subject}
                >
                    <SubjectSelect value={formData.subject} onChange={onChange} error={errors.subject}/>
                </FormField>

                <FormField
                    label="Message"
                    id="message"
                    value={formData.message}
                    onChange={onChange}
                    error={errors.message}
                >
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={onChange}
                        rows={5}
                        placeholder="Tell us more about your needs, preferences, or event. The more details you provide, the better we can assist you..."
                        className={`bg-umami-nube resize-none ${errors.message ? 'border-destructive focus:border-destructive' : ''}`}
                        required
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Minimum 10 characters</span>
                        <span>{formData.message.length}/500</span>
                    </div>
                </FormField>

                <Button
                    type="submit"
                    className="w-full text-umami-white bg-gradient-to-r from-umami to-umami-dark hover:from-umami-dark hover:to-umami font-montserrat tracking-wider transition-all duration-200 transform hover:scale-[1.02]"
                    disabled={status === 'sending'}
                    size="lg"
                >
                    {status === 'sending' ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin"/>
                            Sending Message...
                        </>
                    ) : (
                        <>
                            Send Message
                        </>
                    )}
                </Button>
                {status === "success" && (
                    <p className="text-sm text-green-600 text-center mt-2">
                        ✅ Message sent successfully!
                    </p>
                )}
                <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                </p>
            </form>
        </div>
    );
};

// Main Contact component
const ContactClient: React.FC = () => {
    const searchParams = useSearchParams();
    const {toast} = useToast();

    const initialType = searchParams.get("type") || "";
    const initialPlan = searchParams.get("plan") || "";

    const {
        formData,
        status,
        setStatus,
        handleChange,
        resetForm,
        errors,
        handleFieldFocus,
        validateAndSubmit
    } = useContactForm(initialType, initialPlan);

    // Initialize EmailJS - use process.env for Next.js
    useEffect(() => {
        // Debug: Check if environment variables are loaded
        console.log('EmailJS Config:', {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing',
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'Set' : 'Missing',
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'Set' : 'Missing'
        });

        if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        }
    }, []);

    useEffect(() => {
        if (initialType || initialPlan) {
            setTimeout(() => {
                const formAnchor = document.getElementById("contact-form");
                if (formAnchor) {
                    formAnchor.scrollIntoView({behavior: "smooth", block: "center"});
                }
            }, 100);
        }
    }, [initialType, initialPlan]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateAndSubmit()) {
            toast({
                title: "Please fix the errors",
                description: "Check the form fields and try again.",
                variant: "destructive",
            });
            return;
        }

        setStatus("sending");

        try {
            const templateParams = createTemplateParams(formData);

            if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
                throw new Error("EmailJS configuration is missing");
            }

            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (result.status === 200) {
                setStatus("success");
                toast({
                    title: "Message sent successfully!",
                    description: "We'll get back to you within 24 hours.",
                });
                setTimeout(resetForm, 3000);
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error: any) {
            console.error('EmailJS error:', error);
            setStatus("error");
            toast({
                title: "Failed to send message",
                description: error.message || "Please try again or contact us directly.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen ">
            <section className="py-16 ">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
                        <div className="lg:col-span-2">
                            <ContactInfo/>
                        </div>
                        <div className="lg:col-span-3">
                            <ContactForm
                                formData={formData}
                                status={status}
                                onSubmit={handleSubmit}
                                onChange={handleChange}
                                errors={errors}
                                onFieldFocus={handleFieldFocus}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactClient;
