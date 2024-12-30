import { getAvailableNewsYears, getNewsForYear } from "../../../../../lib/news"
import NewsList from "../../../../../components/news-list";
import Link from "next/link";

export default async function page({ params }) {
    const slug = await params;
    const selectedYear = slug.filter?.[0];
    const selectedMonth = slug.filter?.[1];

    let news;

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
    }

    let newsContent = <p>No news found for selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList data={news} />
    }

    const links = getAvailableNewsYears();


    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => <li key={link}>
                            <Link key={link} href={`/archive/${link}`}>{link}</Link>
                        </li>)}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    )
}
