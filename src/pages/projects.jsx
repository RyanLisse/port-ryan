import Image from 'next/future/image'
import Head from 'next/head';
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoNeuVibes from '@/images/projects/neuvibez.png';
import logoAisha from '@/images/projects/iamaisha.nl.jpg';
import logoPirateShop from '@/images/projects/pirateshop.jpg';
import logoSeamstress from '@/images/projects/seamstress.png';
import logoOgPass from '@/images/projects/NFT.png';

const projects = [
  {
    name: 'Tokengated MintPage',
    description:
      'An NFT Mintpage where the content is tokengated.Only people with the NFT can see the content behind the page',
    link: { href: 'https://tokengated-3rdweb.vercel.app/', label: 'live demo' },

    logo: logoOgPass,
  },
  {
    name: 'Neu-Vibez',
    description:
      'A Web3 TikTok for music videos.',
    link: { href: 'https://neu-vibes-web2.vercel.app/', label: 'Neu-Vibes-Web3' },

    logo: logoNeuVibes,
  },
  {
    name: 'Pirate Shop Solana',
    description:
      'A simple storefront built on the Solana blockchain written in typescript and rust.',
    link: { href: 'https://buildspace-pirateshop.vercel.app/', label: 'live demo' },

    logo: logoPirateShop,
  },
  {
    name: 'iamaisha.nl',
    description:
      'An e-commerce store for multi-platinum artist I Am Aisha.',
    link: { href: 'https://www.iamaisha.nl/masterclass/', label: 'website' },

    logo: logoAisha,
  },
  {
    name: 'Seamstress',
    description:
      'An e-commerce store demo website',
    link: { href: 'https://seamstress-166.superhi.com/', label: 'website' },

    logo: logoSeamstress,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}


export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Ryan Lisse</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center w-64 h-64 bg-white ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className=""

                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition shadow-md shadow-zinc-800/5 text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
