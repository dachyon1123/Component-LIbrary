import React from "react";
import Input from "./Input";


export default {
    title: 'form/Input',
    component: Input
}


export const Small = () => <Input variant="small">Small</Input>
export const Regular = () => <Input variant="regular">Regular</Input>
export const Large = () => <Input variant="large">Large</Input>
export const Xlarge = () => <Input variant="xlarge">Xlarge</Input>


Small.storyName = 'Small Input'
Regular.storyName = 'Regular Input'
Large.storyName = 'Large Inpout'
Xlarge.storyName = 'Extra Large Input'