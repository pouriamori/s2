import Link from "next/link"




//تابع استخراج دیتا از لینک (سمت سرور)
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


//متا دیتای صفحه 
export const metadata = {
  title: 'Blog',
  description: 'My Blog Page!',
}


const Page = async () => {

  //استفاده از دیتا
  const data = await getData();


  return (
    <>
      <h1 className="text-6xl font-extrabold text-grad-1 pb-4">
        Blog
      </h1>
      {data.map((item) => {
        return (
          <div className="row items-center my-6" key={item._id}>
            <div className="col-md-4">
            </div>
            <div className="col-md-8">
              <h2 className="text-3xl font-bold">
                <Link href={`/blog/${item._id}`}>
                  {item.title}
                </Link>
              </h2>
              <p>
                {item.desc}
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Page;
