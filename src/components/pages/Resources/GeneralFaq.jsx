import React from 'react';
import { Accordion } from '@components';

export const GeneralFaq = () => (
    <Accordion>
        <div label="I'm a beginner, where do I start?">
            <p className='res__section'>
                You can start by looking reading the guides under Beginner Guides.
                This section will show you the fundamentals of programming (You dont need to read it all to program),
                an introduction to web programming, keeping tracked copies of your files and how to host your website for free as a student.
                Using Google to find solutions or get a better understanding of a concept will help you greatly.
                Once you understand the fundamentals, it'll be easier to hop to other topics in the list!
                It is ok not to remember every aspect of a language but if you want to get better, practice makes perfect!
                Also, if you're a non cs major and want to dive into more advanced computer science, check out this guide:
            </p>
            <a href='https://github.com/jwasham/coding-interview-university'>
                Guide to become a Software Engineer / Computer Science Study Guide
            </a>
        </div>
        <div label='How do I build and host my own personal website on the internet?'>
            <p className='res__section'>
                You can start by learning HTML and CSS from a tutorial site called W3Schools or
                from our past web developement seminar which you can find with the past seminars button up top.
                HTML and CSS will allow you to build a webpage. One you get a good understanding of both languages.
                You can explore CSS frameworks such as Bootstrap, Foundation and MaterializeCSS to easily make responsive webpages
                (Webpages that automatically scale to the device a user is making).
                Not only that, you can use JavaScript or JQuery to make some amazing features on your website.
            </p>
            <p className='res__section'>
                To put your site on the web, check out this guide <a href='https://csec.club/documents/csec-w-hosting.pdf'>
                    Hosting a website for free
                </a> or <a href='https://sites.utoronto.ca/ns/utorweb/request.html'>
                    request a webspace from UofT
                </a>. <a href='https://brackets.io/'>Brackets</a> is a great text editor for building
                personal websites since it auto generates your code to a webpage in real time!
            </p>
        </div>
    </Accordion>
);