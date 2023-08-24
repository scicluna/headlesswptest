import { WPPost } from "@/types/wptypes"
import { wp } from "./connectWP"


export async function getInitialPosts() {
    try {
        const posts: WPPost[] = await wp.posts().perPage(10)
        return posts
    } catch (err) {
        console.error("Failed to fetch posts:", err)
        return null
    }
}