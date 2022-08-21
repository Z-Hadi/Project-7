import { defineStore } from "pinia";

export const newStore = defineStore({
    id: "tryStore",

    state: () => ({
        firstName: '',
        lastName: '',
        emailAddress: '',
        picture: ''

    }),

    actions: () => ({


    }),

    getters: () => ({


    }),
});