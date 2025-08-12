import Image from "next/image";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export default function Verdaji() {
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
                                    <Image className='p-[15px]' src={"/mobile-menu.svg"} alt='menu' fill />
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

            <section className="m-4 w-full">
                <div className="px-4">
                    <div className="relative flex h-[52vh] w-full flex-col items-center justify-center overflow-hidden rounded-4xl rounded-t-4xl bg-white bg-[linear-gradient(305deg,_#ECF8F7_0%,_rgba(16,21,105,0.7)_50%,_rgba(8,11,54,1)_100%)] text-center lg:h-[52vh] lg:rounded-4xl">
                        <h2 className="text-[32px] font-medium mx-auto">Verdaji® – Identidade financeira com propósito</h2>
                    </div>
                </div>
            </section>

            <section className="px-[60px] w-full relative min-h-screen flex items-center">
                <Image
                    src={'/CELLPHONE-WALLPAPER.webp'}
                    alt="Abstração gráfica de ondas de luz"
                    className="absolute inset-0 object-cover mx-auto"
                    width={800}
                    height={909}
                    />
                <div className="w-full flex justify-around relative z-10 space-x-[300px] items-center">
                    <div className="max-w-[420px] space-y-[1px]">
                        <h3 className="text-[32px] font-medium mb-[14px]">O que é a Verdaji®?</h3>
                        <p className="mb-[14px] text-[16px]">O Verdaji® é o aplicativo de identidade de crédito desenvolvido pela O-Bainc® para garantir que ninguém fique fora do sistema financeiro por falta de histórico formal.
                            Nele, o usuário cria sua identidade de crédito digital soberana (CRIP-D®), protegida por criptografia quântica, que constrói o histórico financeiro de quem foi ignorado pelas instituições tradicionais de crédito, com base em dados alternativos, tais como:
                            </p>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Pagamentos via celular (Pix, recargas, etc.)</h4>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Histórico de trabalho informal</h4>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Contas de serviços públicos (água, luz, gás)</h4>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Comportamentos financeiros digitais</h4>
                    </div>
                    <div>
                        <h3 className="text-[32px] font-medium mb-[14px]">Benefícios:</h3>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Identidade financeira 100% autogerida</h4>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Proteção contra fraudes com criptografia quântica</h4>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Permite acesso a crédito justo para quem não tem conta bancária</h4>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Integra-se com CRIP-D®, ADG® e Marketplace O-Bainc®</h4>
                        <h4 className="font-medium"><span className="pr-[14px] pl-[20px]">•	</span>Compatível com regulações de LGPD, GDPR, AML</h4>
                    </div>
                </div>
            </section>
        </main>
    )
}