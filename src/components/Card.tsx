import * as React from 'react';
import { ReactNode } from 'react';
import { Row } from './Row.tsx';
import { Stack } from './Stack.tsx';

export const Card = ({ children }: { children: ReactNode }) => {

  let heading;
  let content;
  let image;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) &&
      !(child.type === Card.Image || child.type === Card.Content || child.type === Card.Heading)) {
      throw new Error("Only valid card components are allowed");
    }

    if (React.isValidElement(child) && child.type === Card.Heading) {
      heading = child;
    }

    if (React.isValidElement(child) && child.type === Card.Image) {
      image = child;
    }

    if (React.isValidElement(child) && child.type === Card.Content) {
      content = child;
    }
  });

  return (
    <div className="card">
      <Row>
        <>{image}</>
        <Stack>
          {heading}
          {content}
        </Stack>
      </Row>
    </div>
  );
};

export function CardHeading({ heading }: { heading: string }) {
  return (
    <h3 className="card-heading">{heading}</h3>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="card-content">{children}</div>
  );
}

export function CardImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="card-image">
      <img src={src} alt={alt} />
    </div>
  );
}

Card.Heading = CardHeading
Card.Content = CardContent
Card.Image = CardImage

