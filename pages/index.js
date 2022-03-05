import Head from "next/head";
import Image from "next/image";
import useTranslation from "../hooks/useTranslation";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { t, locale, setLocale } = useTranslation();

  const switchLanguage = (lang) => {
    if (locale === "it") setLocale("en");
    else setLocale("it");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Build your own useTranslation hook with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="https://github.com/a-chris/achris.me/blob/main/public/resources/avatar.webp?raw=true" width={100} height={100} layout="intrinsic" alt="my avatar" />
        <h1 className={styles.title}>{t("WELCOME_MSG")}</h1>
        {t("WELCOME_MSG_COLORED")}
        <button onClick={switchLanguage}>{t("SWITCH_LOCALE")}</button>
        <div className={styles.link_container}>
          <p>{t("PERSONAL_WEBSITE")}:</p>
          <a href="https://achris.me">www.achris.me</a>
        </div>
      </main>
    </div>
  );
}
