"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Locale, getEmoji, i18n } from "@/i18n.config";

export function LocaleSelect({ lang }: { lang: Locale}) {
  const router = useRouter();

  const onLocaleChange = ({ currentTarget }: FormEvent<HTMLSelectElement>) => {
    router.replace(`/${currentTarget.value}`);
  }

  return (
    <select defaultValue={lang} onChange={onLocaleChange}>
      {i18n.locales.map((locale) => (
        <option key={locale} value={locale}>
          {`${locale.toUpperCase()} ${getEmoji(locale)}`}
        </option>
      ))}
    </select>
  );
}
