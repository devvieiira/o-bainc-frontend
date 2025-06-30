import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Importando o ícone de menu
import Image from "next/image";

export default function Home() {
	return (
		<main className="relative flex min-h-screen w-full flex-col items-center">
			<div className="w-full max-w-8xl">
				{/* O header permanece inalterado, como solicitado */}
				<header className="z-10 absolute flex items-center justify-between  px-5 right-0 left-0 top-5">
					<div className="glass flex items-center justify-center  py-5 rounded-2xl w-52 h-14">
						<Image
							className="flex items-center justify-center"
							src={"/logo.svg"}
							alt="o-bainc logo"
							width={170}
							height={55}
						/>
					</div>

					<div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
						<Menu className="h-6 w-6 text-white" />
					</div>
				</header>

				{/* INÍCIO DA SOLUÇÃO */}
				{/* 1. Este 'div' agora "embrulha" a seção. Ele cria o espaçamento. */}
				<div className="m-2 ">
					{" "}
					{/* Espaçamento do topo e lateral */}
					{/* 2. A seção agora tem bordas arredondadas e 'overflow-hidden' para cortar as imagens internas */}
					<section className="w-full flex flex-grow flex-col items-center justify-center text-center bg-[url(../public/backgorund-card-desktop.svg)]  rounded-2xl overflow-hidden relative">
						<Image
							src={"/header-mobile.png"}
							alt="Abstração gráfica de ondas de luz"
							objectFit="cover"
							height={100}
							width={768}
							className="md:hidden w-full h-auto block"
						/>
						<Image
							className="hidden md:block  w-full h-auto"
							src={"/header-desktop.png"}
							alt="Abstração gráfica de ondas de luz"
							objectFit="cover"
							height={100}
							width={1440}
						/>
						{/* Adicionado um container para o conteúdo textual para melhor controle */}
						<div className=" inset-0 flex flex-col items-center justify-center p-4 space-y-6">
							<h1 className="max-w-xs md:max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
								Quebrando Barreiras com Inteligência: O Futuro do Crédito Começa
								Aqui
							</h1>
							<Button
								variant={"default"}
								className="px-8 py-3 h-fit  rounded-xl text-md"
							>
								Conheça nossas soluções
							</Button>
						</div>
					</section>
				</div>
				<section className="flex items-end justify-end w-full md:border-y md:border-y-border">
					<p className="text-justify md:ml-4 md:mr-4 max-w-md py-6 px-2">
						A O-Bainc® combina inteligência artificial, identidade digital e
						avaliação de risco em tempo real para transformar o acesso ao
						crédito em mercados invisíveis, com segurança, inclusão e ética.
					</p>
				</section>
				{/* FIM DA SOLUÇÃO */}
			</div>
		</main>
	);
}
