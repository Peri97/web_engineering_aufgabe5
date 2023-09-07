const { openBrowser, write, closeBrowser, goto, click, text } = require('taiko');
const { gauge } = require('gauge-js');

// Film hinzufügen
gauge.step("Die Filmdatenbank ist leer", async function() {
    // Logik, um sicherzustellen, dass die Datenbank leer ist
});

gauge.step("Gehe zur Seite 'Film hinzufügen'", async function() {
    await goto('http://localhost:3000/addFilm');
});

gauge.step("Ein Film mit dem Titel 'Inception' und dem Genre 'Science-Fiction' wird hinzugefügt", async function() {
    await write('Inception', into('input[name="title"]'));
    await write('Science-Fiction', into('input[name="genre"]'));
});

gauge.step("Klicke auf den Button 'Hinzufügen'", async function() {
    await click('Hinzufügen');
});

gauge.step("Die Filmliste enthält 'Inception'", async function() {
    assert.ok(await text('Inception').exists());
});

gauge.step("Der Film 'Inception' hat das Genre 'Science-Fiction'", async function() {
    // Überprüfungslogik hier
});

// Film aktualisieren
gauge.step("Gehe zur Seite 'Film bearbeiten'", async function() {
    await goto('http://localhost:3000/editFilm');
});

gauge.step("Der Film 'Inception' wird aktualisiert mit dem Genre 'Action'", async function() {
    await write('Action', into('input[name="genre"]'));
});

gauge.step("Der Film 'Inception' hat jetzt das Genre 'Action'", async function() {
    // Überprüfungslogik hier
});

// Film löschen
gauge.step("Gehe zur Seite 'Filmliste'", async function() {
    await goto('http://localhost:3000/films');
});

gauge.step("Ein Film mit dem Titel 'Inception' wird gelöscht", async function() {
    await click('Löschen', near('Inception'));
});

gauge.step("Die Filmliste enthält 'Inception' nicht mehr", async function() {
    assert.ok(await text('Inception').doesNotExist());
});