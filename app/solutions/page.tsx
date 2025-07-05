import Image from "next/image";
import SolutionCard from "@/components/solutionCard";

const SolutionsPage = () => {
	return (
		<main className="p-4 text-black bg-light-to-dark h-full flex flex-col items-center justify-center">
			<section className="w-full pt-15 space-y-5 text-center flex flex-col items-center justify-center">
				<h1 className="text-2xl font-medium text-center mt-5">
					Soluções O-Bainc®
					<p className="text-2xl">
						Inovação que reconfigura o acesso ao crédito
					</p>
				</h1>
				<div className="w-full mb-13">
					<span className="text-center ">
						As soluções da O-Bainc® atuam em toda a jornada do crédito. Da
						verificação à concessão, com monitoramento contínuo. Inteligência
						artificial, ética e soberania de dados no centro de tudo.
					</span>
				</div>
			</section>
			<section className="w-full">
				<SolutionCard>
					<SolutionCard.Image>
						<Image
							src={"/visual_identity.png"}
							alt="Identidade visual Imagem"
							height={440}
							width={440}
							className="w-full h-auto rounded-3xl overflow-hidden"
						/>
					</SolutionCard.Image>
					<SolutionCard.Content>
						<SolutionCard.Content.Title>
							Identidade Digital Inteligente (CRIP-D®)
						</SolutionCard.Content.Title>
						<SolutionCard.Content.Description>
							O CRIP-D® cria perfis digitais completos para tomadores sem
							histórico bancário ou documentação formal, utilizando dados
							alternativos. Como comportamento digital, residência, ocupação,
							conexões comunitárias e redes públicas. O tomador é o proprietário
							dos seus dados e pode compartilhá-los de forma segura e soberana.
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
			</section>
		</main>
	);
};
export default SolutionsPage;
