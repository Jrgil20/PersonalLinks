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

// Validación de URLs
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Validación de email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const personalInfo: PersonalInfo = {
  name: "JESUS GIL",
  title: "Engineer and student",
  profileImage: "https://avatars.githubusercontent.com/u/131034722?v=4",
  profileImageAlt: "Jesús Gil - Professional headshot"
};

export const socialLinks: SocialLink[] = [
  {
    name: "LINKEDIN",
    description: "About me",
    url: "https://www.linkedin.com/in/jesus-r-gil/",
    icon: "linkedin",
    external: true
  },
  {
    name: "MY PERSONAL GITHUB", 
    description: "my projects",
    url: "https://github.com/JesusRgil",
    icon: "github",
    external: true
  },
  {
    name: "COLLABORATION",
    description: "Work with me",
    url: "mailto:fariasjesusrodolfo@gmail.com",
    icon: "collaboration",
    external: true
  },
  {
    name: "CONTACT ME",
    description: "Telegram",
    url: "https://t.me/Jr_Gil",
    icon: "telegram",
    external: true
  }
];

// Validación de configuración
export const validateConfig = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Validar URLs de social links
  socialLinks.forEach((link, index) => {
    if (!isValidUrl(link.url)) {
      errors.push(`Invalid URL in social link ${index + 1}: ${link.url}`);
    }
  });
  
  // Validar email en colaboración
  for (const link of socialLinks) {
    if (link.name === "COLLABORATION" && link.url.indexOf('mailto:') === 0) {
      const email = link.url.replace('mailto:', '');
      if (!isValidEmail(email)) {
        errors.push(`Invalid email in collaboration link: ${email}`);
      }
      break;
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

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