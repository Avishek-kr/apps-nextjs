import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../../dummy-news";

export default async function InterceptedItemDetails({ params }) {
    const slug = await params;
    const newsItem = DUMMY_NEWS.find((indiNews) => indiNews.slug === slug.slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
        <div className="modal-backdrop" />
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
        </>
    )
}