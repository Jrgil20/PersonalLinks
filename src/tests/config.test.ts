/**
 * Tests para la configuración personal
 * Valida que todos los datos estén correctos y las URLs sean válidas
 * 
 * Para ejecutar: npm install vitest --save-dev
 * Luego: npm test
 */

// @ts-ignore - Vitest se instalará como dependencia de desarrollo
import { describe, it, expect } from 'vitest';
import { personalInfo, socialLinks, validateConfig } from '../config/personal';

describe('Configuración Personal', () => {
  describe('Información Personal', () => {
    it('debe tener un nombre válido', () => {
      expect(personalInfo.name).toBe('JESUS GIL');
      expect(personalInfo.name.length).toBeGreaterThan(0);
    });

    it('debe tener un título válido', () => {
      expect(personalInfo.title).toBe('Engineer and student');
      expect(personalInfo.title.length).toBeGreaterThan(0);
    });

    it('debe tener una imagen de perfil válida', () => {
      expect(personalInfo.profileImage).toBe('https://avatars.githubusercontent.com/u/131034722?v=4');
      expect(personalInfo.profileImage).toMatch(/^https:\/\//);
    });

    it('debe tener un alt text descriptivo', () => {
      expect(personalInfo.profileImageAlt).toBe('Jesús Gil - Professional headshot');
      expect(personalInfo.profileImageAlt.length).toBeGreaterThan(0);
    });
  });

  describe('Enlaces Sociales', () => {
    it('debe tener al menos un enlace social', () => {
      expect(socialLinks.length).toBeGreaterThan(0);
    });

    it('debe tener LinkedIn configurado', () => {
      let linkedin;
      for (const link of socialLinks) {
        if (link.name === 'LINKEDIN') {
          linkedin = link;
          break;
        }
      }
      expect(linkedin).toBeDefined();
      expect(linkedin?.url).toBe('https://www.linkedin.com/in/jesus-r-gil/');
      expect(linkedin?.external).toBe(true);
    });

    it('debe tener GitHub configurado', () => {
      let github;
      for (const link of socialLinks) {
        if (link.name === 'MY PERSONAL GITHUB') {
          github = link;
          break;
        }
      }
      expect(github).toBeDefined();
      expect(github?.url).toBe('https://github.com/JesusRgil');
      expect(github?.external).toBe(true);
    });

    it('debe tener email de colaboración configurado', () => {
      let collaboration;
      for (const link of socialLinks) {
        if (link.name === 'COLLABORATION') {
          collaboration = link;
          break;
        }
      }
      expect(collaboration).toBeDefined();
      expect(collaboration?.url).toBe('mailto:fariasjesusrodolfo@gmail.com');
      expect(collaboration?.external).toBe(true);
    });

    it('debe tener Telegram configurado', () => {
      let telegram;
      for (const link of socialLinks) {
        if (link.name === 'CONTACT ME') {
          telegram = link;
          break;
        }
      }
      expect(telegram).toBeDefined();
      expect(telegram?.url).toBe('https://t.me/Jr_Gil');
      expect(telegram?.external).toBe(true);
    });

    it('todos los enlaces deben tener propiedades requeridas', () => {
      socialLinks.forEach((link, index) => {
        expect(link.name, `Enlace ${index + 1} debe tener nombre`).toBeTruthy();
        expect(link.description, `Enlace ${index + 1} debe tener descripción`).toBeTruthy();
        expect(link.url, `Enlace ${index + 1} debe tener URL`).toBeTruthy();
        expect(link.icon, `Enlace ${index + 1} debe tener icono`).toBeTruthy();
        expect(typeof link.external, `Enlace ${index + 1} debe tener propiedad external`).toBe('boolean');
      });
    });
  });

  describe('Validación de Configuración', () => {
    it('debe pasar todas las validaciones', () => {
      const validation = validateConfig();
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('debe validar URLs correctamente', () => {
      const validUrls = [
        'https://www.linkedin.com/in/jesus-r-gil/',
        'https://github.com/JesusRgil',
        'https://t.me/Jr_Gil'
      ];

      validUrls.forEach(url => {
        expect(() => new URL(url)).not.toThrow();
      });
    });

    it('debe validar email correctamente', () => {
      const email = 'fariasjesusrodolfo@gmail.com';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(email)).toBe(true);
    });
  });
}); 