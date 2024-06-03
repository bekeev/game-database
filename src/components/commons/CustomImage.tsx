import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Spinner } from 'react-bootstrap';

const StyledImage = styled(Image)<{ isLoaded: boolean }>`
    display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
`;

type TProps = {
    imageSrc: string;
    width?: number;
};

export const CustomImage: React.FC<TProps> = ({ imageSrc, width = 200 }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <Spinner />}
            <StyledImage
                src={imageSrc}
                rounded
                width={width}
                isLoaded={isLoaded}
                onLoad={() => setIsLoaded(true)}
            />
        </>
    );
};
