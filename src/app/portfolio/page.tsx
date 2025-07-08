import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
                <div className="space-y-8">
                    {/* Example blog posts */}
                    <article className="border-b pb-6">
                        <h2 className="text-2xl font-semibold mb-2">Welcome to Our Blog</h2>
                        <p className="text-gray-700">
                            Stay tuned for updates, tips, and stories from our agency!
                        </p>
                    </article>
                    <article className="border-b pb-6">
                        <h2 className="text-2xl font-semibold mb-2">How to Grow Your Brand Online</h2>
                        <p className="text-gray-700">
                            Discover strategies and insights to boost your brand's online presence.
                        </p>
                    </article>
                </div>
            </main>
        </>
    );
};

export default BlogPage;