import random
import tkinter as tk

def generar_palabra():
    verbos = open("verbos.txt", "r", encoding="utf8").read().splitlines()
    sustantivos = open("sustantivos.txt", "r", encoding="utf8").read().splitlines()
    
    palabra1 = random.choice(verbos)
    palabra2 = random.choice(sustantivos)
    
    palabra_generada = palabra1 + " " + palabra2
    
    etiqueta_palabra.config(text=palabra_generada)

ventana = tk.Tk()
ventana.title("Generador de palabras")
ventana.config(bg="green")

etiqueta_palabra = tk.Label(ventana, text="", font=("Arial", 24), bg="green", fg="white")
etiqueta_palabra.pack(pady=20)

boton_generar = tk.Button(ventana, text="Generar palabra", font=("Arial", 16), command=generar_palabra)
boton_generar.pack(pady=10)

ventana.mainloop()
