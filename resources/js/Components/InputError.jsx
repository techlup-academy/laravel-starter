export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'invalid-feedback ' + className}>
            {message}
        </p>
    ) : null;
}
