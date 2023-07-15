import Link from "next/link"



//متا دیتای صفحه 
export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio Page!',
}


export default function Page() {
  return (
    <>
      <h1 className="text-6xl font-extrabold text-grad-1">
        Our Works
      </h1>
      <p className="text-2xl font-bold pb-3">
        Choose a Gallery
      </p>

      <div className="row justify-between">
        <div className="col-md-4 portfolio-item">
          <Link href={'portfolio/illustration'}
            className="text-3xl font-bold bg-transparent ">
            Illustration
          </Link>
        </div>
        <div className="col-md-4 portfolio-item">
          <Link href={'portfolio/websites'}
            className="text-3xl font-bold bg-transparent ">
            Websites
          </Link>
        </div>
        <div className="col-md-4 portfolio-item">
          <Link href={'portfolio/applications'}
            className="text-3xl font-bold bg-transparent ">
            Applications
          </Link>
        </div>
      </div>
    </>
  )
}
