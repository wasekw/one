window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const textNodes = [];

    function recurcy(element) {
            element.childNodes.forEach(node => {
            // console.log(node);
            // if (element.childNodes.length > 1) {
            //     recurcy(node);
            // }

                // if (node.nodeName === "#text") {
                //     return;
                // } else {
                //     console.log(node);
                //     recurcy(node);
                // }

                if (node.nodeName.match(/^H\d/)) {
                    // console.log(node);
                    // textNodes.push(node.textContent)

                    const obj = {
                        header: node.nodeName,
                        content: node.textContent.trim()
                    };
                    textNodes.push(obj);
                } else {
                    recurcy(node);
                }

        });
    }     
    

    recurcy(body);
    // console.log(textNodes);

    // Використовуєм jsonplaceholder

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    }).then(response => response.json()).then(json => console.log(json));
});