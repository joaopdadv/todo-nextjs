import React from "react";
import '../styles/globals.css';
import Link from "next/link";

function RootLayout({children,}:{children: React.ReactNode}) {
    
    
    return (
        <html>
            <head></head>
            <body>
                <nav className="bg-slate-500 text-cyan-50 flex flex-row gap-3 p-3">
                    <Link href={`/`} className="cursor-pointer p-3 rounded-xl hover:bg-slate-600 transition-all">Home</Link>
                    <Link href={`/notes`} className="cursor-pointer p-3 rounded-xl hover:bg-slate-600 transition-all">Notes</Link>
                </nav>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;