export function getMonths() {
    const months = []
    for (let i = 1; i <= 12; i++) {
        months.push(String(i).padStart(2, "0"))
    }

    return months
}

export function getYears() {
    const years = []
    for (let i = 2000; i <= 2050; i++) {
        years.push(String(i).padStart(2, "0"))
    }

    return years
}
