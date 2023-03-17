import Section from '../Section/Section';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import {Form, Label, Input, Button} from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return(
        <Section>
            <Form onSubmit={handleSubmit} autoComplete="off">
            <Label>Username
                <Input type="name" name="name"></Input>
            </Label>
            <Label>Email
                <Input type="email" name="email"></Input>
            </Label>
            <Label>Password
                <Input type="password" name="password"></Input>
            </Label>
            <Button type="submit">Register</Button>
        </Form>
        </Section>
    );
};