import { Story, Meta as OfficialMeta } from '@storybook/react'
import React, { JSXElementConstructor, ReactNode } from 'react'

type ReactComponentType =
    | keyof JSX.IntrinsicElements
    | JSXElementConstructor<any>

type StoryWithComponentProps<
    ComponentType extends ReactComponentType,
    ComponentChildrenType = ReactNode
> = Story<
    React.ComponentProps<ComponentType> & { children?: ComponentChildrenType }
>

export function getStoryTemplate<
    ComponentType extends ReactComponentType,
    ComponentChildrenType = ReactNode
>(Component: ComponentType) {
    const Template: StoryWithComponentProps<
        typeof Component,
        ComponentChildrenType
    > = (args) => <Component {...args} />
    return Template
}

export type Meta<
    ComponentType extends ReactComponentType = React.FC
> = OfficialMeta<React.ComponentProps<ComponentType>>
