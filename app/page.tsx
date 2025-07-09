import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const navLinks = [
    { href: "#", text: "Soluções" },
    { href: "#", text: "Produtos" },
    { href: "#", text: "Corporativo" },
    { href: "#", text: "Sobre" },
    { href: "#", text: "Contato" },
  ];
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <header className="w-full z-10 fixed flex items-center justify-between p-10 right-0 left-0 top-0">
        <div className="glass flex items-center justify-center py-3.5 rounded-2xl max-w-[200px] px-7 h-14">
          <Image
            className=""
            src={"/logo.svg"}
            alt="o-bainc logo"
            width={170}
            height={20}
          />
        </div>
        <div className="flex md:h-14 md:w-fit h-12 w-12 lg:w-fit items-center justify-center rounded-2xl border-white/20 bg-white/10 p-2 glass">
          <ul className="flex h-full w-full items-center justify-center gap-x-2 font-bold px-4">
            {navLinks.map((link) => (
              <li
                key={link.text}
                className="hidden lg:block rounded-xl hover:text-black hover:bg-white  transition-all px-3 py-2"
              >
                <a href={link.href} className="">
                  {link.text}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-center text-center p-1 rounded-xl hover:text-black hover:bg-white  transition-all">
              <Popover>
                <PopoverTrigger asChild>
                  <Menu className="h-6 w-6" />
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  sideOffset={12}
                  alignOffset={-28}
                  className="w-fit "
                >
                  <ul className="flex flex-col gap-2 p-2 text-center font-bold">
                    {navLinks.map((link) => (
                      <li
                        key={link.text}
                        className="py-2 md:hidden rounded-xl hover:text-black hover:bg-white transition-all"
                      >
                        <a href={link.href} className="w-full p-3 text-center">
                          {link.text}
                        </a>
                      </li>
                    ))}
                    <li className="py-2 rounded-xl hover:text-black hover:bg-white transition-all">
                      <a href={"#"} className="w-full p-3 text-center">
                        outras opções
                      </a>
                    </li>
                    <li className="py-2 rounded-xl hover:text-black hover:bg-white transition-all">
                      <a href={"#"} className="w-full p-3 text-center">
                        outras opções
                      </a>
                    </li>
                    <li className="py-2 rounded-xl hover:text-black hover:bg-white transition-all">
                      <a href={"#"} className="w-full p-3 text-center">
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

      <div className="w-full m-4 px-4">
        <section className="relative overflow-hidden w-full h-[70vh] lg:h-[95vh] flex flex-col items-center justify-start text-center rounded-4xl rounded-t-4xl lg:rounded-4xl bg-white bg-[linear-gradient(305deg,_#ECF8F7_0%,_rgba(16,21,105,0.7)_50%,_rgba(8,11,54,1)_100%)]">
          <div className="md:hidden w-full h-auto">
            <Image
              src={"/header-mobile.png"}
              alt="Abstração gráfica de ondas de luz"
              className="w-full h-auto"
              width={1400}
              height={839}
            />
          </div>

          <div className="hidden md:flex w-full h-auto">
            <Image
              src={"/header-desktop.png"}
              alt="Abstração gráfica de ondas de luz"
              width={1920}
              height={900}
              className="w-full h-auto"
            />
          </div>

          <div className="absolute bottom-0  z-10 px-16 py-16 space-y-6 text-white">
            <h1 className="max-w-xs md:max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
              Quebrando Barreiras com Inteligência: O Futuro do Crédito Começa
              Aqui
            </h1>
            <Button className="px-8 py-3 h-fit rounded-xl text-md">
              Conheça nossas soluções
            </Button>
          </div>
        </section>

        <section className="flex xl:mt-5 px-3.5 py-10 xl:px-15 items-end justify-end w-full">
          <div className="flex items-center justify-end w-full xl:mx-40">
            <p className="text-justify ml-14 md:ml-2 md:mr-4 max-w-[630px] mb-3.5">
              A O-Bainc® combina inteligência artificial, identidade digital e
              avaliação de risco em tempo real para transformar o acesso ao
              crédito em mercados invisíveis, com segurança, inclusão e ética.
            </p>
          </div>
        </section>
        <section>
          <div className="pb-14 px-14">
            <div className="mx-44 pt-14 flex justify-center pb-7">
              <p className="text-[32px] text-white text-center max-w-[700px] font-semibold">
                Bilhões estão excluídos. Nós estamos mudando isso
              </p>
            </div>
          </div>
        </section>
        <section className="px-14 flex justify-center">
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 md:mb-8 lg:mb-0 pr-10 pl-10 lg:pl-0 border-b md:border-b-0 border-[#7E86B0] pb-2">
              <h2 className="text-6xl max-w-[281px] text-center">±4</h2>
              <p className="max-w-[281px] text-center mb-3.5">
                bilhões de pessoas no mundo são invisíveis ao crédito
              </p>
            </div>
            <div className="space-y-2 md:mb-8 lg:mb-0 md:border-l md:border-[#7E86B0] pl-10 pr-10 border-b md:border-b-0 border-[#7E86B0] pb-2 pt-4 md:pt-0 md:pb-0">
              <h2 className="text-6xl max-w-[281px] text-center">+65</h2>
              <p className="max-w-[281px] text-center mb-3.5">
                milhões de brasileiros invísiveis ao crédito
              </p>
            </div>
            <div className="space-y-2 lg:border-l md:mt-6 lg:mt-0 lg:border-[#7E86B0] pl-10 pr-10 border-b md:border-b-0 border-[#7E86B0] pb-2 pt-4 md:pt-0 md:pb-0">
              <h2 className="text-6xl max-w-[281px] text-center">+300</h2>
              <p className="max-w-[281px] text-center mb-3.5">
                milhões de latino-americanos carentes de serviço financeiros
              </p>
            </div>
            <div className="space-y-2 md:border-l md:mt-6 lg:mt-0 md:border-[#7E86B0] pl-10 pt-4 md:pt-0">
              <h2 className="text-6xl max-w-[281px] text-center">IA</h2>
              <p className="max-w-[281px] text-center mb-3.5">
                que reduz inadimplência em até 30%
              </p>
            </div>
          </div>
        </section>
        <div className="w-full md:pl-0 flex flex-col items-center justify-center">
          <div className="flex justify-center pt-14">
            <p className="text-[32px] mb-3.5">O que nos diferencia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            <div className="max-w-[736px] mx-auto md:mx-0 md:max-w-[420px] min-h pb-9 md:pb-0 md:h-[498px] bg-[#21234A] rounded-4xl flex flex-col items-center px-5 pt-5">
              <Image
                src={"/ia.png"}
                alt="Abstração gráfica de ondas de luz"
                width={380}
                height={285}
                className="rounded-2xl mb-3.5 hidden md:flex"
              />
              <Image
                src={"/ia.png"}
                alt="Abstração gráfica de ondas de luz"
                width={696}
                height={522}
                className="rounded-2xl mb-3.5 md:hidden"
              />
              <div className="pt-2">
                <h3 className="pb-4 text-[20px] text-center">IA para o Bem</h3>
                <p className="text-center">
                  Usamos IA, ciência de dados e engenharia avançada para
                  resolver problemas reais. Não apenas para ganhar eficiência,
                  mas para gerar inclusão.
                </p>
              </div>
            </div>
            <div className="max-w-[736px] mx-auto md:mx-0 md:max-w-[420px] min-h pb-9 md:pb-0 md:h-[498px] bg-[#21234A] rounded-4xl flex flex-col items-center px-5 pt-5">
              <Image
                src={"/commitment.png"}
                alt="Abstração gráfica de ondas de luz"
                width={380}
                height={285}
                className="rounded-2xl mb-3.5 hidden md:flex"
              />
              <Image
                src={"/commitment.png"}
                alt="Abstração gráfica de ondas de luz"
                width={696}
                height={522}
                className="rounded-2xl mb-3.5 md:hidden"
              />
              <div className="pt-2">
                <h3 className="pb-4 text-[20px] text-center">
                  Compromisso com o humano
                </h3>
                <p className="text-center">
                  Cada linha de código que escrevemos é para ampliar
                  oportunidades, empoderar indivíduos e fomentar ecossistemas
                  financeiros mais justos.
                </p>
              </div>
            </div>
            <div className="max-w-[736px] md:max-w-[420px] min-h pb-9 md:pb-0 md:h-[498px] bg-[#21234A] rounded-4xl flex flex-col items-center px-5 pt-5 md:col-span-2 mx-auto lg:col-span-1 lg:mx-0">
              <Image
                src={"/ia.png"}
                alt="Abstração gráfica de ondas de luz"
                width={380}
                height={285}
                className="rounded-2xl mb-3.5 hidden md:flex"
              />
              <Image
                src={"/ia.png"}
                alt="Abstração gráfica de ondas de luz"
                width={696}
                height={522}
                className="rounded-2xl mb-3.5 md:hidden"
              />
              <div className="pt-2">
                <h3 className="pb-4 text-[20px] text-center">
                  Ética e soberania de dados
                </h3>
                <p className="text-center">
                  Nosso modelo garante que os tomadores mantenham controle total
                  sobre suas informações pessoais. Transparência, segurança e
                  respeito são inegociáveis.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-14 w-full flex flex-col items-center">
            <h2 className="text-[32px] pb-6 text-center">Conformidade total</h2>
            <div className="grid md:grid-cols-3 space-y-5 md:space-y-0 md:space-x-5">
              <div className="md:max-w-[420px] max-w-[737px] bg-[#21234A] flex items-center justify-start md:justify-center p-2 space-x-4 rounded-2xl">
                <Image
                  src={"/icon.svg"}
                  alt="Ícone"
                  width={55}
                  height={55}
                  className="rounded-2xl"
                />
                <p>LGPD - Lei Geral de Proteção de Dados Pessoais</p>
              </div>
              <div className="md:max-w-[420px] max-w-[737px] bg-[#21234A] flex items-center justify-start md:justify-center p-2 space-x-4 rounded-2xl">
                <Image
                  src={"/icon.svg"}
                  alt="Ícone"
                  width={55}
                  height={55}
                  className="rounded-2xl"
                />
                <p>GDPR - Regulamento Geral sobre a Proteção de Dados</p>
              </div>
              <div className="md:max-w-[420px] max-w-[737px] bg-[#21234A] flex items-center justify-start md:justify-center p-2 space-x-4 rounded-2xl">
                <Image
                  src={"/icon.svg"}
                  alt="Ícone"
                  width={55}
                  height={55}
                  className="rounded-2xl"
                />
                <p>AML - Combate à Lavagem de Dinheiro</p>
              </div>
            </div>
          </div>
        </div>
        <section className="flex flex-col pt-44 items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-[32px] mb-3.5">
              Tecnologia própria, impacto real
            </h2>
            <div className="flex justify-center max-w-[686px] pt-2">
              <p className="text-center mb-3.5">
                Nossa plataforma proprietária integra dados comportamentais,
                inteligência artificial e análise de risco em tempo real para
                expandir o acesso ao crédito de forma segura.Do CRIP-D® ao
                OBDC®, nossas soluções foram criadas para quebrar barreiras
                invisíveis que excluem bilhões de tomadores.
              </p>
            </div>
          </div>
          <div className="pt-14 w-full flex flex-col items-center space-y-6">
            <div className="max-w-[1050px] w-full p-2 gradient-border flex flex-col md:flex-row">
              <Image
                src={"/crip-d.svg"}
                alt="crip-d icon"
                width={140}
                height={140}
              />
              <div className="flex flex-col items-start p-5">
                <h3 className="text-[20px] mb-3.5">
                  Identidade Digital Soberana
                </h3>
                <p className="text-[16px] max-w-[665px] mb-2">
                  A base da inclusão financeira real. CRIP-D® cria identidades
                  digitais completas para tomadores que não possuem histórico
                  formal. <span className="underline">Saber mais</span>
                </p>
              </div>
            </div>
            <div className="max-w-[1050px] w-full p-2 gradient-border flex flex-col md:flex-row">
              <Image src={"/adg.svg"} alt="adg icon" width={140} height={140} />
              <div className="flex flex-col items-start p-5">
                <h3 className="text-[20px] mb-3.5">
                  Mecanismo de Decisão de Crédito com IA
                </h3>
                <p className="text-[16px] max-w-[665px] mb-2">
                  {" "}
                  Avaliação de risco em tempo real, com precisão incomparável.
                  ADG® transforma dados em decisões rápidas, seguras e justas.{" "}
                  <span className="underline">Saber mais</span>
                </p>
              </div>
            </div>
            <div className="max-w-[1050px] w-full p-2 gradient-border flex flex-col md:flex-row">
              <Image src={"/imc.svg"} alt="icm icon" width={140} height={140} />
              <div className="flex flex-col items-start p-5">
                <h3 className="text-[20px] mb-3.5">
                  Plataforma Integrada de Gestão de Crédito
                </h3>
                <p className="text-[16px] max-w-[665px] mb-2">
                  Uma plataforma completa para integrar identidade, KYC,
                  conformidade e decisões de crédito em um único lugar.{" "}
                  <span className="underline">Saber mais</span>
                </p>
              </div>
            </div>
            <div className="max-w-[1050px] w-full p-2 gradient-border flex flex-col md:flex-row">
              <Image
                src={"/orbitale.svg"}
                alt="orbitale icon"
                width={140}
                height={140}
              />
              <div className="flex flex-col items-start p-5">
                <h3 className="text-[20px] mb-3.5">
                  Análise de Risco de Portfólio e Inadimplência
                </h3>
                <p className="text-[16px] max-w-[665px] mb-2">
                  Plataforma de gestão de risco que antecipa inadimplência com
                  até 75% mais precisão que modelos tradicionais.{" "}
                  <span className="underline">Saber mais</span>
                </p>
              </div>
            </div>
            <div className="max-w-[1050px] w-full p-2 gradient-border flex flex-col md:flex-row">
              <Image
                src={"/verdaji.svg"}
                alt="verdaji icon"
                width={140}
                height={140}
              />
              <div className="flex flex-col items-start p-5">
                <h3 className="text-[20px] mb-3.5">
                  Identidade de Crédito Autogerida
                </h3>
                <p className="text-[16px] max-w-[665px] mb-2">
                  Aplicativo de identidade digital baseado em soberania de dados
                  e criptografia quântica. Dá ao usuário total controle sobre
                  seu perfil financeiro.{" "}
                  <span className="underline">Saber mais</span>
                </p>
              </div>
            </div>
            <div className="max-w-[1050px] w-full p-2 gradient-border flex flex-col md:flex-row">
              <Image
                src={"/obdc.svg"}
                alt="obdc icon"
                width={140}
                height={140}
              />
              <div className="flex flex-col items-start p-5">
                <h3 className="text-[20px] mb-3.5">
                  Open Bank Digital Currency
                </h3>
                <p className="text-[16px] max-w-[665px] mb-2">
                  A moeda digital mais segura do mundo para crédito inclusivo.
                  Lastreada em ativos múltiplos e protegida por segurança
                  quântica. <span className="underline">Saber mais</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
