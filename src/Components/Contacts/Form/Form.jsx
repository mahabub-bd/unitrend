import { Button } from './Form.Styles';
import TextInput from './TextInput';

function Form({ values, handleChange, handleSubmit }) {
    const { name, email, phonenumber, message } = values;
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleChange}
            />

            <TextInput
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleChange}
            />

            <TextInput
                name="phonenumber"
                type="telephone"
                label="Phone Number"
                placeholder="+880-123-456-7890"
                value={phonenumber}
                onChange={handleChange}
            />

            <TextInput
                name="message"
                type="textarea"
                label="Message"
                placeholder="Write Your Message"
                value={message}
                onChange={handleChange}
            />

            <br />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default Form;
