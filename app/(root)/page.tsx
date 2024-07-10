// pages/index.js

import HeroImage from '@/components/ui/heroImage';
import Footer from '@/components/ui/footer';
import Content from '@/components/ui/content';
import {homePageText} from '@/constants/text.no'
import {linkText} from '@/constants/text.no'
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
        <Content 
        src="/icons/assets/northernLights.jpeg"
        alt={homePageText.contentImageAlt}
        title={homePageText.contentTitle}
        text={homePageText.contentText}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
