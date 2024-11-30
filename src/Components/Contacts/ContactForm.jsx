import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { HeadingSecondary } from '..';
import { Paragraph2 } from '../../GlobalStyle';
import { Button, FormWrapper, Input, InputContainer, Label, Textbox } from './Form/Form.Styles';

const ContactForm = () => {
    const [message, setMessage] = useState('Fill in the form to get in touch with us.');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3huoy9b', 'template_14funly', form.current, 'Y0ctQCIaa4xYv1jKG')
            .then(
                (result) => {
                    console.log(result.text);
                    setMessage('Message sent successfully');
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        setMessage(null);
    };
    return (
        <FormWrapper>
            <HeadingSecondary title="Get In Touch" />
            <form ref={form} onSubmit={sendEmail}>
                <InputContainer>
                    <Label htmlFor="from_name">
                        Name:
                        <Input
                            type="text"
                            id="from_name"
                            required
                            placeholder="Your Name"
                            name="from_name"
                        />
                    </Label>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="from_phone">
                        Phone:
                        <Input
                            type="tel"
                            id="from_phone"
                            required
                            placeholder="+8801234567"
                            name="from_phone"
                        />
                    </Label>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="from_email">
                        Email:
                        <Input
                            type="email"
                            id="from_email"
                            required
                            placeholder="email@unitrendinternational.com"
                            name="from_email"
                        />
                    </Label>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="message">
                        Message:
                        <Textbox
                            type="email"
                            id="message"
                            required
                            placeholder="Write Message Us"
                            name="message"
                        />
                    </Label>
                </InputContainer>
                <div />

                <Button type="submit">Send</Button>
                <Paragraph2>{message}</Paragraph2>
            </form>
        </FormWrapper>
    );
};

export default ContactForm;
