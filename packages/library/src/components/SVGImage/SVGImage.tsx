/* eslint-disable react/jsx-props-no-spreading */
import React, { SVGProps } from 'react';

export interface SVGImageProps extends SVGProps<SVGSVGElement> {
    svg: React.ComponentType<SVGProps<SVGSVGElement>>;
}

/**
 * Wrapper for SVG to allow modifications
 */
export const SVGImage: React.FC<SVGImageProps> = (props) => <props.svg {...props} />;

export default SVGImage;
