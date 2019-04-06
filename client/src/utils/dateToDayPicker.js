export default function dateToDayPicker(str) {
    // yyyy/mm/dd --> [yyyy, mm, dd]
    const date = str.split("-");

    // dayPicker uses a 0 index for January
    date[1] = String(parseInt(date[1])-1).padStart(2, "0");

    console.log(date);
    return [date[0], date[1], date[2]];
}