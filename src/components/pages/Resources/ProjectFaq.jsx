import React from 'react';
import { Accordion } from '@components';

export const ProjectFaq = () => (
    <Accordion>
        <div label="I want to start a project. How do I start?">
            <p className='res__section'>
                We haven't migrated this yet from our old site but you can check it out here at the bottom! <a href='https://csecutsc.github.io/csec_site/resources'>
                    csec.club v1 resources page
                </a>
            </p>
        </div>
        <div label='I want to start a mobile application project. Where to I start?'>
            <p className='res__section'>
                We haven't migrated this yet from our old site but you can check it out here at the bottom! <a href='https://csecutsc.github.io/csec_site/resources'>
                    csec.club v1 resources page
                </a>
            </p>
        </div>
        <div label='I want to start a web application project. Where to I start?'>
            <p className='res__section'>
                We haven't migrated this yet from our old site but you can check it out here at the bottom! <a href='https://csecutsc.github.io/csec_site/resources'>
                    csec.club v1 resources page
                </a>
            </p>
        </div>
    </Accordion>
);