// ============== helper function ============== //

// convert object of objects til an array of objects
function prepareData(dataObject) {
    const array = []; // define empty array
    // loop through every key in dataObject
    // the value of every key is an object
    for (const key in dataObject) {
        const object = dataObject[key]; // define object
        object.id = key; // add the key in the prop id
        array.push(object); // add the object to array
    }
    return array; // return array back to "the caller"
}

// compare title - used by .sort
function compareTitle(post1, post2) {
    return post1.title.localeCompare(post2.title);
}

// compare body - used by .sort
function compareBody(post1, post2) {
    return post1.body.localeCompare(post2.body);
}

export { prepareData, compareTitle, compareBody };
