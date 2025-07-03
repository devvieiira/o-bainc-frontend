import Image from "next/image";

const SolutionsPage = () => {
	return (
		<main className="text-black bg-light-to-dark h-full flex flex-col items-center justify-center">
			<section className="w-2/3 space-y-5 text-center flex flex-col items-center justify-center">
				<h1 className="text-2xl text-center mt-5">
					Soluções O-Bainc®
					<p className="text-xl md:text-2xl">
						Inovação que reconfigura o acesso ao crédito
					</p>
				</h1>
				<div className="w-auto  border ">
					<span className="text-center text-sm md:text-md">
						As soluções da O-Bainc® atuam em toda a jornada do crédito. Da
						verificação à concessão, com monitoramento contínuo. Inteligência
						artificial, ética e soberania de dados no centro de tudo.
					</span>
				</div>
			</section>
			{/* TODO: align text on center | refactor mobile version */}
			<section className="w-full flex flex-col items-center justify-center  space-y-5 mt-6">
				<div className="md:max-w-[80%] h-auto grid grid-cols-1 md:grid-cols-3 border border-space-dark/30 rounded-3xl gap-3 p-5">
					<Image
						className="overflow-hidden rounded-2xl h-auto"
						src={"/visual_identity.png"}
						alt="Identidade Visual"
						width={480}
						height={480}
					/>
					<div className="col-span-2 flex flex-col  space-y-4 max-w-2/3 md:col-span-2  justify-center">
						<h2 className=" text-xl mt-8">
							Identidade Digital Inteligente (CRIP-D®)
						</h2>
						<p className="  ">
							O CRIP-D® cria perfis digitais completos para tomadores sem
							histórico bancário ou documentação formal, utilizando dados
							alternativos. Como comportamento digital, residência, ocupação,
							conexões comunitárias e redes públicas. O tomador é o proprietário
							dos seus dados e pode compartilhá-los de forma segura e soberana.
						</p>
						<div className="grid grid-rows-3 h-auto w-full">
							<div>
								<Image
									src={"/lockIcon.svg"}
									alt="icone de cadeado"
									width={55}
									height={55}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default SolutionsPage;
