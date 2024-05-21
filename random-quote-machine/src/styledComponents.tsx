import styled from 'styled-components'

const defaultColor = '#9B5DE5'

export const Main = styled.main<{ $backgroundColor?: string }>`
    background-color: ${props => props.$backgroundColor || defaultColor};
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div<{ $color?: string }>`

    background-color: #fdfdfd;
    color: ${props => props.$color || defaultColor};
    width: 520px;
    min-height: 250px;
    border-radius: 4px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
`

export const CardButton = styled.button<{ $backgroundColor?: string }>`
    align-self: flex-end;
    background-color: ${props => props.$backgroundColor || defaultColor};
    border: none;
    color: #fdfdfd;
    padding: 5px 10px;
    border-radius: 4px;
`

export const Attribution = styled.p<{ $color?: string }>`
    align-self: flex-end;
    color: ${props => props.$color || defaultColor};
    font-size: 20px;
`

export const Quote = styled.blockquote<{ $color?: string }>`
    color: ${props => props.$color || defaultColor};
    font-size: 30px;
    flex: 1;
`
