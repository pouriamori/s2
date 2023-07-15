import Button from "@/components/Button"

//متا دیتای صفحه 
export const metadata = {
  title: 'About',
  description: 'My About Page!',
}

export default function Page() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 pb-8">
          <div>
            <h1 className="text-5xl font-bold text-grad-1 pb-2">
              Digital Storytellers
            </h1>
            <h2 className="text-xl">
              Handcrafting award winning digital experiences
            </h2>
          </div>
        </div>
      </div>

      <div className="row items-start">
        <div className="col-md-6 pr-3">
          <h1 className="text-2xl font-bold pb-2">
            Who Are We?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="col-md-6 pl-3">
          <h1 className="text-2xl font-bold pb-2">
            What We Do?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <div className="pt-5">
            <Button text={'Contact'} url={'/contact'} />
          </div>
        </div>
      </div>
    </>
  )
}
