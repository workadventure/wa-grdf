/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags);

    WA.room.area.onEnter('conference').subscribe(() => {
        WA.room.showLayer('floor/dooropened');
        WA.room.hideLayer('floor/doorclosed');
    });
    WA.room.area.onLeave('conference').subscribe(() => {
        WA.room.hideLayer('floor/dooropened');
        WA.room.showLayer('floor/doorclosed');
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
