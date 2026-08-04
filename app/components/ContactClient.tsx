'use client'
import React, {useEffect, useRef, useState} from "react";
import {AlertCircle, Check, Loader2} from "lucide-react";
import {useSearchParams} from "next/navigation";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import {useToast} from "../hooks/use-toast";
import {useTranslations, useLocale} from "next-intl";
import contactHero from '@/app/assets/tools.jpg'

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

interface ContactFormProps {
    formData: ContactFormData;
    status: 'idle' | 'sending' | 'success' | 'error';
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    errors: FormErrors;
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

type ValidationMessages = {
    nameRequired: string;
    nameTooShort: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    phoneInvalid: string;
    subjectRequired: string;
    messageRequired: string;
    messageTooShort: string;
};

const validateForm = (formData: ContactFormData, m: ValidationMessages): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
        errors.name = m.nameRequired;
    } else if (formData.name.trim().length < 2) {
        errors.name = m.nameTooShort;
    }

    if (!formData.email.trim()) {
        errors.email = m.emailRequired;
    } else if (!validateEmail(formData.email)) {
        errors.email = m.emailInvalid;
    }

    if (!formData.phone.trim()) {
        errors.phone = m.phoneRequired;
    } else if (!validatePhone(formData.phone)) {
        errors.phone = m.phoneInvalid;
    }

    if (!formData.subject) {
        errors.subject = m.subjectRequired;
    }

    if (!formData.message.trim()) {
        errors.message = m.messageRequired;
    } else if (formData.message.trim().length < 10) {
        errors.message = m.messageTooShort;
    }

    return errors;
};

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

// Custom hook for form management
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateAndSubmit = (m: ValidationMessages) => {
        const formErrors = validateForm(formData, m);
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
        setStatus('idle');
    };

    return { formData, status, setStatus, handleChange, resetForm, errors, validateAndSubmit };
};

// Form Field Component
const FormField: React.FC<FormFieldProps> = ({ label, id, value, onChange, placeholder, required = false, type = "text", children, error }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
        <label
            htmlFor={id}
            style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
                fontSize: '.78rem',
                color: '#1A1A18',
            }}
        >
            {label} {required && <span style={{ color: '#C9A96E' }}>*</span>}
        </label>
        {children || (
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: '.85rem',
                    padding: '.65rem .85rem',
                    background: '#EDE8E0',
                    border: `1px solid ${error ? '#a33' : '#E8E0D5'}`,
                    color: '#1A1A18',
                    outline: 'none',
                    transition: 'border-color .3s',
                }}
            />
        )}
        {error && (
            <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '.72rem',
                color: '#a33',
                display: 'flex',
                alignItems: 'center',
                gap: '.25rem',
            }}>
                <AlertCircle style={{ width: 12, height: 12 }} />
                {error}
            </p>
        )}
    </div>
);

const SubjectSelect: React.FC<SubjectSelectProps> = ({value, onChange, error}) => {
    const t = useTranslations('contact.form');
    return (
        <select
            id="subject"
            name="subject"
            value={value}
            onChange={onChange}
            style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 300,
                fontSize: '.85rem',
                padding: '.65rem .85rem',
                background: '#EDE8E0',
                border: `1px solid ${error ? '#a33' : '#E8E0D5'}`,
                color: value ? '#1A1A18' : '#8C8278',
                outline: 'none',
                width: '100%',
                transition: 'border-color .3s',
            }}
        >
            <option value="">{t('subjectSelect')}</option>
            <option value="general">{t('subjectGeneral')}</option>
            <option value="custom-order">{t('subjectCustomOrder')}</option>
            <option value="whole-cake">{t('subjectWholeCake')}</option>
            <option value="event">{t('subjectEvent')}</option>
            <option value="feedback">{t('subjectFeedback')}</option>
        </select>
    );
};

// Contact Info Component
const ContactInfo: React.FC = () => {
    const t = useTranslations('contact.info');
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#E8E0D5' }}>
            {/* WhatsApp */}
            <a
                href="https://wa.me/962790894715"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex', flexDirection: 'column', gap: '.5rem',
                    background: '#F2EEE8', padding: '2rem 2.5rem',
                    textDecoration: 'none', transition: 'background .3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#EDE8E0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F2EEE8')}
            >
                <span style={{ fontFamily: '"Cinzel", serif', fontSize: '.52rem', letterSpacing: '.32em', textTransform: 'uppercase', color: '#C9A96E' }}>
                    {t('whatsappLabel')}
                </span>
                <span style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: '1.15rem', color: '#1A1A18' }} dir="ltr">
                    +962 7 9089 4715
                </span>
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '.75rem', color: '#8C8278' }}>
                    {t('whatsappNote')}
                </span>
            </a>

            {/* Email */}
            <a
                href="mailto:contact@umamiamman.com"
                style={{
                    display: 'flex', flexDirection: 'column', gap: '.5rem',
                    background: '#F2EEE8', padding: '2rem 2.5rem',
                    textDecoration: 'none', transition: 'background .3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#EDE8E0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F2EEE8')}
            >
                <span style={{ fontFamily: '"Cinzel", serif', fontSize: '.52rem', letterSpacing: '.32em', textTransform: 'uppercase', color: '#C9A96E' }}>
                    {t('emailLabel')}
                </span>
                <span style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: '1.15rem', color: '#1A1A18' }} dir="ltr">
                    contact@umamiamman.com
                </span>
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '.75rem', color: '#8C8278' }}>
                    {t('emailNote')}
                </span>
            </a>

            {/* Instagram */}
            <a
                href="https://instagram.com/umamiamman"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex', flexDirection: 'column', gap: '.5rem',
                    background: '#F2EEE8', padding: '2rem 2.5rem',
                    textDecoration: 'none', transition: 'background .3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#EDE8E0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F2EEE8')}
            >
                <span style={{ fontFamily: '"Cinzel", serif', fontSize: '.52rem', letterSpacing: '.32em', textTransform: 'uppercase', color: '#C9A96E' }}>
                    {t('instagramLabel')}
                </span>
                <span style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: '1.15rem', color: '#1A1A18' }} dir="ltr">
                    @umamiamman
                </span>
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '.75rem', color: '#8C8278' }}>
                    {t('instagramNote')}
                </span>
            </a>
        </div>
    );
};

// Contact Form Component
const ContactForm: React.FC<ContactFormProps> = ({ formData, status, onSubmit, onChange, errors }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const t = useTranslations('contact.form');
    const locale = useLocale();

    return (
        <div
            id="contact-form"
            style={{ background: '#F2EEE8', border: '1px solid #E8E0D5', padding: '3rem' }}
        >
            {/* Header */}
            <div style={{ marginBottom: '2.5rem' }}>
                <span style={{
                    fontFamily: '"Cinzel", serif', fontSize: '.58rem', letterSpacing: '.38em',
                    textTransform: 'uppercase', color: '#C9A96E', display: 'block', marginBottom: '1rem',
                }}>
                    {t('eyebrow')}
                </span>
                <h2 style={{
                    fontFamily: '"Cormorant Garamond", serif', fontWeight: 300,
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1,
                    color: '#1A1A18', margin: '0 0 .75rem',
                }}>
                    {t('heading')}<br />
                    <em style={{ fontStyle: 'italic', color: '#8C8278' }}>{t('headingItalic')}</em>
                </h2>
                <p style={{
                    fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
                    fontSize: '.82rem', color: '#8C8278', margin: 0,
                }}>
                    {t('responseNote')}
                </p>
            </div>

            {/* Success alert */}
            {status === 'success' && (
                <div style={{
                    background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.3)',
                    padding: '1rem 1.25rem', marginBottom: '1.75rem',
                    display: 'flex', alignItems: 'flex-start', gap: '.75rem',
                }}>
                    <Check style={{ width: 16, height: 16, color: '#C9A96E', flexShrink: 0, marginTop: 2 }} />
                    <p style={{
                        fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
                        fontSize: '.82rem', color: '#4C4746', margin: 0,
                    }}>
                        {t('successAlert')}
                    </p>
                </div>
            )}

            {/* Error alert */}
            {status === 'error' && (
                <div style={{
                    background: 'rgba(180,50,50,0.06)', border: '1px solid rgba(180,50,50,0.2)',
                    padding: '1rem 1.25rem', marginBottom: '1.75rem',
                    display: 'flex', alignItems: 'flex-start', gap: '.75rem',
                }}>
                    <AlertCircle style={{ width: 16, height: 16, color: '#a33', flexShrink: 0, marginTop: 2 }} />
                    <p style={{
                        fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
                        fontSize: '.82rem', color: '#4C4746', margin: 0,
                    }}>
                        {t('errorAlert')}
                    </p>
                </div>
            )}

            {/* Form */}
            <form ref={formRef} onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="umami-form-row">
                    <FormField label={t('fullName')} id="name" value={formData.name} onChange={onChange} placeholder={t('fullNamePlaceholder')} required error={errors.name} />
                    <FormField label={t('emailAddress')} id="email" type="email" value={formData.email} onChange={onChange} placeholder={t('emailPlaceholder')} required error={errors.email} />
                </div>

                <FormField label={t('phoneNumber')} id="phone" value={formData.phone} onChange={onChange} placeholder={t('phonePlaceholder')} required error={errors.phone} />

                <FormField label={t('subject')} id="subject" value={formData.subject} onChange={onChange} error={errors.subject}>
                    <SubjectSelect value={formData.subject} onChange={onChange} error={errors.subject} />
                </FormField>

                <FormField label={t('message')} id="message" value={formData.message} onChange={onChange} error={errors.message}>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={onChange}
                        rows={5}
                        placeholder={t('messagePlaceholder')}
                        style={{
                            fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '.85rem',
                            padding: '.65rem .85rem', background: '#EDE8E0',
                            border: `1px solid ${errors.message ? '#a33' : '#E8E0D5'}`,
                            color: '#1A1A18', outline: 'none', resize: 'none', width: '100%',
                            transition: 'border-color .3s',
                        }}
                        required
                    />
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
                        fontSize: '.72rem', color: '#8C8278', marginTop: '.4rem',
                    }}>
                        <span>{t('messageMinChars')}</span>
                        <span dir="ltr">{formData.message.length} / 500</span>
                    </div>
                </FormField>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.75rem',
                        width: '100%', fontFamily: '"Cinzel", serif', fontSize: '.57rem',
                        letterSpacing: '.28em', textTransform: 'uppercase',
                        background: status === 'sending' ? '#b8944f' : '#C9A96E',
                        color: '#F2EEE8', border: 'none', padding: '1rem',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        opacity: status === 'sending' ? 0.7 : 1, transition: 'background .3s',
                    }}
                    onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#b8944f' }}
                    onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.background = '#C9A96E' }}
                >
                    {status === 'sending' ? (
                        <>
                            <Loader2 style={{ width: 14, height: 14, animation: 'spin 1s linear infinite' }} />
                            {t('sending')}
                        </>
                    ) : (
                        t('sendMessage')
                    )}
                </button>

                {status === 'success' && (
                    <p style={{
                        fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
                        fontSize: '.78rem', color: '#C9A96E', textAlign: 'center', margin: 0,
                    }}>
                        {t('sentSuccessfully')}
                    </p>
                )}

                <p style={{
                    fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
                    fontSize: '.7rem', color: '#8C8278', textAlign: 'center', margin: 0,
                }}>
                    {t('consentNote')}
                </p>
            </form>

            <style>{`
                @media (max-width: 640px) {
                    .umami-form-row { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

// Main Contact component
const ContactClient: React.FC = () => {
    const searchParams = useSearchParams();
    const {toast} = useToast();
    const t = useTranslations('contact');
    const tErrors = useTranslations('contact.form.errors');
    const tToast = useTranslations('contact.form.toast');

    const initialType = searchParams.get("type") || "";
    const initialPlan = searchParams.get("plan") || "";

    const {
        formData, status, setStatus, handleChange,
        resetForm, errors, validateAndSubmit
    } = useContactForm(initialType, initialPlan);

    useEffect(() => {
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

        const validationMessages: ValidationMessages = {
            nameRequired: tErrors('nameRequired'),
            nameTooShort: tErrors('nameTooShort'),
            emailRequired: tErrors('emailRequired'),
            emailInvalid: tErrors('emailInvalid'),
            phoneRequired: tErrors('phoneRequired'),
            phoneInvalid: tErrors('phoneInvalid'),
            subjectRequired: tErrors('subjectRequired'),
            messageRequired: tErrors('messageRequired'),
            messageTooShort: tErrors('messageTooShort'),
        };

        if (!validateAndSubmit(validationMessages)) {
            toast({
                title: tToast('fixErrorsTitle'),
                description: tToast('fixErrorsDescription'),
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
                    title: tToast('successTitle'),
                    description: tToast('successDescription'),
                });
                setTimeout(resetForm, 3000);
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error: any) {
            console.error('EmailJS error:', error);
            setStatus("error");
            toast({
                title: tToast('failTitle'),
                description: error.message || tToast('failDescription'),
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen bg-umami-linen">
            {/* Contact Hero — background image with text overlay */}
            <section className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-end">
                <div className="absolute inset-0">
                    <Image src={contactHero} alt={t('eyebrow')} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                </div>

                <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 max-w-4xl">
                    {/* Eyebrow */}
                    <p
                        className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8"
                        style={{ color: '#C9A96E' }}
                    >
                        {t('eyebrow')}
                    </p>

                    {/* Headline */}
                    <h1 className="font-display text-umami-linen text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-2">
                        {t('heroTitle')}
                    </h1>
                    <p
                        className="font-display italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-10"
                        style={{ color: '#C9A96E' }}
                    >
                        {t('heroTitleItalic')}
                    </p>

                    {/* Sub-copy */}
                    <p className="font-body font-light text-sm md:text-base text-umami-alabaster/80 max-w-md leading-relaxed">
                        {t('heroSub')}
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
                        <div className="lg:col-span-2">
                            <ContactInfo />
                        </div>
                        <div className="lg:col-span-3">
                            <ContactForm
                                formData={formData}
                                status={status}
                                onSubmit={handleSubmit}
                                onChange={handleChange}
                                errors={errors}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactClient;
