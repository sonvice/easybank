import {
  iconApi,
  iconBudgeting,
  iconFacebook,
  iconInstagram,
  iconOnboarding,
  iconOnline,
  iconPinterest,
  iconTwitter,
  iconYoutube,
  imageConfetti,
  imageCurrency,
  imagePlane,
  imageRestaurant,
} from "../assets/images";

export const nav = [
  { href: "/", target: "Home" },
  { href: "/", target: "About" },
  { href: "/", target: "Contact" },
  { href: "/", target: "Blog" },
  { href: "/", target: "Careers" },
];

export const navFooter = [
  { href: "/", target: "About Us" },
  { href: "/", target: "Contact" },
  { href: "/", target: "Blog" },
  { href: "/", target: "Careers" },
  { href: "/", target: "Support" },
  { href: "/", target: "Privacy Policy" },
];

export const easaybank = [
  {
    icon: iconOnline,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: iconBudgeting,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: iconOnboarding,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: iconApi,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const latestArticles = [
  {
    img: imageCurrency,
    by: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    img: imageRestaurant,
    by: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    img: imagePlane,
    by: "By Claire Robinson",
    title: "Take your Easybank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    img: imageConfetti,
    by: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];


export const socialIcon = [
    {href:'/', icon:iconFacebook,target:'facebook'},
    {href:'/', icon:iconYoutube,target:'youtube'},
    {href:'/', icon:iconTwitter,target:'twitter'},
    {href:'/', icon:iconPinterest,target:'pinterest'},
    {href:'/', icon:iconInstagram,target:'instagram'}
] 
