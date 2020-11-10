/*

Aplicación desarrollada puramente con JS
para las clases de Desarrollo de Aplicaciones Web y Multiplataforma
de Nuevas Profesiones (Sevilla)

Web: https://fpnuevasprofesiones.es/

*/
'use strict'



/**
 *  Definición de Clase Jugador
 *  Mediante esta clase voy a controlar lo que sucede con el visitante
 *  además de gamificar 
 */

class Jugador {
    /*
    *Inicializamos jugador con 0 puntos
    */
    constructor() {
        this.puntos = 0;
    }

    /*
    * Métodos Getters y Setters Básicos
    */
    getApodo(){
        return this.apodo;
    }
    getRol(){
        return this.apodo;
    }
    getPuntos(){
        return this.apodo;
    }
    setApodo(apodo) {
        this.apodo = apodo;
    }    
    setRol(rol) {
        this.rol = rol;
    }
    setPuntos(puntos) {
        this.puntos = puntos;
    }
    setDatos(apodo, rol) {
        this.apodo = apodo;
        this.rol = rol;
    }

    /**
     * Métodos adicionales de Jugador
     */
    saludo() {
        let saludo = "Hola <b>" + this.getApodo() + "</b>, ahora tienes <b>" + this.puntos + " Puntos</b>. <span>¿Quieres más puntos?</span>.";
        let menu = $("#menu");
        menu.innerHTML=saludo;
        menu.style.display = "block";
    }
}


/*
 * Variables globales
 */

let jugador = new Jugador();



/*
 * Función inicial para el juego
 */


function start() {
    let bienvenida = $("#bienvenida");
    let datos = $("#datos");
    
    bienvenida.style.display = "none";
    datos.style.display = "block";
}

function cargardatos() {
    let apodo = $("#apodo");
    let rol = $("#rol");
    console.log(rol.value);
    jugador.setDatos(apodo.value, rol.value);
    jugador.setPuntos(1);
    jugador.saludo();
        if(rol.value=="web"){
            dev();
        } else if(rol.value=="teacher"){
            teacher();
        }else{
            other();
        }
}

function dev(){
    let datos = $("#datos");
    let web = $("#web-bienvenida");
    let container = $(".container");

    container.style.width ="75%";
    container.style.height ="75%";

    datos.style.display = "none";
    web.style.display = "block";
}

function teacher(){

}

function other(){

}


/**
 *  funciones auxiliares
 */

function $(selector) {
    return document.querySelector(selector);
}