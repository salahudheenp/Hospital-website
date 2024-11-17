import React from 'react'
import { Button } from '@/components/ui/button'
import img1 from "../../assets/blogs/blog1.png"
import img2 from "../../assets/blogs/blog2.png"
import img3 from "../../assets/blogs/blog3.png"
import img4 from "../../assets/blogs/blog4.png"

interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Lorem Ipsum available, but the majority have suffered",
    description:
      "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    imageUrl: img1,
    link: "#",
  },
  {
    title: "Lorem Ipsum available, but the majority have suffered",
    description:
      "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    imageUrl: img2,
    link: "#",
  },
  {
    title: "Lorem Ipsum available, but the majority have suffered",
    description:
      "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    imageUrl: img3,
    link: "#",
  },
  {
    title: "Lorem Ipsum available, but the majority have suffered",
    description:
      "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    imageUrl: img4,
    link: "#",
  },
];
const Blogs = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-black">See Our Latest Blogs!</h1>
        <Button variant={'orangeBtn'} >
        View all
      </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.imageUrl}
              alt="Blog post"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-lg font-bold text-black mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <a href={post.link} className="text-black font-bold">
              READ MORE
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs