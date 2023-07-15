import Link from "next/link"


export default function Button({ url, text }) {
  return (
    <>
      <Link href={url} className="bg-green-500 text-white py-3 px-3 rounded">
        {text}
      </Link>
    </>
  )
}