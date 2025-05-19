import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import appointmentReservation from "@/assets/images/appointment-reservation.png";
import deltaGroup from "@/assets/images/deltagroup.png";
import SocialMedia from "@/assets/images/social-media.png";
import cv from "@/assets/images/cv.png";
import shop from "@/assets/images/Shop.png";
import blog from "@/assets/images/stand-blog.png";

const projects = [
  {
    title: "سایت رزرو نوبت",
    description: "در این پروژه، مسئولیت کامل طراحی رابط کاربری (UI) و تجربه کاربری (UX) برای یک وب‌سایت رزرو نوبت، شامل رابط کاربری کاربران نهایی و پنل مدیریت جامع، را بر عهده داشتم. هدف اصلی، ایجاد یک تجربه روان، جذاب و کاربرپسند برای تمامی کاربران (مشتریان و مدیران سیستم) در دستگاه‌های مختلف بود.",
    src: appointmentReservation,
    link: appointmentReservation,
    color: "#00ffcd",
    githubLink: "https://github.com/Ehsan-Fouladi/appointment-reservation",
    liveLink: "https://ehsan-fouladi.github.io/appointment-reservation/",
  },
  {
    title: "سایت شرکتی دلتاگروپ",
    description: "طراحی و توسعه فرانت‌اند وب‌سایت رسمی شرکت دانش بنیان دلتاگروپ. این پروژه شامل پیاده‌سازی کامل UI/UX ریسپانسیو، پشتیبانی دوزبانه (مثلاً فارسی و انگلیسی)، ارائه قابلیت انتخاب بین دو تم بصری متفاوت و بخش مقالات تخصصی است. این سایت به عنوان پلتفرم اصلی معرفی شرکت، دستاوردها و دانش آن عمل می‌کند و مهارت‌های من را در توسعه وب‌های پیچیده با نیازهای چندزبانه و سفارشی‌سازی بصری نشان می‌دهد.",
    src: deltaGroup,
    link: deltaGroup,
    color: "#00ffcd",
    liveLink: "https://deltagroup.ir",
  },
  {
    title: "سایت فیلم و سریال",
    description: "این پروژه شامل طراحی، معماری و توسعه کامل یک پلتفرم وب چندوجهی برای ارائه و مدیریت محتوای فیلم و سریال است. با الهام از پلتفرم‌های موفق در این حوزه (مانند ایو فیلم از نظر کاربری و قابلیت‌ها)، هدف اصلی این پروژه، ایجاد یک تجربه کاربری روان و جامع برای دسترسی به آرشیو وسیعی از فیلم‌ها و سریال‌ها، همراه با ابزارهای قدرتمند برای مدیریت محتوا و کاربران بوده است.",
    src: SocialMedia,
    link: SocialMedia,
    color: "#00ffcd",
    githubLink: "https://github.com/Ehsan-Fouladi/social-media",
    liveLink: "https://ehsan-fouladi.github.io/social-media",
  },
  {
    title: "سایت شخصی",
    description: "طراحی و توسعه کامل بخش بک‌اند و سیستم مدیریت (پنل مدیریت) وب‌سایت شخصی خودم با استفاده از فریم‌ورک قدرتمند Django. این پروژه با هدف ایجاد یک زیرساخت منعطف برای مدیریت محتواهای شخصی (مانند مقالات وبلاگ، پروژه‌های پورتفولیو و اطلاعات رزومه) پیاده‌سازی شده است. پنل مدیریت طراحی شده نیز کاملاً ریسپانسیو است تا امکان مدیریت محتوا از هر دستگاهی فراهم باشد. این پروژه مهارت‌های عمیق من در توسعه بک‌اند با Django و ساخت سیستم‌های مدیریت محتوای سفارشی را نشان می‌دهد.",
    src: cv,
    link: cv,
    color: "#00ffcd",
    githubLink: "https://github.com/Ehsan-Fouladi/My-Site-Django",
  },
  {
    title: "سایت وبلاگ",
    description: "طراحی و توسعه کامل یک وب‌سایت با استفاده از فریم‌ورک قدرتمند Django برای بخش بک‌اند و پنل مدیریت. این سایت دارای یک رابط کاربری فرانت‌اند کاملاً ریسپانسیو است که محتوا را بر اساس دسته‌بندی‌های (Categories) مشخصی نمایش می‌دهد. یک پنل مدیریت جامع نیز برای افزودن، ویرایش و سازماندهی تمامی محتواها و دسته‌بندی‌ها پیاده‌سازی شده است. این پروژه مهارت‌های من را در توسعه فول‌استک وب با Django، کار با دیتابیس و پیاده‌سازی سیستم‌های مدیریت محتوا نشان می‌دهد.",
    src: blog,
    link: blog,
    color: "#00ffcd",
    githubLink: "https://github.com/Ehsan-Fouladi/Django-Blogge",
  },
  {
    title: "سایت فروشگاهی",
    description: "طراحی و پیاده‌سازی بخش بک‌اند و ویژگی‌های اصلی یک وب‌سایت فروشگاهی با استفاده از فریم‌ورک قدرتمند Django. این پروژه شامل پیاده‌سازی نمایش محصولات، سیستم ثبت‌نام و ورود کاربران (Login/Register)، قابلیت سبد خرید (Shopping Cart) و پنل مدیریت محصولات است. این پروژه مهارت‌های من را در توسعه بک‌اند با Django و پیاده‌سازی قابلیت‌های کلیدی یک پلتفرم فروشگاهی نشان می‌دهد.",
    src: shop,
    link: shop,
    color: "#00ffcd",
    githubLink: "https://github.com/Ehsan-Fouladi/Shop",
  }
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container}>
        <section className="text-white w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-dvh flex items-center justify-center sticky top-14 md:top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              draggable="false"
              className="w-full h-full object-cover"
              loading="lazy"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              پروژه {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm break-words text-justify !leading-relaxed md:text-base text-gray-400 line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                {
                  githubLink ? <motion.a href={githubLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    کد پروژه
                  </span>
                  </motion.a> : null
                }

                {/* Live Link */}
                {
                  liveLink ? <motion.a href={liveLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    مشاهده وب سایت
                  </span>
                  </motion.a> : null
                }
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}