import Link from 'next/link';
import { Container } from './ui/container';

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">STORE NAME</h1>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
