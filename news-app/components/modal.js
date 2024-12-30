'use client';

import { useRouter } from "next/navigation";

export default function Modal({ newsItem }) {
    const router = useRouter();
    return (
        <>
        <div className="modal-backdrop" onClick={router.back}/>
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
        </>
    )
}