function Header(props) {
    console.log(props);
    return (
        <header><h1>{props.name}'s Kitchen</h1></header>
    )
}

function Main(props) {
    return (
        <section>
            <p>We serve the most {props.adjective} food.</p>
        </section>
    )
}

function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.year}.</p>
        </footer>
    )
}

function ReactComponents() {
    return (
        <div>
            <Header name="Rebecca" />
            <Main adjective="delecious" />
            <Footer year={new Date().getFullYear()} />
        </div>
    );
}

export default ReactComponents;