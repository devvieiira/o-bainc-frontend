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
        <main className="flex min-h-screen w-full flex-col items-center bg-o-bainc-mid">
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
        </main>
    )
}