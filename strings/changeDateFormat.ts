function changeDateFormat(str: string) {
    return str.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/g,
     (_, month, day, year) => `${day}.${month}.${year}` )
}
const str = "World War I or the First World War (07/28/1914 – 11/11/1918) was a global conflict between two coalitions: the Allies and the Central Powers.";

console.log(changeDateFormat(str));
// "World War I or the First World War (28.07.1914 – 11.11.1918) was a global conflict between two coalitions: the Allies and the Central Powers.";
export{}
//World War I or the First World War (28.07.1914 – 11.11.1918) was a global conflict between two coalitions: the Allies and the Central Powers.



