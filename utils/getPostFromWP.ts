import { WPPost } from "@/types/wptypes"
import { wp } from "./connectWP"


export async function getPostFromWP() {
    try {
        const posts: WPPost[] = await wp.posts()
        return posts
    } catch (err) {
        console.error("Failed to fetch posts:", err)
        return null
    }
}