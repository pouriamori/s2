import { notFound } from "next/navigation"


//تابع استخراج دیتا
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  if (!res.ok) {
    return (notFound())
  }
  return res.json()
}


//متا دیتای داینامیک
export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}


const Page = async ({ params }) => {

  //دیتای ذخیره شده
  const data = await getData(params.id);

  return (
    <>
      <div className="row items-center">
        <div className="col-md-6 row justify-between">
          <h1 className="text-3xl font-bold">
            {data.title}
          </h1>
          <p className="my-3">
            {data.body}
          </p>
          <p className="text-sm">
            Author
          </p>
        </div>
        <div className="col-md-6">

        </div>
      </div>
      <p>
        Post text Here ...
      </p>
    </>
  )
}

export default Page;