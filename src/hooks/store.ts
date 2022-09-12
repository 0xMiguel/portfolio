import create from 'zustand';
import { persist } from 'zustand/middleware';

interface TranslationState {
  isEnglish: boolean;
  isSpanish: boolean;
  changeLanguage: (language: 'english' | 'spanish') => void;
}

export const useTranslationState = create<TranslationState>()(
  persist(
    (set) => ({
      isEnglish: true,
      isSpanish: false,
      changeLanguage: (language: 'english' | 'spanish') => {
        if (language === 'english') {
          set(() => ({ isEnglish: true, isSpanish: false }));
        } else if (language === 'spanish') {
          set(() => ({ isSpanish: true, isEnglish: false }));
        }
      },
    }),
    {
      name: 'migueldev',
    }
  )
);
