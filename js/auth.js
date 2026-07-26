/* ==========================================================
   ENABLEX AUTHENTICATION ENGINE
   auth.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("EnableX Authentication Loaded");

    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    /* =========================================
       PASSWORD VISIBILITY
    ========================================= */

    if (togglePassword && password) {

        togglePassword.addEventListener("click", () => {

            const isPassword = password.type === "password";

            password.type = isPassword ? "text" : "password";

            togglePassword.textContent = isPassword ? "🙈" : "👁";

        });

    }

    /* =========================================
       EMAIL VALIDATION
    ========================================= */

    function isValidEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    }

    /* =========================================
       TOAST
    ========================================= */

    function showToast(message, type = "success") {

        const oldToast = document.querySelector(".toast");

        if (oldToast) {

            oldToast.remove();

        }

        const toast = document.createElement("div");

        toast.className = `toast ${type}`;

        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.classList.add("show");

        }, 10);

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => toast.remove(), 300);

        }, 3000);

    }

    /* =========================================
       LOGIN
    ========================================= */

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const userEmail = email.value.trim();
            const userPassword = password.value.trim();

            if (!isValidEmail(userEmail)) {

                showToast("Please enter a valid email address.", "error");

                email.focus();

                return;

            }

            if (userPassword.length < 8) {

                showToast("Password must be at least 8 characters.", "error");

                password.focus();

                return;

            }

            const button = loginForm.querySelector("button[type='submit']");

            button.disabled = true;

            const originalText = button.textContent;

            button.textContent = "Signing In...";

            // Simulate authentication request
            setTimeout(() => {

                const session = {
                    email: userEmail,
                    loggedIn: true,
                    loginTime: new Date().toISOString()
                };

                localStorage.setItem(
                    "enablex-session",
                    JSON.stringify(session)
                );

                showToast("Login successful!");

                setTimeout(() => {

                    window.location.href = "dashboard.html";

                }, 1200);

            }, 1500);

        });

    }

});
