import IconCloud from "./ui/icon-cloud";
const slugs = [
  "json",
  "postman",
  "typescript",
  "javascript",
  "python",
  "cplusplus",
  "mongodb",
  "react",
  "mysql",
  "html5",
  "redux",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "threedotjs",
  "amazonwebservices",
  "appwrite",
  "vercel",
  "selenium",
  "jenkins",
  "docker",
  "git",
  "jira",
  "linux",
  "github",
  ""
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} imageArray={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        ,

    // VS Code
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",

    // Electron JS
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",

    // Cucumber (BDD)
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg"
      ]} />
    </div>
  );
}

export default IconCloudDemo;