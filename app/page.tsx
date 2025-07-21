'use client';
import Footer from '@/components/footer';
import SolutionCard from '@/components/solutionCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Video } from '@/components/video';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navLinks = [
    { href: '#', text: 'Soluções' },
    { href: '#', text: 'Produtos' },
    { href: '#', text: 'Corporativo' },
    { href: '#', text: 'Sobre' },
    { href: '#', text: 'Contato' },
  ];
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <header className="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between p-[38px]">
        <div className="glass flex h-[57px] md:h-14 max-w-[220px] items-center justify-center rounded-2xl px-7 py-3.5">
          <Image
            className="hidden md:flex"
            src={'/logo.svg'}
            alt="o-bainc logo"
            width={170}
            height={20}
          />
          <Image
            className="md:hidden"
            src={'/logo.svg'}
            alt="o-bainc logo"
            width={150}
            height={40}
          />
        </div>
        <div className="glass flex h-[54px] w-14 items-center justify-center rounded-2xl border-white/20 bg-white/10 p-2 md:h-14 md:w-fit lg:w-fit">
          <ul className="flex h-full w-full items-center justify-center gap-x-8 px-4 font-medium">
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
            <li className="flex items-center justify-center rounded-xl lg:hidden text-center transition-all hover:bg-white hover:text-black">
              <Popover>
                <PopoverTrigger asChild>
                  <Image className='p-[15px]' src={"/mobile-menu.svg"} alt='menu' fill/>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  sideOffset={12}
                  alignOffset={-28}
                  className="w-fit"
                >
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

      <div className="m-4 w-full">
        <div className="px-4">
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

            <div className="absolute bottom-0 z-10 space-y-6 px-10 md:px-16 py-16 text-white">
              <h1 className="max-w-full text-2xl leading-tight font-medium md:max-w-3/5 mx-auto md:text-[34px]">
                Quebrando Barreiras com Inteligência: O Futuro do Crédito Começa
                Aqui
              </h1>
              <Button className="text-[18px] h-fit rounded-xl px-8 py-[15px]">
                Conheça nossas soluções
              </Button>
            </div>
          </section>
        </div>

        <section className="flex w-full items-end justify-end px-3.5 pb-10 pt-24   xl:mt-5 xl:px-15">
          <div className="flex w-full items-center justify-end xl:mx-40">
            <p className="mb-3.5 ml-24 max-w-[630px] md:text-justify md:mr-4 md:ml-2">
              A O-Bainc® combina inteligência artificial, identidade digital e
              avaliação de risco em tempo real para transformar o acesso ao
              crédito em mercados invisíveis, com segurança, inclusão e ética.
            </p>
          </div>
        </section>
        <section>
          <div className="w-full pb-8">
            <div className="flex w-full justify-center pt-14 px-12 md:px-0">
              <p className="max-w-[700px] text-center text-2xl font-medium text-white xl:text-3xl">
                Bilhões estão excluídos. Nós estamos mudando isso
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center px-[15px]">
          <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 border-b border-[#7E86B0] pr-10 pb-4 pl-10 md:mb-8 md:border-b-0 lg:mb-0 lg:pl-0">
              <h2 className="max-w-[281px] text-center text-6xl">±4</h2>
              <p className="mb-3.5 max-w-[281px] text-center">
                bilhões de pessoas no mundo são invisíveis ao crédito
              </p>
            </div>
            <div className="space-y-2 border-b border-[#7E86B0] pt-8 pr-10 pb-4 pl-10 md:mb-8 md:border-b-0 md:border-l md:border-[#7E86B0] md:pt-0 md:pb-0 lg:mb-0">
              <h2 className="max-w-[281px] text-center text-6xl">+65</h2>
              <p className="mb-3.5 max-w-[281px] text-center">
                milhões de brasileiros invísiveis ao crédito
              </p>
            </div>
            <div className="space-y-2 border-b border-[#7E86B0] pt-8 pr-10 pb-4 pl-10 md:mt-6 md:border-b-0 md:pt-0 md:pb-0 lg:mt-0 lg:border-l lg:border-[#7E86B0]">
              <h2 className="max-w-[281px] text-center text-6xl">+300</h2>
              <p className="mb-3.5 max-w-[281px] text-center">
                milhões de latino-americanos carentes de serviço financeiros
              </p>
            </div>
            <div className="space-y-2 pt-8 pl-10 pr-10 md:mt-6 md:border-l md:border-[#7E86B0] md:pt-0 lg:mt-0">
              <h2 className="max-w-[281px] text-center text-6xl">IA</h2>
              <p className="mb-3.5 max-w-[281px] text-center">
                que reduz inadimplência em até 30%
              </p>
            </div>
          </div>
        </section>
        <div className="flex w-full flex-col items-center justify-center px-4 md:pl-0">
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
                  Usamos IA, ciência de dados e engenharia avançada para
                  resolver problemas reais. Não apenas para ganhar eficiência,
                  mas para gerar inclusão.
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
                <h3 className="pb-4 text-center text-[20px]">
                  Compromisso com o humano
                </h3>
                <p className="text-center">
                  Cada linha de código que escrevemos é para ampliar
                  oportunidades, empoderar indivíduos e fomentar ecossistemas
                  financeiros mais justos.
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
                <h3 className="pb-4 text-center text-[20px]">
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
          <div className="flex w-full flex-col items-center pt-14">
            <h2 className="pb-6 text-center text-[32px]">Conformidade total</h2>
            <div className="grid space-y-5 md:grid-cols-3 md:space-y-0 md:space-x-5">
              <div className="flex max-w-[737px] items-center justify-start space-x-4 rounded-2xl bg-[#21234A] p-2 md:max-w-[420px] md:justify-center">
                <Image
                  src={'/icon.svg'}
                  alt="Ícone"
                  width={55}
                  height={55}
                  className="rounded-2xl"
                />
                <p>LGPD - Lei Geral de Proteção de Dados Pessoais</p>
              </div>
              <div className="flex max-w-[737px] items-center justify-start space-x-4 rounded-2xl bg-[#21234A] p-2 md:max-w-[420px] md:justify-center">
                <Image
                  src={'/icon.svg'}
                  alt="Ícone"
                  width={55}
                  height={55}
                  className="rounded-2xl"
                />
                <p>GDPR - Regulamento Geral sobre a Proteção de Dados</p>
              </div>
              <div className="flex max-w-[737px] items-center justify-start space-x-4 rounded-2xl bg-[#21234A] p-2 md:max-w-[420px] md:justify-center">
                <Image
                  src={'/icon.svg'}
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
        <div className="bg-o-bainc-gradient w-full">
          <section className="relative flex flex-col items-center pt-44">
            <Image
              src={'/lateral.png'}
              alt="esfera lateral"
              width={800}
              height={1700}
              className="absolute top-1/2 right-0 z-0 h-auto w-auto -translate-y-1/2 lg:h-full"
            />
            <div className="z-10 flex w-full flex-col items-center px-4">
              <h2 className="mb-3.5 text-center text-[32px]">
                Tecnologia própria, impacto real
              </h2>
              <div className="flex max-w-[686px] justify-center pt-2">
                <p className="mb-3.5 text-center">
                  Nossa plataforma proprietária integra dados comportamentais,
                  inteligência artificial e análise de risco em tempo real para
                  expandir o acesso ao crédito de forma segura.Do CRIP-D® ao
                  OBDC®, nossas soluções foram criadas para quebrar barreiras
                  invisíveis que excluem bilhões de tomadores.
                </p>
              </div>
            </div>
            <div className="z-10 flex w-full flex-col items-center space-y-6 px-4 pt-14">
              <div className="glass gradient-border flex w-full max-w-[1050px] flex-col p-2 md:flex-row">
                <Image
                  src={'/crip-d.svg'}
                  alt="crip-d icon"
                  width={140}
                  height={140}
                />
                <div className="flex flex-col items-start p-5">
                  <h3 className="mb-3.5 text-[20px]">
                    Identidade Digital Soberana
                  </h3>
                  <p className="mb-2 max-w-[665px] text-[16px]">
                    A base da inclusão financeira real. CRIP-D® cria
                    identidades digitais completas para tomadores que não
                    possuem histórico formal.{' '}
                    <span className="underline">Saber mais</span>
                  </p>
                </div>
              </div>
              <div className="glass gradient-border flex w-full max-w-[1050px] flex-col p-2 md:flex-row">
                <Image
                  src={'/adg.svg'}
                  alt="adg icon"
                  width={140}
                  height={140}
                />
                <div className="flex flex-col items-start p-5">
                  <h3 className="mb-3.5 text-[20px]">
                    Mecanismo de Decisão de Crédito com IA
                  </h3>
                  <p className="mb-2 max-w-[665px] text-[16px]">
                    {' '}
                    Avaliação de risco em tempo real, com precisão incomparável.
                    ADG® transforma dados em decisões rápidas, seguras e
                    justas. <span className="underline">Saber mais</span>
                  </p>
                </div>
              </div>
              <div className="glass gradient-border flex w-full max-w-[1050px] flex-col p-2 md:flex-row">
                <Image
                  src={'/imc.svg'}
                  alt="icm icon"
                  width={140}
                  height={140}
                />
                <div className="flex flex-col items-start p-5">
                  <h3 className="mb-3.5 text-[20px]">
                    Plataforma Integrada de Gestão de Crédito
                  </h3>
                  <p className="mb-2 max-w-[665px] text-[16px]">
                    Uma plataforma completa para integrar identidade, KYC,
                    conformidade e decisões de crédito em um único lugar.{' '}
                    <span className="underline">Saber mais</span>
                  </p>
                </div>
              </div>
              <div className="glass gradient-border flex w-full max-w-[1050px] flex-col p-2 md:flex-row">
                <Image
                  src={'/orbitale.svg'}
                  alt="orbitale icon"
                  width={140}
                  height={140}
                />
                <div className="flex flex-col items-start p-5">
                  <h3 className="mb-3.5 text-[20px]">
                    Análise de Risco de Portfólio e Inadimplência
                  </h3>
                  <p className="mb-2 max-w-[665px] text-[16px]">
                    Plataforma de gestão de risco que antecipa inadimplência com
                    até 75% mais precisão que modelos tradicionais.{' '}
                    <span className="underline">Saber mais</span>
                  </p>
                </div>
              </div>
              <div className="glass gradient-border flex w-full max-w-[1050px] flex-col p-2 md:flex-row">
                <Image
                  src={'/verdaji.svg'}
                  alt="verdaji icon"
                  width={140}
                  height={140}
                />
                <div className="flex flex-col items-start p-5">
                  <h3 className="mb-3.5 text-[20px]">
                    Identidade de Crédito Autogerida
                  </h3>
                  <p className="mb-2 max-w-[665px] text-[16px]">
                    Aplicativo de identidade digital baseado em soberania de
                    dados e criptografia quântica. Dá ao usuário total controle
                    sobre seu perfil financeiro.{' '}
                    <span className="underline">Saber mais</span>
                  </p>
                </div>
              </div>
              <div className="glass gradient-border flex w-full max-w-[1050px] flex-col p-2 md:flex-row">
                <Image
                  src={'/obdc.svg'}
                  alt="obdc icon"
                  width={140}
                  height={140}
                />
                <div className="flex flex-col items-start p-5">
                  <h3 className="mb-3.5 text-[20px]">
                    Open Bank Digital Currency
                  </h3>
                  <p className="mb-2 max-w-[665px] text-[16px]">
                    A moeda digital mais segura do mundo para crédito inclusivo.
                    Lastreada em ativos múltiplos e protegida por segurança
                    quântica. <span className="underline">Saber mais</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="flex w-full flex-col items-center justify-center space-y-5 px-4 pt-15 text-center text-black">
            <h2 className="text-center text-2xl font-medium">
              Cŕedito Impulsionado por Computação Quântica para Todos
            </h2>
            <p className="mb-13 max-w-2xl">
              Aproveitando tecnologia quântica de ponta para liberar crédito a
              populações desassistidas, protegendo ao mesmo tempo os credores
              contra riscos.
            </p>
            <div className="bg-space-dark-muted flex flex-col items-center justify-center rounded-4xl p-5 text-white lg:max-w-6xl xl:flex-row xl:space-x-15">
              <Video
                videoPath="/home_video.mp4"
                h={355}
                w={355}
                className="h-full w-full xl:hidden"
              />
              <Video
                videoPath="/home_video.mp4"
                h={460}
                w={460}
                className="hidden xl:flex"
              />
              <div className="space-y-8 pt-10 text-start">
                <h2 className="text-xl font-medium">
                  QNCaaS – Quantum Native Credit as a Service
                </h2>{' '}
                <p>
                  Reimaginando o crédito com inteligência quântica. A O-Bainc®
                  utiliza computação quântica para detectar bons mutuários
                  ignorados por modelos antigos, analisar dados
                  multidimensionais em tempo real, e ajustar risco com precisão
                  incomparável.
                </p>
                <div className="w-full space-y-4">
                  <p>
                    “A computação quântica nos permite fazer o que outros não
                    conseguem, tomar decisões de crédito mais rápidas, justas e
                    resilientes.”
                  </p>
                  <p className="text-end">— Mark Fisher, Fundador & CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex w-full flex-col items-center justify-center space-y-5 px-4 text-center text-black">
            <div className="mb-4 max-w-sm text-center text-2xl font-medium md:max-w-2xl">
              <h2 className="">Soluções O-Bainc®</h2>
              <p className="">Inovação que reconfigura o acesso ao crédito</p>
            </div>
            <span className="mb-12 font-[16px]">
              As soluções da O-Bainc® atuam em toda a jornada do crédito. Da
              verificação à concessão, com monitoramento contínuo. Inteligência
              artificial, ética e soberania de dados no centro de tudo.
            </span>

            <SolutionCard>
              <SolutionCard.Image
                alt="identidade visual"
                image="/visual_identity.png"
              />
              <SolutionCard.Content>
                <SolutionCard.Content.Title>
                  Identidade Digital Inteligente (CRIP-D®)
                </SolutionCard.Content.Title>
                <SolutionCard.Content.Description>
                  O CRIP-D® cria perfis digitais completos para tomadores sem
                  histórico bancário ou documentação formal, utilizando dados
                  alternativos. Como comportamento digital, residência,
                  ocupação, conexões comunitárias e redes públicas.O tomador é
                  o proprietário dos seus dados e pode compartilhá-los de forma
                  segura e soberana.
                </SolutionCard.Content.Description>
                <SolutionCard.Content.Features>
                  <SolutionCard.Content.Feature icon="/lockIcon.svg">
                    Verificação segura sem papelada
                  </SolutionCard.Content.Feature>
                  <SolutionCard.Content.Feature icon="/handsIcon.svg">
                    Inclusão real em ambientes informais
                  </SolutionCard.Content.Feature>
                  <SolutionCard.Content.Feature icon="/localizationIcon.svg">
                    Pronto para atuar em qualquer mercado emergente
                  </SolutionCard.Content.Feature>
                </SolutionCard.Content.Features>
              </SolutionCard.Content>
            </SolutionCard>

            <SolutionCard>
              <SolutionCard.Image image="/KYC_IA.png" alt="KCY com IA" />
              <SolutionCard.Content>
                <SolutionCard.Content.Title>
                  KYC com IA e Conformidade Total
                </SolutionCard.Content.Title>
                <SolutionCard.Content.Description>
                  Nossa solução de verificação usa inteligência artificial para
                  validar dados de identidade, endereço, renda e comportamento,
                  em tempo real e com menor fricção para o tomador.Totalmente
                  em conformidade com GDPR, LGPD, AML e outros padrões
                  internacionais.
                </SolutionCard.Content.Description>
                <SolutionCard.Content.Features>
                  <SolutionCard.Content.Feature icon="/continuos_update.svg">
                    Atualização contínua do perfil do cliente
                  </SolutionCard.Content.Feature>
                </SolutionCard.Content.Features>
                <SolutionCard.Content.Feature icon="/reductionIcon.svg">
                  Redução de fraudes e custos de validação
                </SolutionCard.Content.Feature>
                <SolutionCard.Content.Feature icon="/dataGenIcon.svg">
                  Geração de dados próprios, validados e auditáveis
                </SolutionCard.Content.Feature>
              </SolutionCard.Content>
            </SolutionCard>

            <div className="flex w-full items-center justify-center pt-10 pb-15">
              <Button
                className="rounded-xl px-8 py-6 text-[18px]"
                size={'lg'}
                onClick={() => router.push('/solutions')}
              >
                Veja mais
              </Button>
            </div>
            <section className="mb-24 flex w-full flex-col items-center justify-center space-y-5 text-white">
              <h2 className="text-2xl font-medium">
                Impacto Social e Econômico
              </h2>
              <p className="mb-12 w-full text-center xl:max-w-2xl">
                Na O-Bainc®, acreditamos que tecnologia deve servir à equidade.
                Promovemos inclusão financeira com transparência, segurança e
                soberania de dados. Nosso impacto vai além do acesso ao
                crédito, fomentamos crescimento econômico, geração de empregos e
                bem-estar financeiro em comunidades negligenciadas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12 xl:grid-cols-3 xl:gap-x-12">
                <div className="flex flex-col items-center justify-center space-y-3 text-center">
                  <h3 className="text-6xl">+1,5</h3>
                  <p className="max-w-xs">
                    milhões de pequenas empresas podem ser criadas no Brasil
                  </p>
                </div>

                <div className="border-space-mid my-5 flex flex-col items-center space-y-3 border-y py-10 text-center md:my-0 md:border-y-0 md:border-l md:py-0 md:pl-8 md:text-left xl:items-center xl:border-x xl:px-8 xl:text-center">
                  <h3 className="text-6xl">+4%</h3>
                  <p className="max-w-xs">
                    acesso ao crédito pode adicionar +4% ao PIB em 5 anos
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3 text-center md:col-span-2 xl:col-span-1">
                  <h3 className="text-6xl">100M</h3>
                  <p className="max-w-xs">
                    empregos gerados a cada 1% de expansão do crédito
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="p-4 mb-9 h-auto w-full ">
          <section className="md:min-h-[615px] xl:min-h-[810px] h-fit flex items-center justify-center w-full rounded-3xl bg-[url(../public/call_investor.png)] py-10 px-5 md:p-10 xl:p-15 bg-cover bg-center p-5">
            <div className="flex flex-col items-center justify-center space-y-10 rounded-2xl text-center backdrop-blur-2xl py-10 px-5 md:p-10 xl:p-15 md:max-w-3xl">
              <h2 className="text-center text-2xl font-medium">
                Vamos juntos construir um novo sistema financeiro?
              </h2>
              <span className="text-center text-[16px] leading-5 font-normal">
                Se você é um credor, investidor, regulador ou simplesmente
                alguém que acredita na inclusão como motor de transformação,
                junte-se à O-Bainc®. Estamos prontos para abrir caminhos,
                gerar oportunidades e transformar vidas.
              </span>
              <div className="h-full w-full space-y-5">
                <Button
                  size={'lg'}
                  className="w-full rounded-[12px] px-8 py-6.5 text-lg"
                >
                  Solicite uma demonstração
                </Button>
                <Button
                  size={'lg'}
                  className="w-full rounded-[12px] px-8 text-lg"
                  variant={'green'}
                >
                  Entre em contato
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full bg-footer-gradient  relative z-20">
        <Image
          src={'/footer-mobile.png'}
          alt="semi esfera footer"
          width={615}
          height={1312}
          className="w-full h-auto absolute md:hidden bottom-0 z-0"
        />

        <Image
          src={'/footer-desktop.png'}
          alt="semi esfera footer"
          width={615}
          height={1312}
          className="w-full h-auto absolute md:block hidden bottom-0 z-0"
        />
        <div className="w-full p-5 space-y-7">
          <div className="w-full relative z-10 xl:py-10 ">
            <Separator className="bg-space-mid" />

            <div className="p-5 space-y-7 w-full px-4 flex flex-col items-center justify-center xl:space-y-0 xl:flex-row  xl:py-12">
              {' '}
              <h2 className="font-medium text-2xl w-full xl:text-4xl text-center">
                Assine nossa Newsletter
              </h2>
              {/* TODO: add email to newslatter list ( needded to verify with o-bainc admin) */}
              <form className="w-full space-y-3 flex flex-col items-center justify-center md:flex-row md:space-y-0 md:space-x-3">
                <input
                  className="w-full border border-space-mid px-6 py-3 rounded-xl"
                  required
                  type="email"
                  alt="email"
                  placeholder="Seu E-mail"
                />
                <button
                  type="submit"
                  className="w-full md:w-1/3  px-6 py-3 rounded-xl bg-space-mid"
                >
                  Inscreva-se
                </button>
              </form>
            </div>
            <Separator className="bg-space-mid" />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
