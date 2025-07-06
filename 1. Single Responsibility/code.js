const fs = require('fs');

class Journal {

    count = 0
    constructor() {
        this.entries = {};
    }

    addEntry(entry) {
        this.entries[this.count++] = entry;
        return this.count - 1;
    }

    removeEntry(index) {
        if (this.entries[index]) {
            delete this.entries[index];
            return true;
        }
        return false;
    }

    updateEntry(index, newEntry) {
        if (this.entries[index]) {
            this.entries[index] = newEntry;
            return true;
        }
        return false;
    }

    getEntries() {
        return this.entries;
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    // saveToFile(filename) {
    //     fs.writeFileSync(filename, this.toString(), 'utf8');
    // }

    // loadFromFile(filename) {
    //     if (fs.existsSync(filename)) {
    //         const data = fs.readFileSync(filename, 'utf8');
    //         this.entries = {};
    //         data.split('\n').forEach((entry, index) => {
    //             if (entry.trim()) {
    //                 this.entries[index] = entry;
    //             }
    //         });
    //         this.count = Object.keys(this.entries).length;
    //     } else {
    //         throw new Error(`File ${filename} does not exist.`);
    //     }
    // }

    // saveToServer(serverUrl) {
    //     // TODO: Implement server saving logic
    // }

    // loadFromServer(serverUrl) {
    //     // TODO: Implement server loading logic
    // }
}


class PersistanceManager {

    preProcessJournal(journal) {
        // This method can be used to preprocess the journal before saving or loading
        // For example, we could format the entries or validate them
        return journal;
    }

    postProcessJournal(journal) {
        // This method can be used to post-process the journal after loading
        // For example, we could log the entries or perform some cleanup
        return journal;
    }

    saveToFile(filename, journal) {
        fs.writeFileSync(filename, journal.toString(), 'utf8');

    }

    loadFromFile(filename, journal) {
        if (fs.existsSync(filename)) {
            const data = fs.readFileSync(filename, 'utf8');
            journal.entries = {};
            data.split('\n').forEach((entry, index) => {
                if (entry.trim()) {
                    journal.entries[index] = entry;
                }
            });
            journal.count = Object.keys(journal.entries).length;
        } else {
            throw new Error(`File ${filename} does not exist.`);
        }
    }

    saveToServer(serverUrl, journal) {
        // TODO: Implement server saving logic
    }

    loadFromServer(serverUrl, journal) {
        // TODO: Implement server loading logic
    }
}

const journal = new Journal();
const persistanceManager = new PersistanceManager();
console.log(journal.addEntry("Today I learned about the Single Responsibility Principle."));
console.log(journal.addEntry("I also learned about the Open/Closed Principle."));
console.log(journal.addEntry("I learned about the Liskov Substitution Principle."));
console.log(journal.addEntry("I learned about the Interface Segregation Principle."));
console.log(journal.toString());
console.log(journal.updateEntry(1, "I learned about the Open/Closed Principle and its importance."));
console.log(journal.toString());
console.log(journal.removeEntry(2));
console.log(journal.toString());
persistanceManager.saveToFile('journal.txt', journal);
console.log("Journal saved to journal.txt");
persistanceManager.loadFromFile('journal.txt', journal);
console.log("Journal loaded from journal.txt");
console.log(journal.toString());