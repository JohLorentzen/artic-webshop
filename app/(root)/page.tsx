// pages/index.js

import HeroImage from '@/components/ui/heroImage';
import Footer from '@/components/ui/footer';
import Content from '@/components/ui/content';
import ContentImage from '@/components/ui/contentImage';
import { homePageText } from '@/constants/text.no';
import { linkText } from '@/constants/text.no';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@/components/ui/menubar';

export default function Home() {
  return (
    <div className="home">
      <header>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{linkText.portifolio}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>{linkText.subPortifolio[0]}</MenubarItem>
              <MenubarItem>{linkText.subPortifolio[1]}</MenubarItem>
              <MenubarItem>{linkText.subPortifolio[2]}</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{linkText.shop}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>{linkText.subShop[0]}</MenubarItem>
              <MenubarItem>{linkText.subShop[1]}</MenubarItem>
              <MenubarItem>{linkText.subShop[2]}</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{linkText.aboutMe}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>{linkText.subAboutMe[0]}</MenubarItem>
              <MenubarItem>{linkText.subAboutMe[1]}</MenubarItem>
              <MenubarItem>{linkText.subAboutMe[2]}</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>
      <main>
        <HeroImage
          src="/icons/assets/hero-image.jpeg"
          alt={homePageText.heroAltText}
          title={homePageText.heroText}
          subtitle={homePageText.subText}
        />
        <Content className="pb-24 pt-10 lg:grid lg-grid-cols-3 sm:pb-32 lg:gap-x-0 xl-gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div>
            <div className="flex h-screen bg-customBlueDark bg-[url('/icons/peaks.svg')] bg-cover bg-center p-6">
              <div className="flex-1 flex items-center justify-center">
                <div className="glassmorphism p-8 rounded-lg shadow-lg text-center">
                  <h2 className="text-customOrange text-4xl font-bold mb-4">
                    {homePageText.contentTitle}
                  </h2>
                  <p className="border-customGrey p-4 text-customWhite text-xl font-bold">
                    {homePageText.contentText}
                  </p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="transform rotate-3 transition-transform duration-500 hover:rotate-0 rounded-lg shadow-lg">
                  <ContentImage
                    src="/icons/assets/northernLights.jpeg"
                    alt={homePageText.contentImageAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </Content>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
