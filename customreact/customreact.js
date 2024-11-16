function customRender(reactElement, container){
   /*
    const domElement = document.createElement('reactElement.type')
    domElement.innerHTML = reactElement.child
    domElement.setAttribute('href',reactElement.attributes.href)
    domElement.setAttribute('target',reactElement.attributes.target)
    container.appendchild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childen
    for(const prop in reactElement.props){
        if(prop === 'children') continue 
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    childen: 'click to visit'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)