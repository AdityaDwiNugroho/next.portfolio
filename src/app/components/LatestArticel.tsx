import React from "react";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl3sjHljc8B5vEJTyMOzx5tFITHf0fdsYCg&s",
    date: "15 Oct 2024",
    categories: ["Guide"],
    title: "Cara Mengoptimalkan SEO untuk Website Anda",
    description:
      "SEO adalah alat yang penting untuk menarik lebih banyak pengunjung ke situs web Anda. Pelajari cara mengoptimalkannya.",
    author: "Adityaa",
    link: "/article/cara-mengoptimalkan-seo-untuk-website-anda",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGA81XSZLXIkusJZmiS-Ssv7S8Pv4Q7ANzg&s",
    date: "22 Sep 2024",
    categories: ["Review"],
    title: "Review Terbaru: Laptop Gaming Terbaik 2024",
    description:
      "Dalam artikel ini, kami mereview beberapa laptop gaming terbaik yang dirilis tahun ini.",
    author: "Adityaa",
    link: "/article/review-terbaru-laptop-gaming-terbaik-2024",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkd1HdnxbEpoGmTzZdRCna8FFy9oyztzisKw&s",
    date: "30 Aug 2024",
    categories: ["Tutorial"],
    title: "Panduan Lengkap Memulai dengan React.js",
    description:
      "Pelajari langkah-langkah dasar untuk memulai pengembangan dengan React.js dan membangun aplikasi web interaktif.",
    author: "Adityaa",
    link: "https://youtu.be/kcnwI_5nKyA?si=WSDcuxpGW6X47lzC",
  },
];

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "tutorial":
      return "bg-blue-100 text-blue-800";
    case "tool":
      return "bg-green-100 text-green-800";
    case "news":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const LatestArticles = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent py-4">
      <div className="container mx-auto px-4">
        <div className="bg-transparent rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-2">Latest Article</h2>
          <p className="text-gray-600 mb-6">
            The latest article that we have published.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => {
              const formattedLink = article.title
                .toLowerCase()
                .replace(/ /g, "-");
              return (
                <Link
                  href={`/article/${formattedLink}`}
                  key={article.id}
                  className="block bg-transparent rounded-lg overflow-hidden border border-gray-200"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover object-center rounded-md"
                    width={1200} // Use the actual width of the image
                    height={650} // Use the actual height of the image
                  />
                  <div className="p-4 rounded-md">
                    <div className="flex flex-wrap items-center mb-2">
                      <span className="text-sm text-gray-500 mr-2">
                        {article.date}
                      </span>
                      {article.categories.map((category, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full mr-2 mb-2 ${getCategoryColor(
                            category
                          )}`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center">
                      <Image
                        src="/favicon.ico"
                        alt={article.author}
                        className="w-8 h-8 rounded-full mr-2"
                        width={32} // Favicon width
                        height={32} // Favicon height
                      />
                      <span className="text-sm text-gray-700">
                        {article.author}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 group">
              <span className="flex items-center">
                Show more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
