import Image from 'next/image';
import SolutionCard from '@/components/solutionCard';

const SolutionsPage = () => {
  return (
    <main className="bg-light-to-dark flex h-full flex-col items-center justify-center p-4 text-black lg:px-10 xl:px-15">
      <section className="flex w-full flex-col items-center justify-center space-y-5 pt-15 text-center">
        <h1 className="mt-5 text-center text-2xl font-medium">
          Soluções O-Bainc®
          <p className="text-2xl">Inovação que reconfigura o acesso ao crédito</p>
        </h1>
        <div className="mb-13 w-full">
          <span className="text-center">
            As soluções da O-Bainc® atuam em toda a jornada do crédito. Da verificação à concessão,
            com monitoramento contínuo. Inteligência artificial, ética e soberania de dados no
            centro de tudo.
          </span>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-y-5">
        <SolutionCard>
          <SolutionCard.Image>
            <Image
              src={'/visual_identity.png'}
              alt="Identidade visual Imagem"
              height={460}
              width={460}
              className="h-auto w-full overflow-hidden rounded-3xl"
            />
          </SolutionCard.Image>
          <SolutionCard.Content>
            <SolutionCard.Content.Title>
              Identidade Digital Inteligente (CRIP-D®)
            </SolutionCard.Content.Title>
            <SolutionCard.Content.Description>
              O CRIP-D® cria perfis digitais completos para tomadores sem histórico bancário ou
              documentação formal, utilizando dados alternativos. Como comportamento digital,
              residência, ocupação, conexões comunitárias e redes públicas. O tomador é o
              proprietário dos seus dados e pode compartilhá-los de forma segura e soberana.
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
          <SolutionCard.Image>
            <Image
              src={'/KYC_IA.png'}
              alt="KCY conm IA"
              width={460}
              height={460}
              className="h-auto w-full overflow-hidden rounded-3xl"
            />
          </SolutionCard.Image>
          <SolutionCard.Content>
            <SolutionCard.Content.Title>KYC com IA e Conformidade Total</SolutionCard.Content.Title>
            <SolutionCard.Content.Description>
              Nossa solução de verificação usa inteligência artificial para validar dados de
              identidade, endereço, renda e comportamento, em tempo real e com menor fricção para o
              tomador. Totalmente em conformidade com GDPR, LGPD, AML e outros padrões
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
        <SolutionCard>
          <SolutionCard.Image>
            <Image
              src={'/risk_ai.png'}
              alt="avaliacao de risco com AI"
              width={460}
              height={460}
              className="h-auto w-full overflow-hidden rounded-3xl"
            />
          </SolutionCard.Image>
          <SolutionCard.Content>
            <SolutionCard.Content.Title>
              Avaliação de Risco com Inteligência Artificial
            </SolutionCard.Content.Title>
            <SolutionCard.Content.Description>
              Utilizando aprendizado de máquina, ensemble models e explicabilidade via SHAP e LIME,
              nossa IA analisa múltiplas fontes de dados e entrega decisões de crédito com alta
              confiabilidade, inclusive para tomadores invisíveis ao sistema tradicional.
            </SolutionCard.Content.Description>
            <SolutionCard.Content.Features>
              <SolutionCard.Content.Feature icon="/real_time_decision.svg">
                Decisões em tempo real
              </SolutionCard.Content.Feature>
              <SolutionCard.Content.Feature icon="/reduceIcon.svg">
                Redução de inadimplência em até 30%
              </SolutionCard.Content.Feature>
              <SolutionCard.Content.Feature icon="/algorithmIcon.svg">
                Algoritmos auditáveis e justos
              </SolutionCard.Content.Feature>
            </SolutionCard.Content.Features>
          </SolutionCard.Content>
        </SolutionCard>
      </section>
    </main>
  );
};
export default SolutionsPage;
