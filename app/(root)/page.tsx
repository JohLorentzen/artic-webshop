// pages/index.js

import HeroImage from '@/components/ui/heroImage';
import Footer from '@/components/ui/footer';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@/components/ui/menubar';

export default function Home() {
  return (
    <div>
      <header>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Portfolio</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Nature</MenubarItem>
              <MenubarItem>People</MenubarItem>
              <MenubarItem>Cars</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Shop</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>About Me</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>My Past</MenubarItem>
              <MenubarItem>Me Now</MenubarItem>
              <MenubarItem>Contact Me</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>
      <main>
        <HeroImage 
          src="/icons/assets/hero-image.jpg" 
          alt="Hero Image"
          title="Kristoffer Lorentzen"
          subtitle="Opplev den artiske naturen gjennom min linse"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
