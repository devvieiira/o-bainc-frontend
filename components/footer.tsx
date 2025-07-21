import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="w-full px-2 z-10 ">
      <div className="z-10 flex flex-col items-center xl:px-10 justify-center px-5 glass w-full rounded-2xl overflow-clip antialiased">
        <div className="xl:grid xl:grid-cols-5 py-10 w-full">
          <div className="pb-10 flex flex-col xl:col-span-2 xl:items-center xl:justify-self-start">
            <div className="flex flex-col mb-[14px] space-y-2 items-center justify-center ">
              <Image
                className="max-w-[170px] max-h-[25px]"
                src={'/logo.svg'}
                alt="o-bainc logo"
                width={170}
                height={24}
              />
              <span>Inclusão começa aqui</span>
            </div>
            <div className="flex space-x-3 w-full mt-8 items-center justify-center ">
              <Link href={'/#'}>
                <Image
                  src={'/linkedin.svg'}
                  alt="linkedin logo"
                  width={45}
                  height={45}
                />
              </Link>
              <Link href={'/#'}>
                <Image
                  src={'/instagram.svg'}
                  alt="instagram logo"
                  width={45}
                  height={45}
                />
              </Link>
              <Link href={'/#'}>
                <Image
                  src={'/whatsapp.svg'}
                  alt="whatsapp logo"
                  width={45}
                  height={45}
                />
              </Link>
            </div>
          </div>

          <div className="w-full md:grid md:grid-cols-3 md:gap-x-4 xl:contents">
            <div className="pl-5 pb-12 flex flex-col space-y-3">
              <h3>CORPORATIVO</h3>
              <div>
                <ul className="space-y-1">
                  <li className="">Soluções</li>
                  <li className="">Mercado</li>
                  <li className="">Corporativo</li>
                  <li className="">Relações com Investidores</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:contents">
              {/* SEÇÃO 3: PRODUTOS */}
              <div className="space-y-4 pl-5 pb-8 flex flex-col">
                <h3>PRODUTOS</h3>
                <div className="space-y-1">
                  <p>CRIP-D®</p>
                  <p>ADG®</p>
                  <p>ICM®</p>
                  <p>Orbitable®</p>
                </div>
              </div>

              {/* SEÇÃO 4: SOBRE */}
              <div className="space-y-4 pl-5 md:pl-0">
                <h3>SOBRE</h3>
                <div className="space-y-1">
                  <p>Quem Somos</p>
                  <p>Tecnologia</p>
                  <p>Inovação & Impacto</p>
                  <p>Contato</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 xl:space-y-2 w-full flex flex-col">
          <Separator className="bg-space-mid" />
          <div className="w-full xl:flex xl:items-start xl:justify-end">
            <div className="text-space-mid w-full space-y-4">
              <ul className="flex items-center space-x-6 xl:justify-self-start justify-center text-center">
                <li className="hover:text-white">
                  <Link href={'#'}>Termos de Uso</Link>
                </li>
                <li className="hover:text-white">
                  <Link href={'#'}>Política de Privacidade</Link>
                </li>
              </ul>
            </div>
            <div className="w-full flex text-space-mid items-center xl:justify-end justify-center text-center">
              <p className="mb-[14px] max-w-4/5">
                O-Bainc © 2025 – Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
