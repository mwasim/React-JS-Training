import { useRef } from "react"; //Use useRef hook to reach form elements and get it's value

function FormsInReact() {
    const txtTitle = useRef();
    const hexColor = useRef();

    //console.log(txtTitle);

    const submit = (e) => {
        e.preventDefault();

        const title = txtTitle.current.value;
        const color = hexColor.current.value;

        alert(`${title}, ${color}`);

        //reset values
        txtTitle.current.value = "";
        hexColor.current.value = "";
    };

    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="color title..." ref={txtTitle} />
            <input type="color" ref={hexColor} />
            <button>ADD</button>
        </form>
    );
}

export default FormsInReact;