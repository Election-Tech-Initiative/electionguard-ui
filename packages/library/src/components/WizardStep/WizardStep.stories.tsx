import { deepPurple, teal } from '@material-ui/core/colors';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import WizardStep from './WizardStep';

export default {
    title: 'Components/WizardStep',
    component: WizardStep,
    argTypes: {
        step: {
            control: {
                type: 'radio',
                options: ['Step 1', 'Step 2'],
            },
            defaultValue: 'Step 1',
        },
    },
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story = ({ step }) => (
    <div>
        <WizardStep active={step === 'Step 1'}>
            <div
                style={{
                    height: '100vh',
                    width: '100%',
                    backgroundColor: teal[500],
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 24,
                }}
            >
                Step 1
            </div>
        </WizardStep>
        <WizardStep active={step === 'Step 2'}>
            <div
                style={{
                    height: '100vh',
                    width: '100%',
                    backgroundColor: deepPurple[500],
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 24,
                }}
            >
                Step 2
            </div>
        </WizardStep>
    </div>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
