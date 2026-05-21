import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] overflow-hidden relative font-sans">
            {/* Animated Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>

            {/* Login Card */}
            <div className="z-10 w-full max-w-md p-8 mx-4 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col items-center">
                
                {/* Branding / Logo Placeholder */}
                <div className="mb-8 p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3v8m0 0l.669-.833a10.014 10.014 0 012.221 4.774M12 11c0 3.517 1.009 6.799 2.753 9.571m3.44-2.04l-.054-.09a10.003 10.003 0 01-2.221-4.774M12 11v8m7.716-12.11a10.001 10.001 0 00-17.716 0" />
                    </svg>
                </div>

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Admin RPL Login</h2>
                    <p className="text-white/50 text-sm font-medium">Sign in to manage your workspace</p>
                </div>

                <form onSubmit={handleSubmit} className="w-full space-y-6">
                    {/* Email Input */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/30 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Username or Email"
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/30 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Action Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm px-1">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-5 h-5 border border-white/20 rounded-md bg-white/5 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all duration-300"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0.5 left-0.5 h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-white/40 group-hover:text-white/60 transition-colors">Remember me</span>
                        </label>
                        <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Forgot Password?</a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-white/20 text-xs uppercase tracking-widest font-semibold">
                        © 2026 RPL Department
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
