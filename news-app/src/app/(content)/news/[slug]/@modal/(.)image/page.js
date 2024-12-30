import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../../../dummy-news";
import Modal from "../../../../../../../components/modal";

export default function InterceptedItemDetails({ params }) {
    const slug = params;
    const newsItem = DUMMY_NEWS.find((indiNews) => indiNews.slug === slug.slug);
    if (!newsItem) {
        notFound();
    }

    return <Modal newsItem={newsItem} />
}