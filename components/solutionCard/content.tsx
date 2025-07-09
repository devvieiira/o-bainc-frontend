import type { FC, ReactNode } from 'react';
import { Description, type DescriptionProps } from './contentDescription';
import { Feature, type FeatureProps } from './contentFeature';
import { Features, type FeaturesProps } from './contentFeatures';
import { Title, type TitleProps } from './contentTitle';

export type ContentProps = {
  children: ReactNode;
};

function CardContentRoot({ children }: ContentProps) {
  return <div className="col-span-2 space-y-5 lg:pl-10">{children}</div>;
}

export type CardContentComponent = FC<ContentProps> & {
  Title: FC<TitleProps>;
  Description: FC<DescriptionProps>;
  Features: FC<FeaturesProps>;
  Feature: FC<FeatureProps>;
};

const CardContent = CardContentRoot as CardContentComponent;

CardContent.Title = Title;
CardContent.Description = Description;
CardContent.Features = Features;
CardContent.Feature = Feature;

export { CardContent };
