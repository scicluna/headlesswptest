import DOMPurify from 'isomorphic-dompurify'
import { WPPost } from "@/types/wptypes";
import Link from 'next/link';

type PostProps = {
    post: WPPost
}

export default function Post({ post }: PostProps) {
    return (
        <div className="sm:w-1/2 w-3/4 p-10 flex flex-col gap-4" key={post.id}>
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }} className='text-4xl font-extrabold' />
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.date) }} className="text-lg font-light" />
            </div>
            <section dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.excerpt.rendered) }} className="flex flex-col gap-4" />
            <Link href={`/posts/${post.slug}`}>Read More...</Link>
        </div>
    );
}