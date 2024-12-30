import { getAvailableNewsYears, getNewsForYear } from "../../../../../lib/news"
import NewsList from "../../../../../components/news-list";
import Link from "next/link";

export default async function page({ params }) {
    const slug = await params;
    console.log(slug.filter);
    const links = getAvailableNewsYears();
    return (
        <header id="archive-header">
        <nav>
            <ul>
                {links.map(link => <li key={link}>
                    <Link href={`/archive/${link}`}>{link}</Link>
                </li>)}
            </ul>
        </nav>
    </header>
    )
    // const news = getNewsForYear(slug.year);
    // return <NewsList data={news} />
}
