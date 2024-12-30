import Image from "next/image";
import Link from "next/link";

export default function NewsList({ data }) {
    return (
        <ul className="news-list">
        {data?.map((newsItem) => (
            <li key={newsItem.id}>
                <Link href={`/news/${newsItem.slug}`}>
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
                    <span>{newsItem.title}</span>
                </Link>
            </li>
        ))}
    </ul>
    )
}