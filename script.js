

const container = React.createElement("div",{className:"container"},[

    React.createElement("h1",{key:1},"Topics Covered"
    ),
    React.createElement("p",{key:2,className:"pwithh1"},"The following is a list of all the topics we cover int the Geekster Learning Area"),

    React.createElement("section",{},
        React.createElement("a",{href:"#"},"Getting  started with the web"),
        React.createElement("p",{},"Provides a practical intro to web dev for complete beginners"),
    ),
    React.createElement("section",{},
        React.createElement("a",{href:"#"},"HTML - Structuring the Web"),
        React.createElement("p",{},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed omnis maiores dicta eos illum accusamus voluptatem numquam et voluptate!"),
    ),
    React.createElement("section",{},
        React.createElement("a",{href:"#"},"CSS - Styling the Web"),
        React.createElement("p",{},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed omnis maiores dicta eos illum accusamus voluptatem numquam et voluptate!"),
    )
])

const rootEl =document.getElementById("root");
const root=ReactDOM.createRoot(rootEl);
root.render(container)