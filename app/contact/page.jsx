import Button from "@/components/Button"



//متا دیتای صفحه 
export const metadata = {
  title: 'Contact',
  description: 'My Contact Page!',
}


export default function Page() {
  return (
    <>
      <h1 className="font-bold text-5xl text-center text-grad-1">
        Let's Keep In Touch
      </h1>
      <div className="row items-center">
        <div className="col-md-6 pr-4 flex justify-center">
          <img src="/contact.png" alt="" className="contact-img" />
        </div>
        <div className="col-md-6 pl-4">
          <form action="" className="row">
            <input type="text" placeholder="Name" className="border-2 rounded border-white p-3 my-2" />
            <input type="text" placeholder="Email" className="border-2 rounded border-white p-3 my-2" />
            <textarea cols="30" rows="5" placeholder="Message" className="border-2 rounded border-white p-3 my-2" />
            <button type="submit" className="bg-green-400 text-white rounded py-2 my-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
