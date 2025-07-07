import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const navLinks = [
    { href: '#', text: 'Soluções' },
    { href: '#', text: 'Produtos' },
    { href: '#', text: 'Corporativo' },
    { href: '#', text: 'Sobre' },
    { href: '#', text: 'Contato' },
  ];
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <header className="fixed top-0 right-0 left-0 z-10 flex w-full items-center justify-between p-10">
        <div className="glass flex h-14 w-56 items-center justify-center rounded-2xl py-2">
          <Image
            className="h-auto w-full p-4"
            src={'/logo.svg'}
            alt="o-bainc logo"
            width={170}
            height={55}
          />
        </div>
        <div className="glass flex h-12 w-12 items-center justify-center rounded-2xl border-white/20 bg-white/10 p-2 md:h-14 md:w-fit lg:w-fit">
          <ul className="flex h-full w-full items-center justify-center gap-x-2 px-4 font-bold">
            {navLinks.map((link) => (
              <li
                key={link.text}
                className="hidden rounded-xl px-3 py-2 transition-all hover:bg-white hover:text-black lg:block"
              >
                <a href={link.href} className="">
                  {link.text}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-center rounded-xl p-1 text-center transition-all hover:bg-white hover:text-black">
              <Popover>
                <PopoverTrigger asChild>
                  <Menu className="h-6 w-6" />
                </PopoverTrigger>
                <PopoverContent align="end" sideOffset={12} alignOffset={-28} className="w-fit">
                  <ul className="flex flex-col gap-2 p-2 text-center font-bold">
                    {navLinks.map((link) => (
                      <li
                        key={link.text}
                        className="rounded-xl py-2 transition-all hover:bg-white hover:text-black md:hidden"
                      >
                        <a href={link.href} className="w-full p-3 text-center">
                          {link.text}
                        </a>
                      </li>
                    ))}
                    <li className="rounded-xl py-2 transition-all hover:bg-white hover:text-black">
                      <a href={'#'} className="w-full p-3 text-center">
                        outras opções
                      </a>
                    </li>
                    <li className="rounded-xl py-2 transition-all hover:bg-white hover:text-black">
                      <a href={'#'} className="w-full p-3 text-center">
                        outras opções
                      </a>
                    </li>
                    <li className="rounded-xl py-2 transition-all hover:bg-white hover:text-black">
                      <a href={'#'} className="w-full p-3 text-center">
                        outras opções
                      </a>
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            </li>
          </ul>
        </div>
      </header>

      <div className="m-4 w-full px-4">
        <section className="relative flex h-[70vh] w-full flex-col items-center justify-start overflow-hidden rounded-4xl rounded-t-4xl bg-white bg-[linear-gradient(305deg,_#ECF8F7_0%,_rgba(16,21,105,0.7)_50%,_rgba(8,11,54,1)_100%)] text-center lg:h-[95vh] lg:rounded-4xl">
          <div className="h-auto w-full md:hidden">
            <Image
              src={'/header-mobile.png'}
              alt="Abstração gráfica de ondas de luz"
              className="h-auto w-full"
              width={1400}
              height={839}
            />
          </div>

          <div className="hidden h-auto w-full md:flex">
            <Image
              src={'/header-desktop.png'}
              alt="Abstração gráfica de ondas de luz"
              width={1920}
              height={900}
              className="h-auto w-full"
            />
          </div>

          <div className="absolute bottom-0 z-10 space-y-6 px-16 py-16 text-white">
            <h1 className="max-w-xs text-2xl leading-tight font-semibold md:max-w-xl md:text-3xl">
              Quebrando Barreiras com Inteligência: O Futuro do Crédito Começa Aqui
            </h1>
            <Button className="text-md h-fit rounded-xl px-8 py-3">Conheça nossas soluções</Button>
          </div>
        </section>

        <section className="flex w-full items-end justify-end px-3.5 py-10 xl:mt-5 xl:px-15">
          <div className="flex w-full items-center justify-end xl:mx-40">
            <p className="mb-3.5 ml-14 max-w-[630px] text-justify md:mr-4 md:ml-2">
              A O-Bainc® combina inteligência artificial, identidade digital e avaliação de risco
              em tempo real para transformar o acesso ao crédito em mercados invisíveis, com
              segurança, inclusão e ética.
            </p>
          </div>
        </section>
        <section>
          <div className="px-14 pb-14">
            <div className="mx-44 flex justify-center pt-14 pb-7">
              <p className="max-w-[700px] text-center text-[32px] font-semibold text-white">
                Bilhões estão excluídos. Nós estamos mudando isso
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center px-14">
          <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 border-b border-[#7E86B0] pr-10 pb-2 pl-10 md:mb-8 md:border-b-0 lg:mb-0 lg:pl-0">
              <h2 className="max-w-[281px] text-center text-6xl">±4</h2>
              <p className="mb-3.5 max-w-[281px] text-center">
                bilhões de pessoas no mundo são invisíveis ao crédito
              </p>
            </div>
            <div className="space-y-2 border-b border-[#7E86B0] pt-4 pr-10 pb-2 pl-10 md:mb-8 md:border-b-0 md:border-l md:border-[#7E86B0] md:pt-0 md:pb-0 lg:mb-0">
              <h2 className="max-w-[281px] text-center text-6xl">+65</h2>
              <p className="mb-3.5 max-w-[281px] text-center">
                milhões de brasileiros invísiveis ao crédito
              </p>
            </div>
            <div className="space-y-2 border-b border-[#7E86B0] pt-4 pr-10 pb-2 pl-10 md:mt-6 md:border-b-0 md:pt-0 md:pb-0 lg:mt-0 lg:border-l lg:border-[#7E86B0]">
              <h2 className="max-w-[281px] text-center text-6xl">+300</h2>
              <p className="mb-3.5 max-w-[281px] text-center">
                milhões de latino-americanos carentes de serviço financeiros
              </p>
            </div>
            <div className="space-y-2 pt-4 pl-10 md:mt-6 md:border-l md:border-[#7E86B0] md:pt-0 lg:mt-0">
              <h2 className="max-w-[281px] text-center text-6xl">IA</h2>
              <p className="mb-3.5 max-w-[281px] text-center">que reduz inadimplência em até 30%</p>
            </div>
          </div>
        </section>
        <div className="flex w-full flex-col items-center justify-center md:pl-0">
          <div className="flex justify-center pt-14">
            <p className="mb-3.5 text-[32px]">O que nos diferencia</p>
          </div>
          <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="min-h mx-auto flex max-w-[736px] flex-col items-center rounded-4xl bg-[#21234A] px-5 pt-5 pb-9 md:mx-0 md:h-[498px] md:max-w-[420px] md:pb-0">
              <Image
                src={'/ia.png'}
                alt="Abstração gráfica de ondas de luz"
                width={380}
                height={285}
                className="mb-3.5 hidden rounded-2xl md:flex"
              />
              <Image
                src={'/ia.png'}
                alt="Abstração gráfica de ondas de luz"
                width={696}
                height={522}
                className="mb-3.5 rounded-2xl md:hidden"
              />
              <div className="pt-2">
                <h3 className="pb-4 text-center text-[20px]">IA para o Bem</h3>
                <p className="text-center">
                  Usamos IA, ciência de dados e engenharia avançada para resolver problemas reais.
                  Não apenas para ganhar eficiência, mas para gerar inclusão.
                </p>
              </div>
            </div>
            <div className="min-h mx-auto flex max-w-[736px] flex-col items-center rounded-4xl bg-[#21234A] px-5 pt-5 pb-9 md:mx-0 md:h-[498px] md:max-w-[420px] md:pb-0">
              <Image
                src={'/commitment.png'}
                alt="Abstração gráfica de ondas de luz"
                width={380}
                height={285}
                className="mb-3.5 hidden rounded-2xl md:flex"
              />
              <Image
                src={'/commitment.png'}
                alt="Abstração gráfica de ondas de luz"
                width={696}
                height={522}
                className="mb-3.5 rounded-2xl md:hidden"
              />
              <div className="pt-2">
                <h3 className="pb-4 text-center text-[20px]">Compromisso com o humano</h3>
                <p className="text-center">
                  Cada linha de código que escrevemos é para ampliar oportunidades, empoderar
                  indivíduos e fomentar ecossistemas financeiros mais justos.
                </p>
              </div>
            </div>
            <div className="min-h mx-auto flex max-w-[736px] flex-col items-center rounded-4xl bg-[#21234A] px-5 pt-5 pb-9 md:col-span-2 md:h-[498px] md:max-w-[420px] md:pb-0 lg:col-span-1 lg:mx-0">
              <Image
                src={'/ia.png'}
                alt="Abstração gráfica de ondas de luz"
                width={380}
                height={285}
                className="mb-3.5 hidden rounded-2xl md:flex"
              />
              <Image
                src={'/ia.png'}
                alt="Abstração gráfica de ondas de luz"
                width={696}
                height={522}
                className="mb-3.5 rounded-2xl md:hidden"
              />
              <div className="pt-2">
                <h3 className="pb-4 text-center text-[20px]">Ética e soberania de dados</h3>
                <p className="text-center">
                  Nosso modelo garante que os tomadores mantenham controle total sobre suas
                  informações pessoais. Transparência, segurança e respeito são inegociáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
