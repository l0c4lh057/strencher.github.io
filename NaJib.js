var NaJib = {
    version: "0.0.4",
    injectCSS: function (id, css) {
        let element = document.createElement("style");
        element.innerHTML = css;
        element.type = "text/css";
        element.id = id;
        document.head.appendChild(element);
        return element;
    },
    clearCSS: function (id) {
        let styleid = document.getElementById(id);
        if (!styleid) {
            console.error(`%c[NaiJib]%c Please enter a valid id!`, "color: #3A71C1", "");
        }
        if (styleid) {
            styleid.remove();
            console.info(`%c[NaiJib]%c Successfull cleared CSS!`, "color: #3A71C1", "");
        }
    },
    injectScript: function (id, script) {
        let element = document.createElement("script");
        element.innerHTML = script;
        element.type = "text/javascript";
        element.id = id;
        document.head.appendChild(element);
        return element;
    },
    injectCSSafter: function (id, css, delay) {
        setTimeout(() => {
            let element = document.createElement("style");
            element.innerHTML = css;
            element.id = id;
            document.head.appendChild(element);
            return element;
        }, delay);
    },
    clearCSSafter: function (id, delay) {
        setTimeout(() => {
            let styleid = document.getElementById(id);
            if (!styleid) {
                console.error(`%c[NaiJib]%c Please enter a valid id!`, "color: #3A71C1", "");
            }
            if (styleid) {
                styleid.remove();
                console.info(`%c[NaiJib]%c Successfull cleared CSS!`, "color: #3A71C1", "");
            }
        }, delay);
    },
    showToast: function (text, type) {
        if (type === "success") {
            let a = $(`<div class="container-1giJp5 da-container najib-Toast-success">
        <div class="inner-tyMogq da-inner">
        <div class="labelWrapper-Pniq53 da-labelWrapper">
        <div class="size14-e6ZScH title-eS5yk3 da-title rtcConnectionStatusConnected-VRZDjy">
        </div>
        <h1 class="najib-toast-text">
            ${text}
        </h1>
        </div>
        </div>
        </div>
        <div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6" style="flex: 0 0 auto;">
        </div>
        </div>
        `);
            a.on("contextmenu", () => {
                a.remove()
            })
            window.setTimeout(() => {
                a.remove()
            }, 5000);
            $(".panels-j1Uci_").prepend(a);
        }
        if (type === "error") {
            let a = $(`<div class="container-1giJp5 da-container najib-Toast-error">
        <div class="inner-tyMogq da-inner">
        <div class="labelWrapper-Pniq53 da-labelWrapper">
        <div class="size14-e6ZScH title-eS5yk3 da-title rtcConnectionStatusConnected-VRZDjy">
        </div>
        <h1 class="najib-toast-text">
            ${text}
        </h1>
        </div>
        </div>
        </div>
        <div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6" style="flex: 0 0 auto;">
        </div>
        </div>
        `);
            a.on("contextmenu", () => {
                a.remove()
            })
            window.setTimeout(() => {
                a.remove()
            }, 5000);
            $(".panels-j1Uci_").prepend(a);
        }
        if (type === "info") {
            let a = $(`<div class="container-1giJp5 da-container najib-Toast-info">
        <div class="inner-tyMogq da-inner">
        <div class="labelWrapper-Pniq53 da-labelWrapper">
        <div class="size14-e6ZScH title-eS5yk3 da-title rtcConnectionStatusConnected-VRZDjy">
        </div>
        <h1 class="najib-toast-text">
            ${text}
        </h1>
        </div>
        </div>
        </div>
        <div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6" style="flex: 0 0 auto;">
        </div>
        </div>
        `);
            a.on("contextmenu", () => {
                a.remove()
            })
            window.setTimeout(() => {
                a.remove()
            }, 5000);
            $(".panels-j1Uci_").prepend(a);
        }
        if (type === "normal") {
            let a = $(`<div class="container-1giJp5 da-container najib-Toast-normal">
        <div class="inner-tyMogq da-inner">
        <div class="labelWrapper-Pniq53 da-labelWrapper">
        <div class="size14-e6ZScH title-eS5yk3 da-title rtcConnectionStatusConnected-VRZDjy">
        </div>
        <h1 class="najib-toast-text">
            ${text}
        </h1>
        </div>
        </div>
        </div>
        <div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6" style="flex: 0 0 auto;">
        </div>
        </div>
        `);
            a.on("contextmenu", () => {
                a.remove()
            })
            window.setTimeout(() => {
                a.remove()
            }, 5000);
            $(".panels-j1Uci_").prepend(a);
        }

    }
}
if (!document.getElementById("NaJibCSS")) {

    NaJib.injectCSS("NaJibCSS", `
                    .najib-Toast-success {
                        background-color: #43B581 !important;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        margin-bottom: 3px;
                    }
                    .najib-toast-text {
                        font-size: 15px;
                        color: white;
                        text-align: center;
                    }
                    .najib-Toast-error {
                        background-color: #f04747 !important;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        margin-bottom: 3px;
                    }
                    .najib-Toast-normal {
                        background-color: #36393f !important;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        margin-bottom: 3px;
                    }
                    .najib-Toast-info {
                        background-color: #0096d6 !important;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        margin-bottom: 3px;
                    }
                `);
}