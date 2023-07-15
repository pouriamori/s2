import { items } from './data'
import Button from '@/components/Button'
import { notFound } from 'next/navigation';


//تابع استخراج دیتا از یک آبجکت محلی
const getData = (i) => {
  const result = items[i];

  if (result) {
    return (result)
  }

  return (notFound())
}


export default function Page({ params }) {

  //استفاده از دیتا
  const data = getData(params.category);

  return (
    <>
      <h1 className="text-4xl font-extrabold text-grad-1">
        {params.category}
      </h1>
      {data.map((i) => {
        return (
          <div className="row items-center mt-16" key={i.id}>
            <div className="col-md-6">
              <h2 className='text-2xl font-bold'>
                {i.title}
              </h2>
              <p className='pb-8 pt-3'>
                {i.desc}
              </p>
              <Button text="See More" url="#" />
            </div>
            <div className="col-md-6">

            </div>
          </div>
        )
      })}
    </>
  )
}
