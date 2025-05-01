import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="grid gap-6 sm:grid-cols-2 items-center justify-center md:gap-12">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent size-11/12">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Photo of a person"
                  draggable="false"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white break-words text-justify leading-relaxed">
                توسعه دهنده وب در طراحی و پیاده سازی وب سایت ها و برنامه های وب آشنا به تکنولوژی های مدرن مانند HTML ، CSS ، JavaScript و فریم ورک های مدرن توانایی حل مشکلات پیچیده و کار در تیم های چند منظوره و همچنین تجربه در بهینه سازی عملکرد و سئو دارای روحیه یادگیری مداوم و اشتیاق برای ارائه راه حل های نوآورانه برای بهبود تجربه کاربر آماده برای چالش های جدید و همکاری در پروژه ها است.
                <span className="font-bold text-white">
                  همچنین طراحی سایت شرکتی دانش بنیان
                </span>
              </p>
              <div className="pt-6">
                <blockquote className="border-r-4 border-gray-300 pr-4 rounded-lg">
                  <p className="text-white break-words text-justify leading-relaxed">
                    من یک یادگیرنده و مبتکر تمام عمر هستم ، که توسط تمایل به کمک به جامعه توسعه دهنده با ایده ها و ابزارهای جدید که ارزش واقعی را ارائه می دهند به عنوان توسعه دهنده وب تلاش میکنم تا با بهترین ایده ها بهترین طراحی ها را حلق و آن را به کار ببرم
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
