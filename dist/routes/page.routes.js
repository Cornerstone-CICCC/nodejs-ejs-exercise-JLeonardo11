"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
//Home
pageRouter.get("/", (req, res) => {
    res.status(200).render('home', {
        title: 'Kingdom of the Sun' //home
    });
});
//about
pageRouter.get("/about", (req, res) => {
    res.status(200).render('about', {
        title: 'About the sun' //about
    });
});
//contact
pageRouter.get('/constact', (req, res) => {
    res.status(200).render('contact', {
        title: 'contact Him' //contact
    });
});
exports.default = pageRouter;
