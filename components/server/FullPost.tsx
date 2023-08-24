import DOMPurify from 'isomorphic-dompurify'
import { WPComment, WPPost } from "@/types/wptypes";

type PostProps = {
    post: WPPost
    comments: WPComment[]
}

export default function FullPost({ post, comments }: PostProps) {

    return (
        <div className="sm:w-1/2 w-3/4 p-10 flex flex-col gap-4" key={post.id}>
            <div>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }} className='text-4xl font-extrabold' />
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.date) }} className="text-lg font-light" />
            </div>
            <hr />
            <section dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.rendered) }} className="flex flex-col gap-4" />
            <hr />
            {comments && comments.map(comment => (
                <div key={comment.id} >
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.author_name) }} className='text-xl font-bold' />
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.date) }} className='font-light' />
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content.rendered) }} />
                </div>
            ))}
        </div>
    );
}