import WPAPI from "wpapi"
export const wp = new WPAPI({ endpoint: process.env.NEXT_PUBLIC_WP_URL! })

