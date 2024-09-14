// components/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
    return (
        <div className="w-80 bg-gray-800 text-white rounded-lg shadow-lg p-4 relative overflow-hidden">
            <div className="relative w-full h-40">
                <Image
                    src="https://utfs.io/f/corporate-law-image.jpg"
                    alt="Blog image"
                    width={200}
                    height={200}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg absolute -top-16"
                />
            </div>

            <h3 className="text-2xl font-bold text-white py-2">Learn Microinteraction</h3>
            <span className="text-sm text-gray-400 block pb-2">Monday Jan 20, 2020</span>
            <p className="text-gray-300 text-base py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
            </p>

            <div className="text-end w-full mt-2">
                <Link href={`/blog/${7}`} className='inline-block py-2 px-6 rounded-full  hover:shadow-xl border border-gray-100 text-gray-100 shadow-lg hover:bg-gray-100 hover:text-black  transition duration-300 backdrop-blur-lg'>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
