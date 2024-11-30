import { Input, Label } from './Form.Styles';

function TextInput({ name, label, type, placeholder, value, onChange }) {
    return (
        <div className="form-group">
            <Label htmlFor={name}>{label}</Label>
            <Input
                className="form-control"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default TextInput;
