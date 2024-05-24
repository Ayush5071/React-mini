function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    // below code will work,but we have to amke it more production frindly;

    // domElement.setAttribute('target',reactElement.props.target)
    // domElement.setAttribute('href',reactElement.props.href)
    // container.appendChild(domElement);

    //now more advanced code ,using loop;
    for(const prop in reactElement.props){
        if(prop == "children") continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}
const reactElement = {
    type:"a",
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer);