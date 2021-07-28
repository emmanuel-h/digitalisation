// TODO: Find funnier replacements
// TODO: Find another way te retrieve text node than browse all DOM
// TODO: Manage case for matching.

getAllTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(/transformation numérique|transformation digitale|à taille humaine/gi, customReplace);
});

function getAllTextNodes(){
    let result = [];

    (function scanSubTree(node){
        if(node.childNodes.length)
            for(let i = 0; i < node.childNodes.length; i++)
                scanSubTree(node.childNodes[i]);
        else if(node.nodeType === Node.TEXT_NODE)
            result.push(node);
    })(document);

    return result;
}

function customReplace(value){
    switch (value) {
        case "transformation numérique":
        case "transformation digitale":
            return "magie noire"
        case "à taille humaine":
            return "de merde"
    }
}