import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../../dummy-news";

export default async function ItemDetails({ params }) {
    const slug = await params;
    const newsItem = DUMMY_NEWS.find((indiNews) => indiNews.slug === slug.slug);
    console.log('image', newsItem.image);
    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}