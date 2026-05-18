'use client';
import { Suspense } from 'react';
import React, {useState, useEffect, useRef} from 'react';
import Image from "next/image";
import contact from "@/app/assets/contact.jpg";
import ContactClient from "../components/ContactClient";
import FAQ from "@/app/components/FAQ";




// Main Contact component
const Contact = () => {
    return (
        <div className="min-h-screen ">
                   <Suspense fallback={<div>Loading...</div>}>
            <ContactClient />
            </Suspense>
            <FAQ />
            <br />
        </div>
    );
};

export default Contact;