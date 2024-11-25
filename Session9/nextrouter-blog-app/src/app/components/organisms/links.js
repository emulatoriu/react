import Link from "next/link"

export default function Links({posts}) {
    const postLinks = posts.map((post, index) => {
        return <Link key={index} href={`/pages/post/${post.id}/`}>{post.title}</Link>
    })
    return postLinks
}