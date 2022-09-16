import {Rating, RatingValuesType} from "./Rating";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Rating',
    component: Rating,

} as ComponentMeta<typeof Rating>

export const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>
export const EmptyRating: ComponentStory<typeof Rating> = () => <Rating value={0} changeValue={()=>{}}/>

export const FiveStars: ComponentStory<typeof Rating> = () => <Rating value={5} changeValue={()=>{}}/>

export const ModifyingRating: ComponentStory<typeof Rating> = () => {
    const [ratingValue, setRatingValue] = useState<RatingValuesType>(0);
    return <Rating value={ratingValue} changeValue={(value) => setRatingValue(value)}/>
}