import { WPPost } from "@/types/wptypes"
import { wp } from "./connectWP"

export async function getPagePosts(pageNumber: number) {
    try {
        const posts: WPPost[] = await wp.posts().perPage(10).page(pageNumber)
        return posts
    } catch (err) {
        console.error("Failed to fetch posts:", err)
        return null
    }
}


