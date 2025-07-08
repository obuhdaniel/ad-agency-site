import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound} from "next/navigation";
import { Metadata } from "next";

// Blog Type
interface Blog {
  id: string;
  slug: string;
  title: string;
  created: string;
  content: {
    html: string;
  };
  coverImage?: {
    url: string;
  };
}

// Type for params (Promise-based for Next.js 15)
type Params = Promise<{ slug: string }>;

// Fetch Blog Function
async function getBlog(slug: string): Promise<Blog | null> {
  const response = await fetch(
    "https://eu-west-2.cdn.hygraph.com/content/cmcnpnfcn03lw06w6x9hqpu7i/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query Blog($slug: String!) {
            blog(where: { slug: $slug }) {
              id
              slug
              title
              created
              content {
                html
              }
              coverImage {
                url
              }
            }
          }
        `,
        variables: { slug },
      }),
      next: { revalidate: 60 },
    }
  );

  const json = await response.json();
  return json.data.blog ?? null;
}

// Generate Metadata for SEO (Next.js 15)
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post could not be found.",
    };
  }

  const plainText = blog.content.html.replace(/<[^>]+>/g, '').slice(0, 150) + "...";

  return {
    title: blog.title,
    description: plainText,
    openGraph: {
      title: blog.title,
      description: plainText,
      images: blog.coverImage?.url ? [{ url: blog.coverImage.url }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: plainText,
      images: blog.coverImage?.url ? [blog.coverImage.url] : [],
    },
  };
}

// Format Date Helper
function formatDate(dateString: string | number | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Page Component (Next.js 15)
export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="container mx-auto px-6 pt-20 pb-12">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors mb-4"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Back to Stories
              </Link>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                {blog.title}
              </h1>
              <div className="flex justify-center items-center gap-4 text-sm text-orange-100">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(blog.created)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            {blog.coverImage?.url ? (
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl mb-12">
                <img
                  src={blog.coverImage.url}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ) : (
              <div className="h-96 rounded-3xl overflow-hidden shadow-xl mb-12 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
                <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}

            <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700 mx-auto">
              <div
                className="prose dark:prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content.html }}
              />
            </article>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Explore More Stories
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
