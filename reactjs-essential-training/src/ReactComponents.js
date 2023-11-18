import React from 'react';

const dishes = [
    "Black Beans Soup",
    "Chicken Soup",
    "Mutton Karahi",
    "Chicken Roast",
    "Pizza"
];

const dishObjects = dishes.map((dish, i) => (
    {
        id: i,
        title: dish
    }
));

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
            <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=200&h=750&dpr=1"
                alt="A waiter presents two plates at a fancy restuarant." />
            <ul>
                {
                    props.dishes.map((dishObj) => (
                        <li key={dishObj.id}>{dishObj.title}</li>
                    ))
                /* {props.dishes.map((dish, iterator) => (
                    <li key={iterator}>{dish}</li>
                ))} */}
            </ul>
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
        //<div> -- Instead of using Divs we can use React.Fragment
        <React.Fragment>
            <Header name="Lubna" />
            <Main adjective="delecious" dishes={dishObjects} />
            <Footer year={new Date().getFullYear()} />
        </React.Fragment>
        //</div>
    );
}

export default ReactComponents;