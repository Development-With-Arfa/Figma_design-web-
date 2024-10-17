import Image from "next/image"

export default function Home(){
  return(
    <main>
        <header className="flex mt-8 mx-auto pl-9`1">
          <Image className="ml-4"src="/logo.png" width={20} height={20} alt="logo"/>
          <h2 className="ml-2 text-lg"><b>FASHION</b></h2>
          <ul className="flex gap-8 ml-60">
            <li className="hover:border-b-2">CATALOGUE</li>
            <li className="hover:border-b-2">FASHION</li>
            <li className="hover:border-b-2">FAVOURITE</li>
            <li className="hover:border-b-2">LIFESTYLE</li>
          </ul>
          <button className="bg-black hover:bg-neutral-400 hover:text-black h-7 w-20 text-white ml-6 text-sm ">SIGN UP</button>
        </header>
        
        <section className="mx-auto h-[500px] w-[700] mt-8 mb-6 rounded-lg bg-neutral-200 flex ">
          <div className="ml-16 my-10 w-1/2 leading-6 ">
            <h2 className="font-extrabold text-6xl"><span className="bg-white pr-10 pl-4 leading-snug">LET'S </span>
                            <br></br><span className="pl-4 py-4 leading-snug">EXPLORE</span>
                            <br></br><span className="bg-amber-300 pl-4 pr-5 leading-snug">UNIQUE</span> 
                            <br></br><span className="pl-4 leading-snug">CLOTHES.</span></h2>
            <p className="mt-5 text-sm mx-4">Live for influential and innovative fashion!</p>
            <button className=" hover:bg-neutral-400 hover:text-black h-7 w-30 text-white bg-black my-8 mx-4 text-sm px-3">Shop Now</button>
          </div>
          <div className="h-[500px] w-1/2 mr-20">
            <Image className=" mt-9  absolute h-[462px]" width={430} height={500} src="/hero_img.png" alt="Hero_Img"/>
          </div>
      </section>

      <div className="h-[80px] w-full bg-amber-300  mb-7 pl-20 flex py-5 gap-16" >
        <Image className="justify-between " src="/brand_1.png" width={70} height={70} alt="brand"/>
        <Image className="justify-between " src="/brand_2.png" width={70} height={70} alt="brand"/>
        <Image className="justify-between " src="/brand_3.png" width={70} height={70} alt="brand"/>
        <Image className="justify-between " src="/brand_4.png" width={70} height={70} alt="brand"/>
        <Image className="justify-between " src="/brand_5.png" width={70} height={70} alt="brand"/>
        <Image className="justify-between " src="/brand_6.png" width={70} height={70} alt="brand"/>
      </div>

      <section className="h-[500px] w-full  ml-14">
        <div>
          <h2 className="text-2xl font-extrabold mb-0 pb-0">NEW ARRIVALS</h2>
          <Image className="h-4 w-20 ml-28 absolute mt-0 pt-0" src="/fav_icon.png" width={70} height={70} alt="icon"/>
        </div>
        <div className="h-96  mt-11 flex gap-24">
          
          <div className="h-96 w-56 ">
            <Image className="h-[400px]"src="/arrival_1.png" width={350} height={850} alt="pic"/>
            <div className="flex h-24 w-56 mt-5">
              <div><h3 className="font-medium">Hoodies & Sweetshirts</h3>
              <p className="text-sm">Explore Now!</p></div>
              <Image className="h-[17px] w-[21px] mt-4 ml-8" src="/arrow.png" height={0} width={0} alt="arrow"/>
            </div>
          </div>
          
          <div className="h-96 w-56"><Image className="h-[400px]" src="/arrival_2.png" width={300} height={850} alt="pic"/>
            <div className="flex h-24 w-56 mt-5">
              <div><h3 className="font-medium">Hoodies & Sweetshirts</h3>
              <p className="text-sm">Explore Now!</p></div>
              <Image className="h-[17px] w-[21px] mt-4 ml-8" src="/arrow.png" height={0} width={0} alt="arrow"/>
            </div>
          </div>
          
          <div className="h-96 w-56"><Image className="h-[400px]"src="/arrival_3.png" width={300} height={850} alt="pic"/>
            <div className="flex h-24 w-56 mt-5">
              <div><h3 className="font-medium">Hoodies & Sweetshirts</h3>
              <p className="text-sm">Explore Now!</p></div>
              <Image className="h-[17px] w-[21px] mt-4 ml-8" src="/arrow.png" height={0} width={0} alt="arrow"/>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[450px] w-full  mt-20 flex bg-gradient-to-b from-yellow-200 to-yellow-500">
        <div className="h-[450px] w-1/2">
          <Image className="h-[450px] " src="/payday_img.png" width={400} height={670} alt="image"/> 
        </div>
        <div className="mt-16 ml-5">
          <h2 className="font-extrabold text-4xl "><span className="bg-white px-4 leading-snug">PAYDAY</span><br></br><span className="leading-snug"> SALE NOW </span></h2>
          <p className="mt-7 ">Spend minimal $100 get 30% off<br></br>voucher code for your next purchase</p>

          <h3 className="font-bold text-base mt-6">1 June - 10 June 2024</h3>
          <p>*Terms & Conditions apply</p>

          <button className=" hover:bg-neutral-400 hover:text-black h-7 w-30 text-white bg-black my-9 mx-4 text-sm px-3">Shop Now</button>
        </div>
      </section>

      <footer className="h-[500px] w-full mt-16 ">
        <section className="h-[350px] w-full bg-yellow-500 text-center">
          <h2 className="text-white font-extrabold text-2xl pt-20 ">JOIN SHOPPING COMMUNITY TO<br></br>GET MONTHLY PROMO</h2>
          <p className="mt-2 text-white">Type your e-mail down below and be young wild generation</p>
          <textarea name="e-mail" placeholder="Add your e-mail here" className="mt-10 h-8 w-72 rounded-sm mr-6"></textarea>
          <br></br><button  className=" hover:bg-neutral-400 hover:text-black h-7 w-32 text-white bg-black  text-sm mr-2 mt-3">SEND</button>
        </section>
        <section></section>
      </footer>
    </main>
  )
}

