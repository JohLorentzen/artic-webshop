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
    <div className=" flex flex-col min-h-screen">
      <header className="bg-customBlueDark p-4">
        <Menubar className="container mx-auto">
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
      <main className="flex-1">
        <HeroImage
          src="/icons/assets/hero-image.jpeg"
          alt={homePageText.heroAltText}
          title={homePageText.heroText}
          subtitle={homePageText.subText}
        />
        <section className="bg-customBlueDark bg-[url('/icons/peaks.svg')] bg-cover bg-center py-16 min-h-screen">
          <Content className="container mx-auto pt-32 pb-54 grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <div className="glassmorphism p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-customOrange text-4xl font-bold mb-4">
                  {homePageText.contentTitle}
                </h2>
                <p className=" p-4 text-customWhite text-xl font-bold">
                  {homePageText.contentText}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <ContentImage
                src="/icons/assets/northernLights.jpeg"
                alt={homePageText.contentImageAlt}
              />
            </div>
          </Content>
        </section>
        <section className="bg-customBlueDark bg-[url('/icons/waves.svg')] bg-cover bg-center py-16 min-h-screen">
          <div className="container mx-auto flex justify-center items-center h-full">
            <Content className="bg-customWhite p-8 rounded-lg shadow-lg lg:w-2/3 text-center">
              <div className="flex flex-col justify-center">
                <h1 className="p-4 text-customBlueDark text-2xl font-bold rounded-lg">
                  {homePageText.contentText2}
                </h1>
                <button className="bg-customOrange text-customWhite p-2 rounded-lg mt-4">
                  {linkText.shop}
                </button>
              </div>
            </Content>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
