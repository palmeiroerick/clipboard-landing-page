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
      <header>
        <Logo size="lg" />
        <Title as="h1">A history of everything you copy</Title>
        <Text>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </Text>
        <div>
          <Button type="iOS" />
          <Button type="Mac" />
        </div>
      </header>
      <main>
        <section>
          <div>
            <Title as="h2">Keep track of your snippets</Title>
            <Text>
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </Text>
          </div>
          <div>
            <DeviceImage src="/image-computer.png" />
            <div>
              <div>
                <Title as="h3">Quick Search</Title>
                <Text>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </Text>
              </div>
              <div>
                <Title as="h3">iCloud Sync</Title>
                <Text>
                  Instantly saves and syncs snippets across all your devices.
                </Text>
              </div>
              <div>
                <Title as="h3">Complete History</Title>
                <Text>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </Text>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <Title as="h3">Access Clipboard anywhere</Title>
            <Text>
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </Text>
          </div>
          <DeviceImage src="/image-devices.png" />
        </section>
        <section>
          <div>
            <Title as="h2">Supercharge your workflow</Title>
            <Title as="h3">
              We’ve got the tools to boost your productivity.
            </Title>
          </div>
          <div>
            <div>
              <Icon icon="blacklist" />
              <Title as="h3">Create blacklists</Title>
              <Text>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </Text>
            </div>
            <div>
              <Icon icon="text" />
              <Title as="h3">Plain text snippets</Title>
              <Text>
                Remove unwanted formatting from copied text for a consistent
                look.
              </Text>
            </div>
            <div>
              <Icon icon="preview" />
              <Title as="h3">Sneak preview</Title>
              <Text>
                Quick preview of all snippets on your Clipboard for easy access.
              </Text>
            </div>
          </div>
        </section>
        <section>
          <Company company="google" />
          <Company company="ibm" />
          <Company company="microsoft" />
          <Company company="hp" />
          <Company company="vector-graphics" />
        </section>
        <section>
          <div>
            <Title as="h2">Clipboard for iOS and Mac OS</Title>
            <Text>
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you’re ready to start adding to your clipboard.
            </Text>
          </div>
          <div>
            <Button type="iOS" />
            <Button type="Mac" />
          </div>
        </section>
      </main>
      <footer>
        <Logo size="sm" />
        <nav>
          <div>
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
          </div>
          <div>
            <Link>Privacy Policy</Link>
            <Link>Press Kit</Link>
          </div>
          <div>
            <Link>Install Guide</Link>
          </div>
        </nav>
        <div>
          <SocialIcon icon="facebook" />
          <SocialIcon icon="twitter" />
          <SocialIcon icon="instagram" />
        </div>
      </footer>
    </>
  );
}
