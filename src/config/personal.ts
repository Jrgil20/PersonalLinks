export interface PersonalInfo {
  name: string;
  title: string;
  profileImage: string;
  profileImageAlt: string;
}

export interface SocialLink {
  name: string;
  description: string;
  url: string;
  icon: string;
  external: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "JESUS GIL",
  title: "Engineer and student",
  profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
  profileImageAlt: "Professional headshot"
};

export const socialLinks: SocialLink[] = [
  {
    name: "LINKEDIN",
    description: "About me",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
    external: true
  },
  {
    name: "MY PERSONAL GITHUB", 
    description: "my projects",
    url: "https://github.com/yourusername",
    icon: "github",
    external: true
  },
  {
    name: "COLLABORATION",
    description: "Work with me",
    url: "mailto:your.email@example.com",
    icon: "collaboration",
    external: true
  },
  {
    name: "CONTACT ME",
    description: "Telegram",
    url: "https://t.me/yourusername",
    icon: "telegram",
    external: true
  }
];

export const themeConfig = {
  colors: {
    primary: "#6366f1",
    secondary: "#8b5cf6", 
    accent: "#ec4899",
    background: "#0f0f23",
    surface: "rgba(255, 255, 255, 0.05)",
    text: "#ffffff",
    textSecondary: "#a1a1aa"
  },
  animations: {
    duration: "0.3s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
};