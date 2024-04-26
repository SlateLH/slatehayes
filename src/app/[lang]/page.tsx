import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { LocaleSelect } from "./components/LocaleSelect";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="fixed top-4 right-4">
        <LocaleSelect lang={lang} />
      </div>
      <main className="w-2/3 mx-auto flex flex-col items-center my-8 p-8 rounded-lg shadow-lg">
          <div className="w-full flex items-center justify-between border-b-4 pb-1">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold bg-gradient-to-br from-indigo-600 to-sky-400 bg-clip-text text-transparent">
                Slate Hayes
              </h1>
              <span className="text-2xl">
                {dictionary.page.home.header.jobTitle}
              </span>
            </div>
            <span className="flex items-center gap-1 self-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">
                {`Porto Alegre, RS, ${dictionary.brazil}`}
              </span>
            </span>
          </div>
          <div className="w-full flex items-start justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 self-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">
                  {`${dictionary.page.home.subheader.phone}:`}
                </span>
              </span>
              <div className="flex flex-col">
                <Link href="tel:+5554996962828">{`+55 (54) 99696-2828 (${dictionary.brazil})`}</Link>
                <Link href="tel:+16602271430">{`+1 (660) 227-1430 (${dictionary.usa})`}</Link>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Link className="flex items-center gap-2" href="mailto:slatelhayes@gmail.com">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <span className="font-medium">
                    Email:
                  </span>
                </span>
                slatelhayes@gmail.com
              </Link>
              <Link className="flex items-center gap-2" href="https://github.com/SlateLH">
                <span className="flex items-center gap-1">
                  <Image
                    src="/github-mark.svg"
                    alt="GitHub mark"
                    width={16}
                    height={16}
                    priority
                  />
                  <span className="font-medium">
                    GitHub:
                  </span>
                </span>
                SlateLH
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col pt-4">
            <div className="flex items-center gap-1 border-b-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>
              <h3 className="text-xl font-bold">
                {dictionary.page.home.workExperience.title}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold">
                      Oracle Cerner
                    </h4>
                    <span className="text-sm">
                      {`Kansas City, MO, ${dictionary.usa}`}
                    </span>
                  </div>
                  {`${dictionary.page.home.misc.february} 2019 - ${dictionary.page.home.misc.december} 2023`}
                </div>
                <span className="text-sm font-semibold">
                  Associate Senior Software Engineer
                </span>
                <div className="flex flex-col ml-4 mt-2">
                  <div className="flex gap-2">
                    <span className="font-semibold">Scheduling</span>
                    <span>{`${dictionary.page.home.misc.january} 2020 - ${dictionary.page.home.misc.december} 2023`}</span>
                  </div>
                  <ul className="list-disc ml-5">
                    <li>{dictionary.page.home.workExperience.features}</li>
                    <li>{dictionary.page.home.workExperience.frameworks}</li>
                    <li>{dictionary.page.home.workExperience.tests}</li>
                    <li>{dictionary.page.home.workExperience.jenkins}</li>
                    <li>{dictionary.page.home.workExperience.tech}</li>
                    <li>{dictionary.page.home.workExperience.scrum}</li>
                    <li>{dictionary.page.home.workExperience.qol}</li>
                    <li>
                      <ul className="list-disc ml-5">
                        <li>{dictionary.page.home.workExperience.vsCode}</li>
                        <li>{dictionary.page.home.workExperience.chrome}</li>
                        <li>{dictionary.page.home.workExperience.docker}</li>
                      </ul>
                    </li>
                    <li>{dictionary.page.home.workExperience.mentor}</li>
                  </ul>
                </div>
                <div className="flex flex-col ml-4 mt-2">
                  <div className="flex gap-2">
                    <span className="font-semibold">Production Engineering</span>
                    <span>{`${dictionary.page.home.misc.april} 2019 - ${dictionary.page.home.misc.december} 2019`}</span>
                  </div>
                  <ul className="list-disc ml-5">
                    <li>{dictionary.page.home.workExperience.support}</li>
                    <li>{dictionary.page.home.workExperience.package}</li>
                    <li>{dictionary.page.home.workExperience.clients}</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold">
                      Cerner Corporation
                    </h4>
                    <span className="text-sm">
                    {`Kansas City, MO, ${dictionary.usa}`}
                    </span>
                  </div>
                  {`${dictionary.page.home.misc.may} 2018 - ${dictionary.page.home.misc.august} 2018`}
                </div>
                <span className="text-sm font-semibold">
                  {dictionary.page.home.workExperience.summer}
                </span>
                <ul className="list-disc ml-5">
                  <li>{dictionary.page.home.workExperience.intern}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col pt-8">
            <div className="flex items-center gap-1 border-b-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
              <h3 className="text-xl font-bold">
                {dictionary.page.home.education.title}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold">
                      Missouri State University
                    </h4>
                    <span className="text-sm">
                    {`Springfield, MO, ${dictionary.usa}`}
                    </span>
                  </div>
                  {`${dictionary.page.home.misc.august} 2015 - ${dictionary.page.home.misc.december} 2018`}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">
                    {dictionary.page.home.education.computerScience}
                  </span>
                  <span>
                    {dictionary.page.home.education.mathematics}
                  </span>
                  <span>
                    3.96 GPA
                  </span>
                </div>
                <ul className="list-disc ml-5">
                  <li>{dictionary.page.home.education.courses}</li>
                  <li>{dictionary.page.home.education.finalProject}</li>
                  <li>{dictionary.page.home.education.acm}</li>
                  <li>{dictionary.page.home.education.kme}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col pt-8">
            <div className="flex items-center gap-1 border-b-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold">
                {dictionary.page.home.skills.title}
              </h3>
            </div>
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  {`${dictionary.page.home.skills.spokenLanguages}:`}
                </span>
                <div className="grow flex items-center justify-start gap-8">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      {dictionary.page.home.skills.english}
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.native}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      {dictionary.page.home.skills.portuguese}
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold self-start shrink-0">
                  {`${dictionary.page.home.skills.programmingLanguages}:`}
                </span>
                <div className="grow flex items-center justify-start gap-x-8 gap-y-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Java
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.advanced}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      JavaScript / TypeScript
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.advanced}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Ruby
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Python
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      SQL
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  {`${dictionary.page.home.skills.frameworks}:`}
                </span>
                <div className="grow flex items-center justify-start gap-8">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      React
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.advanced}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Ruby on Rails
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      NestJS
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      NextJS
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  {`${dictionary.page.home.skills.concepts}:`}
                </span>
                <div className="grow flex items-center justify-start gap-8">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      OOP
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.advanced}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      REST
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.advanced}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Testing
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.advanced}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      CI / CD
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  {`${dictionary.page.home.skills.tools}:`}
                </span>
                <div className="grow flex items-center justify-start gap-8">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Git
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.advanced}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Docker
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      Jenkins
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      AWS
                    </span>
                    <span className="text-sm">
                      {dictionary.page.home.skills.proficient}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
