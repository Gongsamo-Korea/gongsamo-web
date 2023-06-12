import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography15 from "@/components/ui/textStyles/Typography15";
import type { Category } from '@/models/category';

const CategoryTag = ({ category }: { category: Category }) => {
    return (
        <Wrapper background={category.color}>
            <Typography15 text={category.label} color={theme.colors.gray9} weight={400} />
        </Wrapper>
    )
}

const Wrapper = styled('button')<{ background: string }>`
    display: inline-flex;
    align-items: center;

    box-sizing: border-box;
    padding: 0.2rem 1rem;
    
    border-radius: 1.5rem;
    border: 0.0625rem solid ${({ theme }) => theme.colors.gray8};

    background: ${({ background }) => background};
`

export default CategoryTag;