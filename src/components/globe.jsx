import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "dart",
  "openjdk",
  "react",
  "vuedotjs",
  "primevue",
  "flutter",
  "android",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "django",
  "express",
  "nextdotjs",
  "astro",
  "electron",
  "nuxt",
  "prisma",
  "amazon",
  "postgresql",
  "firebase",
  "supabase",
  "nginx",
  "vercel",
  "testinglibrary",
  "vite",
  "vim",
  "neovim",
  "jest",
  "vitest",
  "cypress",
  "httpie",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "sonarqube",
  "figma",
  "linux",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;