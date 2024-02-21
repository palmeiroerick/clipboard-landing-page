import Button from "@/components/Button";
import Company from "@/components/Company";
import DeviceImage from "@/components/DeviceImage";
import Icon from "@/components/Icon";
import Link from "@/components/Link";
import Logo from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";
import Text from "@/components/Text";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center gap-12 bg-headerMobile bg-contain bg-top bg-no-repeat px-6 pt-32 lg:bg-headerDesktop">
        <Logo size="lg" />
        <div className="mt-4 flex flex-col items-center gap-2 lg:w-[750px] lg:gap-5">
          <Title as="h1">A history of everything you copy</Title>
          <Text>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </Text>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button type="iOS" />
          <Button type="Mac" />
        </div>
      </header>
      <main className="px-6">
        <section className="flex flex-col items-center gap-16 pt-32">
          <div className="flex flex-col gap-4 lg:w-[750px] ">
            <Title as="h2">Keep track of your snippets</Title>
            <Text>
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </Text>
          </div>
          <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-0 ">
            <DeviceImage src="/image-computer.png" />
            <div className="flex flex-col gap-12 lg:ml-24">
              <div className="flex flex-col gap-2 lg:w-[460px]">
                <Title as="h3" className="text-start">
                  Quick Search
                </Title>
                <Text className="text-start">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </Text>
              </div>
              <div className="flex flex-col gap-2 lg:w-[460px]">
                <Title as="h3" className="text-start">
                  iCloud Sync
                </Title>
                <Text className="text-start">
                  Instantly saves and syncs snippets across all your devices.
                </Text>
              </div>
              <div className="flex flex-col gap-2 lg:w-[460px]">
                <Title as="h3" className="text-start">
                  Complete History
                </Title>
                <Text className="text-start">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </Text>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-12 pt-32">
          <div className="flex flex-col gap-4 lg:w-[750px]">
            <Title as="h2">Access Clipboard anywhere</Title>
            <Text>
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </Text>
          </div>
          <DeviceImage src="/image-devices.png" />
        </section>
        <section className="flex flex-col items-center gap-16 pt-20">
          <div className="flex flex-col gap-4 lg:w-[750px]">
            <Title as="h2">Supercharge your workflow</Title>
            <Text>We’ve got the tools to boost your productivity.</Text>
          </div>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
            <div className="flex flex-col items-center gap-5 lg:w-[420px]">
              <Icon icon="blacklist" />
              <Title as="h3">Create blacklists</Title>
              <Text>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </Text>
            </div>
            <div className="flex flex-col items-center gap-5 lg:w-[420px]">
              <Icon icon="text" />
              <Title as="h3">Plain text snippets</Title>
              <Text>
                Remove unwanted formatting from copied text for a consistent
                look.
              </Text>
            </div>
            <div className="flex flex-col items-center gap-5 lg:w-[420px]">
              <Icon icon="preview" />
              <Title as="h3">Sneak preview</Title>
              <Text>
                Quick preview of all snippets on your Clipboard for easy access.
              </Text>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-12 pt-32 lg:m-auto lg:flex-row lg:gap-24">
          <Company company="google" />
          <Company company="ibm" />
          <Company company="microsoft" />
          <Company company="hp" />
          <Company company="vector-graphics" />
        </section>
        <section className="flex flex-col items-center gap-16 pt-32">
          <div className="flex flex-col gap-4 lg:w-[750px]">
            <Title as="h2">Clipboard for iOS and Mac OS</Title>
            <Text>
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you’re ready to start adding to your clipboard.
            </Text>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Button type="iOS" />
            <Button type="Mac" />
          </div>
        </section>
      </main>
      <footer className="mt-32 flex flex-col items-center gap-10 bg-[#f5f6f8] px-6 py-14 lg:flex-row lg:justify-center lg:gap-32">
        <Logo size="sm" />
        <nav className="flex flex-col gap-6 lg:flex-row lg:gap-20">
          <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-3">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
          </div>
          <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-3">
            <Link>Privacy Policy</Link>
            <Link>Press Kit</Link>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <Link>Install Guide</Link>
          </div>
        </nav>
        <div className="flex gap-9 ml-36">
          <SocialIcon icon="facebook" />
          <SocialIcon icon="twitter" />
          <SocialIcon icon="instagram" />
        </div>
      </footer>
    </>
  );
}
