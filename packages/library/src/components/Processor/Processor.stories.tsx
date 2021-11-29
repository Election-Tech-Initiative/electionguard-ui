import { TaskStatus } from '@electionguard/api-client';
import { BallotOutlined } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Message, loremIpsum } from '../../lang';
import { delay } from '../../utils/delay';
import Processor, { ProcessorProps } from './Processor';

export default {
    title: 'Components/Processor',
    component: Processor,
} as Meta;

interface ProcessorStoryProps extends ProcessorProps {
    startingStatus?: TaskStatus;
}

const Template: Story<ProcessorStoryProps> = (props) => {
    const { startingStatus } = props;
    const [status, setStatus] = useState(startingStatus || TaskStatus.Incomplete);
    return (
        <Processor
            {...(props as ProcessorProps)}
            startingStatus={status}
            onProcess={async () => {
                await delay(3000);
            }}
            onComplete={() => setStatus(TaskStatus.Incomplete)}
        />
    );
};

const args = {
    Icon: BallotOutlined,
    title: new Message('overload', 'Run a Long Process'),
    description: new Message('overload', loremIpsum),
    processingButtonText: new Message('overload', 'Process'),
};

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = args;

export const Processing = Template.bind({});
Processing.storyName = 'Processing';
Processing.args = {
    startingStatus: TaskStatus.Processing,
    ...args,
};

export const Complete = Template.bind({});
Complete.storyName = 'Complete';
Complete.args = {
    startingStatus: TaskStatus.Complete,
    ...args,
};

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = {
    startingStatus: TaskStatus.Error,
    ...args,
};
