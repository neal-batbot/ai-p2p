(() => {
    const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const slots = Array.from({ length: 16 }, (_, index) => {
        const minutes = 10 * 60 + index * 30;
        return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
    });
    const state = { date: null, time: null };
    const daysNode = document.querySelector("#booking-days");
    const timesNode = document.querySelector("#booking-times");
    const selectedDayLabel = document.querySelector("#selected-day-label");
    const dateInput = document.querySelector("#booking-date");
    const timeInput = document.querySelector("#booking-time");

    const formatDateKey = (date) => [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
    const getWorkingDays = () => {
        const result = [];
        const cursor = new Date();
        cursor.setHours(0, 0, 0, 0);
        cursor.setDate(cursor.getDate() + 1);
        while (result.length < 10) {
            if (cursor.getDay() > 0 && cursor.getDay() < 6) result.push(new Date(cursor));
            cursor.setDate(cursor.getDate() + 1);
        }
        return result;
    };

    const renderTimes = () => {
        timesNode.innerHTML = "";
        if (!state.date) return;
        slots.forEach((slot) => {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = slot;
            button.className = state.time === slot ? "is-selected" : "";
            button.addEventListener("click", () => {
                state.time = slot;
                timeInput.value = slot;
                renderTimes();
            });
            timesNode.append(button);
        });
    };

    getWorkingDays().forEach((date, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "booking-day";
        button.innerHTML = `<small>${index === 0 ? "最近可约" : weekdays[date.getDay()]}</small><strong>${String(date.getDate()).padStart(2, "0")}</strong><span>${date.getMonth() + 1} 月</span>`;
        button.addEventListener("click", () => {
            state.date = formatDateKey(date);
            state.time = null;
            dateInput.value = state.date;
            timeInput.value = "";
            selectedDayLabel.textContent = `${date.getMonth() + 1} 月 ${date.getDate()} 日 · ${weekdays[date.getDay()]}`;
            document.querySelectorAll(".booking-day").forEach((node) => node.classList.remove("is-selected"));
            button.classList.add("is-selected");
            renderTimes();
        });
        daysNode.append(button);
    });

    document.querySelector("#booking-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const feedback = document.querySelector("#booking-feedback");
        if (!form.checkValidity() || !state.date || !state.time) {
            feedback.textContent = "请填写联系信息，并选择一个预约日期与时间。";
            feedback.classList.add("is-error");
            return;
        }
        const submit = form.querySelector("button[type=submit]");
        submit.disabled = true;
        submit.textContent = "正在提交…";
        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(new FormData(form)))
            });
            const result = await response.json();
            if (!response.ok || result.status !== 0) throw new Error(result.message || "提交失败，请稍后重试。");
            feedback.textContent = `预约已提交：${state.date} ${state.time}。Barbot 会通过邮件确认会议安排。`;
            feedback.classList.remove("is-error");
            feedback.classList.add("is-ready");
            form.reset();
            state.date = null;
            state.time = null;
            dateInput.value = "";
            timeInput.value = "";
            selectedDayLabel.textContent = "请选择日期";
            document.querySelectorAll(".booking-day").forEach((node) => node.classList.remove("is-selected"));
            renderTimes();
        } catch (error) {
            feedback.textContent = error.message;
            feedback.classList.add("is-error");
        } finally {
            submit.disabled = false;
            submit.innerHTML = "提交预约请求 <span>↗</span>";
        }
    });
})();
