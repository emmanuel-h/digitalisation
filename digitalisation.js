// TODO: Find funnier replacements
// TODO: Manage case for matching.

const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } }
);
let node;
while (node = treeWalker.nextNode()) {
    node.nodeValue = node.nodeValue.replace(/transformation numérique|transformation digitale|à taille humaine/gi, customReplace);
}

function customReplace(value) {
    switch (value) {
        case "transformation numérique":
        case "transformation digitale":
            return "magie noire"
        case "à taille humaine":
            return "de merde"
    }
}
