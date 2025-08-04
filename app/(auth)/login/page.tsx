// app/login/page.tsx (with Google Sign-In option)
// 'use client';
// import { useState } from 'react';
// import {
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider
// } from 'firebase/auth';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import {auth} from "@/app/lib/firebase";
//
// export default function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [isSignUp, setIsSignUp] = useState(false);
//     const router = useRouter();
//
//     const handleEmailPasswordSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError('');
//
//         try {
//             if (isSignUp) {
//                 await createUserWithEmailAndPassword(auth, email, password);
//             } else {
//                 await signInWithEmailAndPassword(auth, email, password);
//             }
//             router.push('/menu');
//         } catch (error: any) {
//             setError(error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };
//
//     const handleGoogleSignIn = async () => {
//         setIsLoading(true);
//         setError('');
//
//         try {
//             const provider = new GoogleAuthProvider();
//             await signInWithPopup(auth, provider);
//             router.push('/menu');
//         } catch (error: any) {
//             setError(error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };
//
//     return (
//         <div className="min-h-screen bg-umami-white flex items-center justify-center px-4">
//             <div className="max-w-md w-full space-y-8">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-blanka tracking-[0.2em] text-umami-black mb-2">
//                         {isSignUp ? 'SIGN UP' : 'LOGIN'}
//                     </h1>
//                     <p className="text-umami-charcoal font-ppneuemontreal">
//                         {isSignUp ? 'Create your account' : 'Welcome back'}
//                     </p>
//                 </div>
//
//                 {error && (
//                     <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
//                         {error}
//                     </div>
//                 )}
//
//                 {/* Google Sign-In Button */}
//                 <button
//                     onClick={handleGoogleSignIn}
//                     disabled={isLoading}
//                     className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-umami-charcoal rounded-lg hover:bg-umami-nube transition disabled:opacity-50"
//                 >
//                     <svg className="w-5 h-5" viewBox="0 0 24 24">
//                         <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                         <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                         <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                         <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                     </svg>
//                     Continue with Google
//                 </button>
//
//                 <div className="relative">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-umami-charcoal"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                         <span className="px-2 bg-umami-white text-umami-charcoal">Or continue with email</span>
//                     </div>
//                 </div>
//
//                 <form className="space-y-6" onSubmit={handleEmailPasswordSubmit}>
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-ppneuemontreal text-umami-charcoal mb-2">
//                             Email Address
//                         </label>
//                         <input
//                             id="email"
//                             type="email"
//                             required
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-4 py-3 border border-umami-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-umami-black focus:border-transparent"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-ppneuemontreal text-umami-charcoal mb-2">
//                             Password
//                         </label>
//                         <input
//                             id="password"
//                             type="password"
//                             required
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-4 py-3 border border-umami-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-umami-black focus:border-transparent"
//                             placeholder="Enter your password"
//                         />
//                     </div>
//
//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`w-full py-3 px-4 rounded-lg font-semibold transition ${
//                             isLoading
//                                 ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
//                                 : 'bg-umami-charcoal text-umami-white hover:bg-umami-black'
//                         }`}
//                     >
//                         {isLoading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
//                     </button>
//                 </form>
//
//                 <div className="text-center">
//                     <button
//                         onClick={() => {
//                             setIsSignUp(!isSignUp);
//                             setError('');
//                         }}
//                         className="text-umami-charcoal hover:text-umami-black font-ppneuemontreal underline"
//                     >
//                         {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
//                     </button>
//                 </div>
//
//                 <div className="text-center">
//                     <Link
//                         href="/menu"
//                         className="text-sm text-umami-charcoal hover:text-umami-black font-ppneuemontreal"
//                     >
//                         ← Back to Menu
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }