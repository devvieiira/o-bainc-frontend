import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
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
				<div className="flex h-12 w-12 lg:w-96 items-center justify-center rounded-lg lg border-white/20 bg-white/10 p-2 backdrop-blur-sm">
					<Menu className="lg:hidden h-6 w-6 text-white" />
				</div>
			</header>

			<div className="w-full m-4 px-4">
				{/* Seção com imagem de fundo */}
				<section className="relative w-full h-[95vh] flex flex-col items-center justify-between text-center bg-red-500 rounded-4xl overflow-hidden">
					{/* Imagem mobile */}
					<div className="md:hidden absolute inset-0 z-0">
						<Image
							src={"/header-mobile.png"}
							alt="Abstração gráfica de ondas de luz"
							fill
							className="object-cover"
						/>
					</div>

					{/* Imagem desktop */}
					<div className="hidden md:block">
						<Image
							src={"/header-desktop.png"}
							alt="Abstração gráfica de ondas de luz"
							width={1400}
							height={683}
							className="object-cover"
						/>
					</div>

					{/* Conteúdo em cima da imagem */}
					<div className="relative z-10 px-4 py-16 space-y-6 text-white">
						<h1 className="max-w-xs md:max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
							Quebrando Barreiras com Inteligência: O Futuro do Crédito Começa Aqui
						</h1>
						<Button
							variant={"default"}
							className="px-8 py-3 h-fit rounded-xl text-md"
						>
							Conheça nossas soluções
						</Button>
					</div>
				</section>

				{/* Seção descritiva */}
				<section className="flex items-end justify-end w-full md:border-y md:border-y-border">
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
