import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guDutra:Gustavo1365@cluster0.7s6nfw7.mongodb.net/alura_node");

let db = mongoose.connection;

export default db;