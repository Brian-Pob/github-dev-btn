
/* Listens for new content loaded on page without redirect*/
document.addEventListener("pjax:end", addbtn);

/* Executes function on window load */
window.onload = addbtn;

function addbtn() {
    /* Adds button to page */
    /* Initial if statement to check if button already exists */
    if(document.getElementById("github-dev-btn") == null){
        let anchor;
        let elems = document.getElementsByTagName('div');
        for (let i = 0; i < elems.length; i++) {
            /**
             * Targets the div with the branch menu, "Go to file", "Add file", 
             * and "Code" buttons are
             */
            if(elems[i].classList.contains('flex-items-start')){
                anchor = elems[i];
            }
        }

        /* Creates button */
        const devbtn = document.createElement('a');

        /* Sets button attributes */
        devbtn.innerHTML = '<a id="github-dev-btn" class="btn ml-2 d-none d-md-block" style="color:#539BF5; background: var(--color-accent-subtle);">GitHub.dev</a>'

        /* Get url */
        let devurl = window.location.href;
        // find first occurance of 'com' and replace with 'dev'
        devurl = devurl.replace(/com/g, 'dev');
        devbtn.href = devurl;

        // meant to insert after the branch menu
        anchor.insertBefore(devbtn, anchor.firstChild.nextSibling.nextSibling);
    }
}

