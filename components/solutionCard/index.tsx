import type { FC } from "react";
import { CardRoot, type CardRootProps } from "./cardRoot";
import { CardContent, type CardContentComponent } from "./content";
import { CardImage, type CardImageProps } from "./image";

type SolutionCardComponent = FC<CardRootProps> & {
	Image: FC<CardImageProps>;
	Content: CardContentComponent;
};
const SolutionCard = CardRoot as SolutionCardComponent;

SolutionCard.Image = CardImage;
SolutionCard.Content = CardContent;
export default SolutionCard;
