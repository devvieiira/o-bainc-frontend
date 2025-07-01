import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center ">
			<header className="w-full z-10 fixed flex items-center justify-between px-5 right-0 left-0 top-5">
				<div className="glass flex items-center justify-center py-5 rounded-2xl w-52 h-14">
					<Image
						className="flex items-center justify-center"
						src={"/logo.svg"}
						alt="o-bainc logo"
						width={170}
						height={55}
					/>
				</div>
				<div className="flex h-12 w-12 lg:w-fit items-center justify-center rounded-2xl border-white/20 bg-white/10 p-2 glass">
					<ul className="flex h-full w-full items-center justify-center gap-x-8 font-bold px-4">
						<li className="hidden lg:block">
							<a href="#" className="transition-colors hover:text-white/70">
								Soluções
							</a>
						</li>
						<li className="hidden lg:block">
							<a href="#" className="transition-colors hover:text-white/70">
								Produtos
							</a>
						</li>
						<li className="hidden lg:block">
							<a href="#" className="transition-colors hover:text-white/70">
								Corporativo
							</a>
						</li>
						<li className="hidden lg:block">
							<a href="#" className="transition-colors hover:text-white/70">
								Sobre
							</a>
						</li>
						<li className="hidden lg:block">
							<a href="#" className="transition-colors hover:text-white/70">
								Contato
							</a>
						</li>

						<li className="flex items-center justify-center text-center ">
							<Menu className="h-6 w-6 text-white" />
						</li>
					</ul>
				</div>
			</header>

			<div className="w-full m-4 px-4">
				<section className="relative w-full h-[95vh] flex flex-col items-center justify-between text-center rounded-4xl bg-gradient-to-br from-[#080B36] via-[#101569B2] to-[#ECF8F7]">
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

					<div className="relative z-10 px-4 py-16 space-y-6 text-white">
						<h1 className="max-w-xs md:max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
							Quebrando Barreiras com Inteligência: O Futuro do Crédito Começa
							Aqui
						</h1>
						<Button className="px-8 py-3 h-fit rounded-xl text-md">
							Conheça nossas soluções
						</Button>
					</div>
				</section>

				<section className="flex mt-5 items-end justify-end w-full md:border-y md:border-y-border">
					<p className="text-justify md:ml-4 md:mr-4 max-w-md py-6 px-2">
						A O-Bainc® combina inteligência artificial, identidade digital e
						avaliação de risco em tempo real para transformar o acesso ao
						crédito em mercados invisíveis, com segurança, inclusão e ética.
					</p>
				</section>
			</div>
		</main>
	);
}
