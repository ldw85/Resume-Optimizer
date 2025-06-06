import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
    try {
        return (
            <nav data-name="navbar" className="bg-white shadow-sm w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="/optimizer?lang=en" className="text-2xl font-bold text-indigo-600">
                                <i className="fas fa-file-alt mr-2"></i>
                                AI Resume Optimization
                            </a>
                        </div>
                        
                        <div className="flex items-center space-x-4">    
                            <a href="/en/blog" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                Blog
                            </a>
                            <a href="/optimizer?lang=en" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                Free Trial
                            </a>
                            <SignedOut>
                                <SignInButton />
                                <SignUpButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        // Assuming reportError is a global function or imported from somewhere
        // reportError(error);
        return null;
    }
}
