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
/* =========================================
   REGISTRATION
========================================= */

const registerForm = document.getElementById("registerForm");
const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");
const strengthFill = document.getElementById("strengthFill");
const strengthLabel = document.getElementById("strengthLabel");
const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");

if (toggleRegisterPassword && registerPassword) {

    toggleRegisterPassword.addEventListener("click", () => {

        const visible = registerPassword.type === "text";

        registerPassword.type = visible ? "password" : "text";

        toggleRegisterPassword.textContent = visible ? "👁" : "🙈";

    });

}

if (registerPassword && strengthFill && strengthLabel) {

    registerPassword.addEventListener("input", () => {

        const value = registerPassword.value;

        let score = 0;

        if (value.length >= 8) score++;
        if (/[A-Z]/.test(value)) score++;
        if (/[a-z]/.test(value)) score++;
        if (/\d/.test(value)) score++;
        if (/[^A-Za-z0-9]/.test(value)) score++;

        const widths = ["0%", "20%", "40%", "60%", "80%", "100%"];
        const colors = [
            "#EF4444",
            "#EF4444",
            "#F59E0B",
            "#FBBF24",
            "#10B981",
            "#18D89E"
        ];
        const labels = [
            "Password strength",
            "Very Weak",
            "Weak",
            "Medium",
            "Strong",
            "Excellent"
        ];

        strengthFill.style.width = widths[score];
        strengthFill.style.background = colors[score];
        strengthLabel.textContent = labels[score];

    });

}

if (registerForm) {

    registerForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (registerPassword.value !== confirmPassword.value) {

            showToast("Passwords do not match.", "error");

            return;

        }

        showToast("Account created successfully!");

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1200);

    });

}

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
/* =========================================
   FORGOT PASSWORD
========================================= */

const forgotForm = document.getElementById("forgotPasswordForm");

if (forgotForm) {

    forgotForm.addEventListener("submit", (event) => {

        event.preventDefault();

        showToast("Password reset link sent successfully.");

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1800);

    });

}

/* =========================================
   RESET PASSWORD
========================================= */

const resetForm = document.getElementById("resetPasswordForm");

if (resetForm) {

    resetForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const password = document.getElementById("newPassword").value;
        const confirm = document.getElementById("confirmNewPassword").value;

        if (password !== confirm) {

            showToast("Passwords do not match.", "error");

            return;

        }

        if (password.length < 8) {

            showToast("Password must contain at least 8 characters.", "error");

            return;

        }

        showToast("Password updated successfully.");

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1500);

    });

}
