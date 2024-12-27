import React from 'react'
import { getMealDetail } from '../../../../lib/meals';
import classes from './detail-page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const page = async ({ params }) => {
  const { slug: urlSlug } = await params;
  const meal = await getMealDetail(urlSlug);
  if (!meal) {
    notFound();
  }
  const { title, image, summary, instructions, creator, creator_email } = meal;
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${'EMAIL'}`}>{creator_email}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p 
        className={classes.instructions}
        dangerouslySetInnerHTML={{
          __html: instructions.replace(/\n/g, '<br />')
        }}
        >
        </p>
      </main>
    </>
  )
}

export default page