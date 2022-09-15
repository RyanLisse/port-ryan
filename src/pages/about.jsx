import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  SpotifyIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ryan Lisse</title>
        <meta
          name="description"
          content="I'm Ryan Lisse. I live in Almere next to Amsterdam, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Ryan Lisse. I live in Almere a city next to Amsterdam, where I design the
              future.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, and
                wrote my first song when I was 10 years old, when i was 12 years old I was watching a documentary about Michael jackson and Quicy Jones Sr and told my mom that wanted to be like him and meet him someday.
                she told me to write down my goals and and so I did.
              </p>
              <p>
                The only thing I loved more than computers as a kid was music.
                .....
              </p>
              <p>
                👨🏿‍💻 I’m a creative, marketer and a full-stack web developer

                🎹 With 20+ years of experience in the music and entertainment scene

                ▶️ Songs i've worked on

                🖥 I have a passion for learning new technologies and I consider myself a self-solver/professional googler

                ₿ Passionate about the web3 space, I believe web3 can create a future where creators have all the tools to create their art and build, grow and monetize their communities

                🐶 Proud father of two kids and a dog

                🇳🇱 Born in Amsterdam roots from Suriname 🇸🇷

                🤓 Probably the coolest nerd you will ever meet
                To be continued!!
              </p>
              <p>

              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/ryanlisse" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/ryanlissemindset" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/ryanlisse" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/ryanlisse" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://open.spotify.com/playlist/5t088NuoWRH2E6y8GAWYwn?si=NwX9_h2gRkaPZtnBaq4Emw" icon={SpotifyIcon} className="mt-4">
                Listen on Spotify
              </SocialLink>
              <SocialLink
                href="mailto:ryan@ryanlisse.com"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                ryan@ryanlisse.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
