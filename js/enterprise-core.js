/* ==========================================================
   ENABLEX ENTERPRISE CORE FRAMEWORK
========================================================== */

class EnterpriseCore {

    constructor() {

        this.storagePrefix = "enablex";

        console.log("EnableX Enterprise Core Loaded");

    }

    save(key, value) {

        localStorage.setItem(
            `${this.storagePrefix}-${key}`,
            JSON.stringify(value)
        );

    }

    load(key) {

        const value = localStorage.getItem(
            `${this.storagePrefix}-${key}`
        );

        return value ? JSON.parse(value) : null;

    }

    toast(message, className = "enterprise-toast") {

        document
            .querySelectorAll(`.${className}`)
            .forEach(e => e.remove());

        const toast = document.createElement("div");

        toast.className = className;

        toast.textContent = message;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add("active");
        });

        setTimeout(() => {

            toast.classList.remove("active");

            setTimeout(() => toast.remove(), 300);

        }, 2500);

    }

    registerButtons(selector) {

        document
            .querySelectorAll(selector)
            .forEach(button => {

                button.addEventListener("click", () => {

                    const card = button.closest("[class$='card']");

                    const title =
                        card?.querySelector("h2")?.textContent ??
                        "Action";

                    this.save("last-action", title);

                    button.textContent = "Activated ✓";

                    this.toast(`${title} activated`);

                });

            });

    }

}

window.EnableX = new EnterpriseCore();
