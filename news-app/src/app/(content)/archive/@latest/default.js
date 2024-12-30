import NewsList from "../../../../../components/news-list";
import { getLatestNews } from "../../../../../lib/news";

export default function LatestPage() {
    const allNews = getLatestNews();
    return (
        <NewsList data={allNews} />
    )
}
