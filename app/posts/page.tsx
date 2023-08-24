'use client'
import Post from "@/components/server/Post"
import { getPagePosts } from "@/utils/getPagePosts"
import { useSearchParams, useRouter } from 'next/navigation'
import Link from "next/link"

export default async function AllPosts() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '1')
    const posts = await getPagePosts(page)
    if (posts == null) return null //redirect to error page
    const PRODUCTSPERPAGE = 10
    const range = (n: number) => Array.from(Array(n).keys())


    return (
        <main className="w-full flex flex-col items-center">
            {posts && posts.map(post => (
                <Post post={post} />
            ))}
            <div className="w-full flex justify-start items-start text-xl font-bold">
                {page !== 1 && <button onClick={() => router.push(`/modules?page=${page - 1}`)}>Prev</button>}
            </div>
            <div className="flex gap-2 text-xl font-bold">
                {range(Math.ceil(posts.length / PRODUCTSPERPAGE)).map((_, i) => (
                    <Link key={i} href={`/modules?page=${i + 1}`} className={`${page === i + 1 ? 'text-stone-600' : 'text-stone-300'}`}>
                        {i + 1}
                    </Link>
                ))}
            </div>
            <div className=" w-full flex justify-end items-start text-xl font-bold">
                {PRODUCTSPERPAGE * page < posts.length && <button onClick={() => router.push(`/modules?page=${page + 1}`)}>Next</button>}
            </div>
        </main>
    )
}