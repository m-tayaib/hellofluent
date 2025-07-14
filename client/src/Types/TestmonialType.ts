import testmonialData from "../data/TestmonialData.json"
export interface TestmonialCardProps {
    title: string;
    message: string;
    author: string;
    stars?: number;
  }

export const TestmonialData : TestmonialCardProps[] = [...testmonialData]