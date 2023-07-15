import Button from "@/components/Button"


export default function Home() {
  return (
    <>
      <div className="row items-center">
        <div className="col-md-6">
          <p className="text-6xl leading-snug font-extrabold text-grad-1">
            Better Design for your Digital Products
          </p>
          <p className="pb-12 pt-8">
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button text={'See our Works'} url={'/about'} />
        </div>
        <div className="col-md-6 flex justify-center">
          <img src="/hero.png" alt="" className="hero-img" />
        </div>
      </div>
    </>
  )
}
