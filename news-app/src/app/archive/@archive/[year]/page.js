import { getNewsForYear } from "../../../../../lib/news"
import NewsList from "../../../../../components/news-list";

export default async function page({ params }) {
    const slug = await params;
    const news = getNewsForYear(slug.year);
    return <NewsList data={news} />
}
