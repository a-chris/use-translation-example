import { useRouter } from "next/router";
import en from "../public/static/locales/en";
import it from "../public/static/locales/it";

const TRANSLATIONS = { en, it };

export default function useTranslation() {
  const router = useRouter();
  const { locale, asPath } = router;

  const setLocale = (locale) => router.push(asPath, asPath, { locale });

  const t = (keyString) => TRANSLATIONS[locale][keyString];

  return { t, locale, setLocale };
}
